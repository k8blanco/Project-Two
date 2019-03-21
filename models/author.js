// module.exports = function(sequelize, DataTypes) {
//   var Author = sequelize.define("Author", {
//     text: DataTypes.STRING
//   });
//   return Author;
// };

module.exports = function(sequelize, DataTypes) {
  //creates a "FavBook" model (TABLE) that matches up with the DB
  var favBook = sequelize.define("favorite", {
    //the title of the book (a string)
    title: DataTypes.STRING,
    //the author (a string)
    author: DataTypes.STRING
  });
  return favBook;
};

//favorites is the table
  //id
  //title
  //author
  //createdat
  //updatedat
  //primarykey
  
  //default show index from "favorites" from "bookMatch"