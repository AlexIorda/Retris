/// These routes represent the requests that can be made by any user, be it logged in or not
// By request we mean: get,post,update,delete requests



const express = require("express");
const router = express.Router();
var fs = require("fs");
router.use(express.static('public/images'));
router.get('/', (req, res) => res.render("index", {
    title: "Main page"
}));


module.exports = router;