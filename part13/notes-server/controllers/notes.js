const app = require("express").Router();
const { Op } = require("sequelize");

const { Note, User } = require("../models/index");
const {tokenExtractor} = require("../util/middleware")

const noteFinder = async (req, res, next) => {
  req.note = await Note.findByPk(req.params.id);
  next();
};

app.get("/", async (req, res) => {
  // console.log("query param important is", req.query.important);
  // console.log("query param class is", req.query.class);
  let important = {
    [Op.in]: [true, false],
  };
  const where = {};
  if (req.query.search) {
    where.content = {
      [Op.substring]: req.query.search,
    };
  }

  if (req.query.important) {
    where.important = req.query.important === "true";
  }

  const notes = await Note.findAll({
    attributes: { exclude: ["userId"] },
    include: {
      model: User,
      attributes: ["name", "username"],
    },
    where,
  });
  res.json(notes);
});

app.post("/", tokenExtractor, async (req, res) => {
  console.log("logging note post", req.body);
  console.log("logging extracted token ", req.decodedToken);
  req.body.userId = req.decodedToken.id;
  const note = await Note.create(req.body);
  res.json(note);
});

app.get("/:id", noteFinder, async (req, res) => {
  //   const note = await Note.findByPk(req.params.id);
  console.log(JSON.stringify(req.note, null, 2));
  if (req.note) {
    res.json(req.note);
  } else {
    res.status(404).send("no data found");
  }
});

app.put("/:id", noteFinder, async (req, res) => {
  //   const note = await Note.findByPk(req.params.id);
  if (req.note) {
    req.note.important = req.body.important;
    await req.note.save();
    res.json(req.note);
  } else {
    res.status(404).end();
  }
});

module.exports = app;
