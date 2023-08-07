const express = require("express")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static('dist'))

const mongoose = require('mongoose')

const url = `mongodb+srv://sharmila:sharmila@cluster0.cczhdfv.mongodb.net/tej?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

const noteSchema = new mongoose.Schema({
    content: {
        type: String,
        minLength: 5,
        required: true
    },
    important: Boolean,
});
noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
    }
  })

const Note = mongoose.model('Note', noteSchema)


app.get('/', (request, response) => {
    response.send("<h1>Hello World</h1>")
})

app.get("/api/notes/", (request, response) => {
    Note.find({}).then((result) => {
        response.json(result);
    });
})




app.get("/api/notes/:hello", (request, response) => {
    console.log("The input value is", request.params.hello)
    const myId = request.params.hello;
    const myNote = Note.findById(myId);
    myNote.then((result) => {
        response.json(result);
    })

});

app.delete("/api/notes/:id", (request, response) => {
    const myId = Number(request.params.id);
    Note.find({}).then((result) => {
        response.json(result);
    });

});

app.post("/api/notes", (request, response, next) => {
    debugger
    const myNewPost = request.body;
    console.log(request, "rqst");
    
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

const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError')
    { return response.status(400).json({ error: error.message }) }
  
    next(error)
  }
app.use(errorHandler);

const PORT = 3001;
app.listen(PORT)
console.log(`Server running on port ${PORT}`);

