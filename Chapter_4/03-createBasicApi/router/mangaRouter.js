const express = require("express");
const mangaRoute = express.Router();

//Tạo danh sách truyện manga
const mangas = [
  { id: 1, name: "Bay vien ngoc rong" },
  { id: 2, name: "Doreamon" },
  { id: 3, name: "Onepiece" },
];

mangaRoute.get("/", function (req, res) {
  res.send(mangas);
});
mangaRoute.get("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const manga = mangas.find((mangas) => mangas.id === id);
  if (!manga) {
    res.status(404).send("ID does not exist");
  }
  res.send(manga);
});

mangaRoute.post("/", function (req, res) {
  const newManga = {
    id: req.body.id,
    name: req.body.name,
  };
  mangas.push(newManga);
  res.send(mangas);
});

mangaRoute.put("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const manga = mangas.find((mangas) => mangas.id === id);
  manga.name = req.body.name;
  res.send(mangas);
});

mangaRoute.delete("/:id", function (req, res) {
  const id = parseInt(req.params.id);
  const manga = mangas.find((mangas) => mangas.id === id);
  let index = mangas.indexOf(manga);
  mangas.splice(index, 1);
  res.send(mangas);
});

module.exports = mangaRoute;
