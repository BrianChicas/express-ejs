//includes .env file for credentials
require('dotenv').config();
//manages database connectivity
require('./models/mongoose');


//include Express
const express = require("express");

//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

var data = require("./test.json");

app.set("view engine", "ejs");
app.use(express.static("public"));
//index/home URL
app.get("/", (req, res) => {
  res.render("pages/bio", { title: "home page" });
});

app.get("/pokemon", (req, res) => {
  res.render("pages/pokemon", { title: "pokemon page" });
});

app.get("/r6siege", (req, res) => {
  res.render("pages/r6siege", { title: "about r6siege" });
});

app.get("/soccer", (req, res) => {
  res.render("pages/soccer", { title: "about soccer" });
});

app.get("/users", (req, res) => {
  let title = "Users Page";
  res.render("users/index", {
    title: title,
    users: data,
  });
});

app.get("/users/view/:id", function (req, res) {
  var title = "User Page";
  var id = req.params.id;
  res.render("users/view", {
    title: title,
    user: data[--id],
  });
});

const recipeRoutes = require('./routes/recipes');
app.use('/recipes', recipeRoutes);

//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

