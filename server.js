//include Express
const express = require('express');

//server will listen on this port
const port = 3000;

//create instance of Express app
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))
//index/home URL
app.get('/',(req,res)=>{
   res.render("pages/index", {title:"home page"});
});

app.get('/pokemon',(req,res)=>{
     res.render("pages/pokemon", {title:"pokemon page"});

});

app.get('/r6siege',(req,res)=>{
     res.render("pages/r6siege", {title:"about r6siege"});

});

app.get('/soccer',(req,res)=>{
     res.render("pages/soccer", {title:"about soccer"});

});

//Set server to listen for requests
app.listen(port, () => {
  console.log(`Server running at port: ${port}`);
});

