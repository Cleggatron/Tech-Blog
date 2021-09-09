const {User} = require("../models");

const userData = [
    {
        username: "test",
        password: "testing123"
    },
    {
        username: "test2",
        password: "testing456"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;