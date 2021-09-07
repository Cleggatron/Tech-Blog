const {Post} = require("../models");

const postData = [
    {
        title: "This is a test post",
        content: "Where we test creating a post",
        user_id: 1
    }
]
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;