const {User, Post, Comment} = require("../models")
const router = require("express").Router()

//this will return the posts unique to the user_id
router.get("/", async (req, res) => {
    try{
        if(!req.session.logged_in){
            res.redirect("/login");
        }
        //get our data in raw format
        const dashDbData = await Post.findAll(
            {
                attributes: ["id", "user_id", "title", "content"],
                where: {
                    user_id: 1
                }
            }
        )
        
        //trim down our data to the bare essentials
        const userPosts = dashDbData.map(post => post.get({plain : true}));
        
        res.render("dashboard",{
            userPosts,
            logged_in: req.session.logged_in
        })
        
    } catch(err) {
        console.log(err)
        res.status(500).end()
    }
})

//user can add new posts to their dashboard
router.post("/", async (req, res) => {
    
    const user_id = req.session.user_id;
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

//user can update posts
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