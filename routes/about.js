const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    let obj = {
        title: "Обо мне"
    };
    res.render("./pages/about", obj);
});

module.exports = router;