//Задача скрипта - описать модель пользователя. У каждого пользователя есть логин и пароль. При казании пароля, он автоматически шифруется алгоритмом MD5. Все поля обязательны для заполнения

const mongoose = require("mongoose");
const crypto = require("crypto");
const Schema = mongoose.Schema;
const UserSchema = new Schema({
    login: {
        type: String,
        required: [true, "Укажите логин"]
    },
    password: {
        type: String,
        required: [true, "Укажите пароль"],
        set: v => v == ""
                ? v : crypto
                .createHash("md5")
                .update(v)
                .digest("hex")                
    }
});

mongoose.model('user', UserSchema);

