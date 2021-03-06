const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer"); // пакет для отправки письма на почту
const config = require("../config.json");
const mongoose = require("mongoose");

router.get("/", (req, res) => {
    let obj = {
        title: "Мои Работы"
    };
    const Model = mongoose.model("pic");
    Model
        .find()
        .then(items => {
        //обрабатываем шаблон и отправляем его в браузер передав в шаблон item с изображениями и текстом
        Object.assign(obj, {items: items});
        res.render("./pages/works", obj);
    })
});

//===== отправка письма на почту =====
router.post("/", (req, res) => {
    //требуем наличия имени, обратной почты и текста
    if(!req.body.name || !req.body.email || !req.body.text) {
        //если что-либо не указано - сообщить об этом
        return res.json({status: "Укажите данные!"});
    }
        
//    инициализирум модуль для отправки писем и указываем данные из конфига
    let transporter = nodemailer.createTransport(config.mail.smtp);
    let mailOptions = {
        from: `"${req.body.name}" <${req.body.email}>`,
        to: config.mail.smtp.auth.user,
        subject: config.mail.subject,
        text: req.body.text.trim().slice(0, 500) + `\n Отправлено с: <${req.body.email}>`
    };
    
    //отправляем почту
    transporter.sendMail(mailOptions, (error, info) => {
        //если есть ошибки при отправке - сообщаем об этом
        if (error) {
            console.log(error);
            return res.json({status: "При отправке письма произошла ошибка"});
        }
        res.json({status: "Письмо успешно отправлено"});
    })

});

module.exports = router;













