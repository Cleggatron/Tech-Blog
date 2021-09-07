const {User} = require("../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
    const userData = await User.findAll().catch((err) => {
        res.json(err);
    })


    res.json(userData)
})

module.exports = router;