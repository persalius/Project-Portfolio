const express = require("express");
const formidable = require("formidable");
const fs = require("fs");
const path = require("path");
const config = require("../config.json");
const mongoose = require("mongoose");

const router = express.Router();

// проверка на авторизацию
const isAdmin = (req, res, next) => {
    //если в сессии текущего пользователя есть пометка о том, что он является администратором
    if (req.session.isAdmin) {
        //то все хорошо
        return next();
    }
    //если нет, то перебросить пользователя на главную страницу сайта
    res.redirect("/");
}

//путь к странице
router.get("/", isAdmin, (req, res) => {
    let obj = {
        title: "Админ"
    };
    res.render("./pages/admin", obj);
});

// ========== загрузка изображений ==========
router.post("/upload", isAdmin, (req, res) => {
    let form = new formidable.IncomingForm();
    form.uploadDir = path.join(process.cwd(), config.upload);
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.json({status: "Не удалось загрузить картинку"});
        }
                
        if (!fields.name) {
            fs.unlink(files.photo.path);
            return res.json({status: "Не указано название проекта"});
        }
                
        if (!fields.technologies) {
            fs.unlink(files.photo.path);
            return res.json({status: "Не указаны технологии"});
        }
        
        // если ошибок нет, то создаем новую picture и передаем в нее поле из формы
        const Model = mongoose.model("pic");
        fs.rename(files.photo.path, path.join(config.upload, files.photo.name), err => {
            if (err) {
                fs.unlink(path.join(config.upload, files.photo.name));
                fs.rename(files.photo.path, files.photo.name);
            }
            let dir = config.upload.substr(config.upload.indexOf("/"));
            const item = new Model({name: fields.name});
            item
                .save()
                .then(pic => {
                Model.update({_id: pic._id}, {$set: {picture: path.join(dir, files.photo.name)}}).then(
                    i => res.json({status: "Картинка успешно загружена"}),
                    e => res.json({status: e.message})
                );
            })
        })
        
    });
});

// ========== загрузка постов ==========
router.post("/addpost", isAdmin, (req, res) => {
    //требуем наличия заголовка, даты и текста
    if (!req.body.title || !req.body.date || !req.body.text) {
        return res.json({status: "Укажите данные!"});
    }
    
    //создаем новую запись блога и передаем в нее поля из формы
    const Model = mongoose.model("blog");
    let item = new Model({title: req.body.title, date: new Date(req.body.date), body: req.body.text});
    item.save().then(
        //обрабатываем и отправляем ответ в браузер
        i => {
            return res.json({status: "Запись успешно добавлена"});
        }, e => {
            //если есть ошибки, то получаем их список и так же передаем в шаблон
            const error = Object
                .keys(e.errors)
                .map(key => e.errors[key].message)
                .join(", ");
            
            //обрабатываем и отправляем ответ в бразуер
            res.json({
                status: "При добавлении записи произошла ошибка: " + error
            });
        }
    )
});

module.exports = router;





