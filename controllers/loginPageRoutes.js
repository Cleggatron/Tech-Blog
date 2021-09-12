const router = require("express").Router()

router.get("/", async (req, res) => {
    if(req.session.logged_in){
        res.redirect("/dashboard")
        return;
    }
    
    try {
        res.render("loginPage")
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;