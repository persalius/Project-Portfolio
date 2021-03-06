//предназначение модуля: при закрытии программы - дисконект БД

const mongoose = require("mongoose");
const config = require("../config");

mongoose.connection.on("connected", () => {
    console.log(`Mongoose default connection open mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
});

//If the connection throw an error
mongoose.connection.on("error", err => {
    console.log("Mongoose default connection error: " + err);
});

//When the connection is disconnected
mongoose.connection.on("disconnected", () => {
    console.log("Mongoose default connection disconnected");
});

//If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
    mongoose.connection.close(() => {
        console.log("Mongoose default connection disconnected through app termination");
    });
});


