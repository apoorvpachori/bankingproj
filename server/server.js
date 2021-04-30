const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const con = require("./db");

app.use(express.json());

app.get("/users", (req, res) => {
  con.query("SELECT * FROM users", (err, result) => {
    res.json(result);
  });
});

app.get("/users/:id", (req, res) => {
  con.query(
    `SELECT * FROM users
    WHERE id='${req.params.id}';`,
    (err, result) => {
      res.json(result);
    }
  );
});
app.post("/login", async (req, res) => {
  console.log(req.body.email);
  console.log(req.body.password);

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

app.listen(7000, () => {
  console.log("listening on 7000");
});
