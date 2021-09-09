const {Post} = require("../models");

const postData = [
    {
        title: "This is a test post",
        content: "Where we test creating a post",
        user_id: 1
    },
    {
        title: "I am not a number",
        content: "I am a free man!",
        user_id: 2
    }
]
const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;