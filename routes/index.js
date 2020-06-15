/// These routes represent the requests that can be made by any user, be it logged in or not
// By request we mean: get,post,update,delete requests



const express = require("express");
const router = express.Router();
var fs = require("fs");
router.use(express.static('public/images'));

router.use(express.static("blockrain.js-gh-pages"));
//router.use(express.static("blockrain.js-gh-pages/src"));
//router.use(express.static("blockrain.js-gh-pages/dist"));
router.get('/', (req, res) => res.render("index", {
    title: "Main page"
}));

// POST request to submit the final score of the game to the database
router.post('/', (req, res) => {
  const score = req.body.score;
  console.log(score);
  // now insert the score into the database
});

module.exports = router;
