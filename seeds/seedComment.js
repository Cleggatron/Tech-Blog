const {Comment} = require("../models");

const commentData = [
    {
        content: "5/7 best post yet",
        post_id: 1,
        user_id: 1
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;