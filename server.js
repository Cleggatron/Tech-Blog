const express = require("express");
const routers = require("./controllers");

const PORT = 3001;
const sequelize = require("./config/connection")

const app = express();










//set up our routing
app.use(routers)

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
})