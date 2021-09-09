const {User, Post, Comment} = require("../models")
const router = require("express").Router()

//this will return the posts unique to the user_id
router.get("/:id", async (req, res) => {
    try{
        //get our data in raw format
        const dashDbData = await Post.findAll(
            {
                attributes: ["id", "user_id", "title", "content"],
                where: {
                    user_id: req.params.id
                }
            }
        ).catch(err => {
           res.json(err);
        })

        //trim down our data to the bare essentials
        const dashData = dashDbData.map(post => post.get({plain : true}));
        res.json(dashData)
        
    } catch(err) {
        console.log(err)
        res.status(500).end()
    }
})


module.exports = router;