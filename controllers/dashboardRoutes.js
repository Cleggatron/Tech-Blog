const {User, Post, Comment} = require("../models")
const router = require("express").Router()

//this will return the posts unique to the user_id
router.get("/:user_id", async (req, res) => {
    try{
        //redirect if not logged in
        if(!req.session.logged_in){
            res.redirect("/login");
            return;
        }
        
        //get our data in raw format
        const dashDbData = await Post.findAll(
            {
                attributes: ["id", "user_id", "title", "content"],
                where: {
                    user_id: req.params.user_id
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

//user can add new posts to their dashboard
router.post("/:user_id", async (req, res) => {
    
    const user_id = req.params.user_id;
    const {title, content} = req.body;

    try{
        const newPost = await Post.create({
            title,
            content, 
            user_id
        })

        res.status(200).json(newPost)
    }catch(err){
        res.status(400).json(err)
    }
})

router.put("/:id", async (req, res) => {
    const {title , content} =  req.body;
    console.log(title);
    console.log(content);

    try{
        const updatedPost = await Post.update(
            {
                title,
                content
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )  
        res.status(200).json(updatedPost);
    }catch(err){
        res.status(500).json(err)
    }
})


module.exports = router;