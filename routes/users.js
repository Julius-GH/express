var express = require('express');
var router = express.Router();

const signupSchema = require("../schemas/signup");

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/signup", function (req, res, next) {
  res.render("users/signup");
});

router.post("/signup", function(req, res, next) {
  console.log(req.body);
  const result= signupSchema.validate(req.body);
  console.log(result);
  if (result.error) {
    throw new Error("Provjerite podatke!");
  }

  res.redirect("/users/signup");
})

module.exports = router;
