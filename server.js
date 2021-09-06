//npm dependencies
const path = require("path")
const express = require("express");
const exphbs = require("express-handlebars")
//file dependencies
const routers = require("./controllers");
const sequelize = require("./config/connection")

const PORT = process.env.PORT || 3001;

const app = express();

//set up handlebars
const hbs = exphbs.create()
app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars")

//standard middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
//set up static assets 
//TODO: Build static assets
app.use(express.static(path.join(__dirname, "public")));


//set up our routing
app.use(routers)

sequelize.sync({force: false}).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
})