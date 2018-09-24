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

router.post("/login", (req, res) => {
    
});

module.exports = router;