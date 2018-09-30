const express = require("express");
const mongoose = require("mongoose");
const crypto = require("crypto");

const router = express.Router();

let obj = {
    title: "Приветствие"
};

router.get("/", (req, res) => {
    res.render("./pages/index", obj);
});

router.get("/index(.html)?", (req, res) => {
    res.render("./pages/index", obj);
});

router.post("/", (req, res) => {
    //требуем наличия логина и пароля в теле запроса
    if (!req.body.login || !req.body.password) {
        //если не указаны логин и пароль - сообщаем об этом
        return res.json({status: "Укажите логин и пароль!"});
    }
    
    //требуем отмеченный checkbox и radio
    if (!req.body.check || req.body.robot !== "yes") {
        return res.json({status: "Подтвердите, что вы не робот"});
    }
    
    //получаем модель пользователя и шифруем введенный пароль
    const Model = mongoose.model("user");
    const password = crypto
        .createHash("md5")
        .update(req.body.password)
        .digest("hex");
    //пытаемся найти пользователя с указанным логином и паролем
    Model
        .findOne({login: req.body.login})
        .then(item => {
            //если такой пользователь не найден - сообщаем об этом
            if (!item) {
                res.json({status: "Логин и/или пароль введены неверно!"});
            } else {
                //если найден, то делаем пометку об этом в сессии пользователя, который сделал запрос
                req.session.isAdmin = true;
                res.json({status: "Авторизация успешна!"});
            }
        })
});

module.exports = router;












