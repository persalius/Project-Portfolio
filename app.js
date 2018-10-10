const express = require("express");
const path = require("path");
const logger = require("morgan");
const bodyParser = require("body-parser");
const favicon = require("serve-favicon");
const cookieParser = require("cookie-parser");
const fs = require("fs");
const mongoose = require("mongoose");
const jsonfile = require("jsonfile"); //удобное чтение json файлов
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const config = require("./config");

const PORT = process.env.PORT || 5000;

const app = express();

// ========== MONGOOSE ==========
mongoose.Promise = global.Promise;
//облачная база данных
mongoose.connect(config.mlab.host, { useNewUrlParser: true });
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
require("./models/user");

// ========== view engine setup ==========
app.set("view engine", "pug");
// ========== favicon ==========
app.use(favicon(path.join(__dirname, "public", "img", "favicon.ico")))
//logger
//app.use(logger("dev"));
// ========== body-parser ==========
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// ========== cookie-parser ==========
app.use(cookieParser());
// ========== session ==========
app.use(session({
    secret: "secret",
    key: "keys",
    cookie: {
        path: "/",
        httpOnly: true,
        maxAge: null
    },
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({mongooseConnection: mongoose.connection})
}));
// ========== static ==========
app.use(express.static(path.join(__dirname, "public")));
// Получение пути к папке, в которую будем загружать картинки проектов
const uploadDir = path.join(__dirname, config.upload);


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


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));