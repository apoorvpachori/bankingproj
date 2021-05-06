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
        if (result.length == 0) {
          res.json("Couldnt log in");
        } else {
          res.json(result);
        }
      }
    );
  } else {
    res.send("Couldnt log in");
  }
});

//for updating user balance
app.post("/users/:id", (req, res) => {
  // console.log(req.params.id);
  // console.log(req.body.num);
  // console.log(req.body.amount);

  if (req.params.id && req.body.num && req.body.amount) {
    let curramount = 0;
    acc = "";

    // console.log(`id is ${req.params.id} `);
    // console.log(`num acc is ${req.body.num} `);
    // console.log(`amount is ${req.body.amount}`);

    con.query(
      `SELECT * FROM users
        WHERE id='${req.params.id}';`,
      (err, result) => {
        if (req.body.num === 1) {
          curramount = parseInt(result[0].amount) + parseInt(req.body.amount);
          acc = "amount";
        } else if (req.body.num === 2) {
          curramount = parseInt(result[0].amount2) + parseInt(req.body.amount);
          acc = "amount2";
        } else if (req.body.num === 3) {
          curramount = parseInt(result[0].amount3) + parseInt(req.body.amount);
          acc = "amount3";
        } else {
          res.json({ message: "Deposit did not go through" });
        }

        con.query(
          `UPDATE users
            SET ${acc} = ${curramount}
            WHERE id = ${req.params.id};`,
          (err, result) => {}
        );

        res.json(result);
      }
    );
  } else {
    res.json({ message: "Deposit did not go through" });
  }
});

//for inserting users into the database
app.post("/users", async (req, res) => {
  if (req.body.username && req.body.password && req.body.email) {
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
