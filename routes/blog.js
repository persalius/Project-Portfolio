const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

router.get("/", (req, res) => {
    let obj = {
        title: "Блог"
    };
    const Model = mongoose.model("blog");
    
    Model
        .find()
        .then(items => {
            // обрабатываем шаблон и отправляем его в браузер передаем в шаблон список
            // записей в блоге
            Object.assign(obj, {items: items});
            res.render("./pages/blog", obj);
        });
});

module.exports = router;