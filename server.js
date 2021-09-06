const express = require("express");

const PORT = 3001;
const sequelize = require("./config/connection")

const app = express();

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
})