const express = require("express");
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

module.exports = router;