const app = require("express").Router()
const Note = require("../models/note")

app.get("/",async(request, response) => {
    let result = await Note.find({});
        response.json(result);
    });

app.get("/:id", async (request, response) => {
    const myId = request.params.id;
    const result = await Note.findById(myId);
        response.json(result);
    })


app.delete("/", (request, response) => {
    Note.find({}).then((result) => {
        response.json(result);
    });

});

app.post("/", async (request, response, next) => {

    const myNewPost = request.body;
    
    const note = new Note({
        content: myNewPost.content,
        important: myNewPost.important,
    })
    try {
        const savedNote = await note.save();
        response.status(201).json(savedNote)
    }
    catch (e) {
        next(e);
    }
});

app.put('/', (request, response, next) => {
const body = request.body
      const note = {content:body.content,important:body.important}
    Note.findByIdAndUpdate(
        request.params.id, note,
        { new: true, runValidators: true }
    )
        .then(updatedNote => {
            response.json(updatedNote)
        })
        .catch(error => next(error));
});
    module.exports = app;