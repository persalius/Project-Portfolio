const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const jsonfile = require("jsonfile"); //удобное чтение json файлов
const session = require("express-session");
const config = require("./config");

const app = express();

// ========== view engine setup ==========
app.set("view engine", "pug");
// ========== favicon ==========
app.use(favicon(path.join(__dirname, "public", "img", "favicon.ico")))
//logger
//app.use(logger("dev"));
// ========== body-parser ==========
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// ========== cookie-parser ==========
app.use(cookieParser())
// ========== static ==========
app.use(express.static(path.join(__dirname, "public")));
// Получение пути к папке, в которую будем загружать картинки проектов
const uploadDir = path.join(__dirname, config.upload);


// ========== MONGOOSE ==========
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
//облачная база данных
mongoose.connect(config.mlab.host);
//локальная база данных
//mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {
//    user: config.db.user,
//    pass: config.db.password
//}).catch(e => {
//    console.log(e);
//    throw e;
//});

require("./models/db-close");
//подключаем модели(сущности, описывающие коллекции базы данных)
require("./models/blog");
require("./models/pic");


// ========== ROUTES ==========
app.use("/", require("./routes/index"));
app.use("/works(.html)?", require("./routes/works"));
app.use("/about(.html)?", require("./routes/about"));
app.use("/admin(.html)?", require("./routes/admin"));
app.use("/blog(.html)?", require("./routes/blog"));

// 404 catch-all handler (middleware)
app.use((req, res) => {
    res.status(404);
    res.render("./pages/404", {title: 404});
});

// 500 error handler (middleware)
app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500);
    res.render("./pages/500", {title: 500});
});


app.listen(3000, () => console.log("Server started on port 3000 at 127.0.0.1"));