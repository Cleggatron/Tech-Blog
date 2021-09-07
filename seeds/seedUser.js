const {User} = require("../models");

const userData = [
    {
        username: "test",
        password: "testing123"
    }
]

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;