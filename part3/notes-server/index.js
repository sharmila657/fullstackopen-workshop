// console.log("Hello there");

// const http = require("http")

const express = require("express")
// const cors = require("cors")
const app = express()
app.use(express.json())
// app.use(cors())
app.use(express.static('dist'))

// const requestLogger = (request, response, next) => {
//     console.log('Method:', request.method)
//     console.log('Path:  ', request.path)
//     console.log('Body:  ', request.body)
//     console.log('---')
//     next()
// }
// app.use(requestLogger);

let notes = [
    {
        id: 1,
        content: "HTML is easy",
        important: true
    },
    {
        id: 2,
        content: "Browser can execute only JavaScript",
        important: false
    },
    {
        id: 3,
        content: "GET and POST are the most important methods of HTTP protocol",
        important: true
    }];

app.get('/', (request, response) => {
    response.send("<h1>Hello World</h1>")
})

app.get("/api/notes/", (request, response) => {
    response.json(notes);
    // console.dir(request)
    // return response.setHeader('content-type', 'application/json').send('{"name":"sharmila"}').end()
});


app.get("/api/notes/:hello", (request, response) => {
    console.log("The input value is", request.params.hello)
    const myId = request.params.hello;
    const myNote = notes.find(note => note.id == myId);

    if (myNote) {
        response.json(myNote)
    }
    else {
        response.status(404).send(`There are no notes at ${myId}`);
    }
});

app.delete("/api/notes/:id", (request, response) => {
    const myId = Number(request.params.id);
    notes = notes.filter(note => note.id !== myId);


    response.status(204).send(`The note at id ${myId} has been deleted`);

});

app.post("/api/notes", (request, response) => {
    const myNewPost = request.body;
    myNewPost.id = notes.length + 1
    notes.push(myNewPost);
    response.status(201).json(myNewPost);

});


app.put("/api/notes/:id", (request, response) => {
    const myId = Number(request.params.id);
    const updatedNote = request.body;
    notes = notes.map((element) => {
        if (element.id === myId) {
            return updatedNote
        }
        else {
            return element;
        }
    });


    response.status(202).send(`The note at id ${myId} has been updated`);

});




// const app = http.createServer((request, response) => {
//     response.writeHead(200, { "Content-Type":"text/json" })
//     // response.end("<h1>Hello World</h1>")
//     response.end(JSON.stringify(notes));
// })

const PORT = 3001;
app.listen(PORT)
console.log(`Server running on port ${PORT}`);

