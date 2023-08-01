// console.log("Hello there");

// const http = require("http")

const express = require("express")
const app = express()

let notes =[
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
});

app.get("/api/notes/:id", (request, response) => {
    const myId = Number(request.params.id);
    const myNote = notes.find(note => note.id === myId);

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


// const app = http.createServer((request, response) => {
//     response.writeHead(200, { "Content-Type":"text/json" })
//     // response.end("<h1>Hello World</h1>")
//     response.end(JSON.stringify(notes));
// })

const PORT = 3001;
app.listen(PORT)
console.log(`Server running on port ${PORT}`);

