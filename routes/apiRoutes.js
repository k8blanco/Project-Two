var db = require("../models");
var axios = require("axios");
var path = require("path");
var express = require("express");

var router = express.Router();
var book = require("../models/index.js");
var favBook = require("../models/author.js");

module.exports = function(app) {

//Get All Books
// app.get("/api/results", function(req, res) {
//   db.Author.findAll({Author}).then(function(dbAuthor) {
//     res.json(dbAuthor);
//   });
// });

//Get all FavBooks
app.get("/api/favorites", function(req, res) {
  //findAll returns all entries for a table
  db.bookMatch.findAll({}).then(function(dbbookMatch) {
    //we have access to the favbooks as an argument inside of the cb function
    res.json(dbbookMatch);
  })
})

//POST route for saving a new FavBook
app.post("/api/favorites", function(req, res) {
  //create takes an argument instead of an object describing 
  //the item we want to insert into our table. in this case
  //we just pass in an object w/ a text and complete property
  db.bookMatch.create({
    text: "testing"
  }).then(function(dbbookMatch) {
    //We have access to the new todo as an argument inside of the cb function
    res.json(dbbookMatch);
  });
});

//   // Create a new example
// app.post("/api/books", function(req, res) {
//   db.Author.create(req.body).then(function(dbAuthor) {
//     res.json(dbAuthor);
//   });
// });

// app.post("/book/favorite", function(req, res) {
//   console.log("hello");
//   book.updateOne(req.params.id, function() {
//     res.redirect("/index");
//   });
// });

};
