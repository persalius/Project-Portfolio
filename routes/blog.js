const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    let obj = {
        title: "Блог"
    };
    res.render("./pages/blog", obj);
});

module.exports = router;