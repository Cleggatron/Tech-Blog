const {User, Post, Comment} = require("../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
    const userData = await User.findAll().catch((err) => {
        res.json(err);
    })
    const postData = await Post.findAll().catch((err) => {
        res.json(err)
    })

    const commentData =await Comment.findAll().catch((err) => {
        res.json(err);
    })

    res.json([userData, postData, commentData])
})

module.exports = router;