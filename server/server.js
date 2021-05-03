const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const con = require("./db");
var cors = require("cors");

app.use(cors());
app.use(express.json());

//looking at all the possible users
app.get("/users", (req, res) => {
  con.query("SELECT * FROM users", (err, result) => {
    res.json(result);
  });
});

//grabbing a user information by id
app.get("/users/:id", (req, res) => {
  con.query(
    `SELECT * FROM users
    WHERE id='${req.params.id}';`,
    (err, result) => {
      res.json(result);
    }
  );
});

//for checking log in
app.post("/login", (req, res) => {
  if (req.body.password && req.body.email) {
    con.query(
      `SELECT * FROM users
            WHERE email='${req.body.email}' AND password ='${req.body.password}';`,
      (err, result) => {
        console.log(result);
        res.json(result);
      }
    );
  } else {
    res.send("Couldnt log in");
  }
});

//for updating user balance
app.post("/users/:id", (req, res) => {
  let curramount = 0;
  console.log(req.params.id);
  con.query(
    `SELECT * FROM users
        WHERE id='${req.params.id}';`,
    (err, result) => {
      console.log("in here");
      console.log(result[0].amount);
      curramount = result[0].amount + req.body.amount;
      con.query(
        `UPDATE users
            SET amount = ${curramount}
            WHERE id = ${req.params.id};`,
        (err, result) => {
          if (result) {
            console.log("updated");
          }
        }
      );
    }
  );
  res.json({ message: "didn't go through" });
});

//for inserting users into the database
app.post("/users", async (req, res) => {
  if (
    req.body.username &&
    req.body.password &&
    req.body.email &&
    req.body.amount
  ) {
    con.query(
      `INSERT INTO users (username, password, email, amount) VALUES ('${req.body.username}', '${req.body.password}', '${req.body.email}', 0);`,
      (err, result) => {
        res.json(result);
      }
    );
  } else {
    res.json({ message: "couldn't sign up" });
  }
});

//start the server
app.listen(7000, () => {
  console.log("listening on 7000");
});
