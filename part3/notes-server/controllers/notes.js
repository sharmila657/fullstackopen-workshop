const app = require("express").Router()
const Note = require("../models/note")

app.get('/', (request, response) => {
    response.send("<h1>Hello World</h1>")
})

app.get("/", (request, response) => {
    Note.find({}).then((result) => {
        response.json(result);
    });
})




app.get("/", (request, response) => {
    // console.log("The input value is", request.params.hello)
    const myId = request.params.hello;
    const myNote = Note.findById(myId);
    myNote.then((result) => {
        response.json(result);
    })

});

app.delete("/", (request, response) => {
    // const myId = Number(request.params.id);
    Note.find({}).then((result) => {
        response.json(result);
    });

});

app.post("/", (request, response, next) => {

    const myNewPost = request.body;
    
    const note = new Note({
        content: myNewPost.content,
        important:myNewPost.important,
    })

    note.save()
        .then(result => {
        response.json(result)
        })

    .catch(error => next(error))
   
});

app.put('/api/notes/:id', (request, response, next) => {
const body = request.body
      const note = {content:body.content,important:body.important}
    Note.findByIdAndUpdate(
        request.params.id, note,
        {  new: true, runValidators: true}
    )
        .then(updatedNote => {
            response.json(updatedNote)
        })
        .catch(error => next(error))
});
module.exports = app;