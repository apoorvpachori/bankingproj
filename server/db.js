var mysql = require("mysql");

//local mysql db connection
var connection = mysql.createConnection({
  host: "bankingdatabase.czxgxu5qixl3.us-west-1.rds.amazonaws.com",
  user: "admin",
  password: "bankingproject",
  database: "BankingProject",
});

connection.connect(function (err) {
  if (err) throw err;
  else {
    console.log("connected");
  }
});

module.exports = connection;
