//Dependencies
const express = require("express");
const hbs = require("express-handlebars");
const app = express();

//Env variables

const PORT = process.env.PORT || 5000;



//Setting up handlebars
app.engine("hbs", hbs({ extname: "hbs", defaultLayout: "layout", layoutsDir: "./views/layouts", }));
app.set('view engine', 'hbs');

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Allows us to reference anything from the public folder
//Use this command to add other folders with content
app.use(express.static('public'));



//Setting up routes
//Use this command to add other files with routes
app.use('/', require('./routes/index'));


app.listen(PORT, console.log("Server started on port ${PORT}"));
