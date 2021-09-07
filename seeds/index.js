const sequelize = require("../config/connection");
const seedUser = require("./seedUser");
const seedPost = require("./seedPost");
const seedComment = require("./seedComment");

const seedAll = async () => {
    await sequelize.sync({force: true})

    await seedUser();

    await seedPost()

    await seedComment();

    process.exit(0)
};

seedAll();