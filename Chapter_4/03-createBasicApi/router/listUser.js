const express = require("express");
const listUsers = express.Router();

const users = [
  { id: 1, name: "Nguyen Van Thien" },
  { id: 2, name: "Tran Minh Chinh" },
  { id: 3, name: "Nguyen Gia Khang" },
];

listUsers.get("/", (req, res) => {
  res.send(users);
});

listUsers.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((listUsers) => listUsers.id === id);
  res.send(user);
});

listUsers.post("/", (req, res) => {
  const newUser = {
    id: parseInt(req.body.id),
    name: req.body.name,
  };
  users.push(newUser);
  res.send(users);
});

listUsers.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((listUsers) => listUsers.id === id);
  user.name = req.body.name;
  res.send(user);
});

listUsers.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((listUsers) => listUsers.id === id);
  let index = users.indexOf(user);
  users.splice(index, 1);
  res.send(user);
});

module.exports = listUsers;
