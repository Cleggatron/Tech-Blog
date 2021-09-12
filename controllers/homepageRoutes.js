const {User, Post, Comment} = require("../models");

const router = require("express").Router();

router.get("/", async (req, res) => {

    try{
        //get our raw data
        const homepageData = await Post.findAll(
            {
                attributes: ["id", "title", "createdAt"],
                include: {
                    model: User,
                    attributes: ["username"]
                }
            }
        ).catch((err) => {
            res.json(err);
        })
        
        //trim back the data to a manageable format
        const posts = homepageData.map(post => post.get({plain: true}));
        
        //render the page using handlebars
        res.render("homepage", {
            posts, 
            logged_in: req.session.logged_in
        })

    }catch(err){
        res.status(500).json(err);
    }
})

router.get("/:id", async (req,res) => {
    try {
        if(!req.session.logged_in){
            res.redirect("/login");
            return;
        }

        const postDataDb = await Post.findByPk(req.params.id,{
            attributes: ["id", "title","content", "createdAt"],
            include: {
                model: User,
                attributes: ["username"]
            },
        })
        const postData = await postDataDb.get({plain : true})

        res.render("post", {
            postData,
            logged_in: req.session.logged_in
        })
        
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;