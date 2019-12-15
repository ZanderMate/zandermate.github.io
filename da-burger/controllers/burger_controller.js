var express = require("express");

var router = express.Router();

var Burger = require("../models/burger-model.js");

router.get("/", function (req, res) {
    Burger.findAll().then(function (result) {
        var hbsObject = {
            burger: result
        };
        console.log(hbsObject);
        return res.render("index", hbsObject);
    })
})

router.post("/api/burger", function (req, res) {
    console.log("Burger Data:");
    console.log(req.body);
    Burger.create({
        burger_name: req.body.burger_name,
        devoured: req.body.devoured
    }).then(function (result) {
        return res.json(result)
    })
});

router.delete("/api/burger/:id", function (req, res) {
    Burger.destroy({
        where: {
            id: req.params.id
        }
    })
})

module.exports = router;