const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require('mongoose')
const notesController = require("./controllers/notes");
const usersController = require("./controllers/users")
const loginController = require("./controllers/login")

const {MONGODB_URI}= require("./utils/config")
const {
    errorHandler,
    noHandlers,
    requestLogger,
} = require("./utils/middleware")



app.use(express.json())
app.use(cors())
app.use(express.static('dist'))


mongoose.set('strictQuery', false)
mongoose.connect(MONGODB_URI)
// mongoose.connect(url).then(() => {
//     console.log('connected')
// }).catch(err => console.log(err))

//console.log("NODE_ENV is ", process.env.NODE_ENV);


app.use(express.json())
app.use(cors())
app.use(express.static("dist"))
app.use(requestLogger);


app.use("/api/notes", notesController)
app.use("/api/users",usersController)
app.use("/api/login",loginController)


app.use(noHandlers);
app.use(errorHandler);

module.exports = app;
