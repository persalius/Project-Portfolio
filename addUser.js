const mongoose = require("mongoose");
const readline = require("readline");
const config = require("./config");

const rl = readline.createInterface({input: process.stdin, output: process.stdout});
mongoose.Promise = global.Promise;

mongoose.connect(config.mlab.host);

require("./models/db-close");

//логин и пароль изначально пустые
let login = "";
let password = "";

//спрашиваем логин
rl.question("Логин: ", answer => {
    //записываем введеный логин
    login = answer;
    
    //спрашиваем пароль
    rl.question("Пароль: ", answer => {
        //записываем введеный пароль
        password = answer;
        
        //завершаем ввод
        rl.close();
    });
});

//когда ввод будет завершен
rl.on("close", () => {
    //подключаем модуль пользователя
    require("./models/user");
    
    //создаем экземпляр пользователя и указываем введенные данные
    const User = mongoose.model("user");
    const adminUser = new User({login: login, password: password});
    
    //пытаемся найти пользователя с таким логином
    User
        .findOne({login: login})
        .then(u => {
            //если такой пользователь уже есть - ссобщаем об этом
            if (u) {
                throw new Error("Такой пользователь уже существует!");
            }
            //если нет - добавляем пользователя в базу
            return adminUser.save();
        })
        .then(u => console.log("ok!"), e => console.error(e.message))
        .then(() => process.exit(0));
});









