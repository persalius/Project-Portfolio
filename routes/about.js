const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", (req, res) => {
    let obj = {
        title: "Обо мне"
    };
    
    const Model = mongoose.model("skills");
    
    Model
        .find()
        .then(items => {
            // обрабатываем шаблон и отправляем его в браузер передаем в шаблон список скилов
            Object.assign(obj, {items: items});
            res.render("./pages/about", obj);
        });
});

module.exports = router;