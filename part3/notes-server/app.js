const express = require("express")
const cors = require("cors")
const app = express()
const mongoose = require('mongoose')
const notesController = require("./controllers/notes");
const { url } = require("./utils/config")
const {
    errorHandler,
    noHandlers,
    requestLogger,
} = require("./utils/middleware")



app.use(express.json())
app.use(cors())
app.use(express.static('dist'))


mongoose.set('strictQuery',false)
mongoose.connect(url).then(() => {console.log('connected')}).catch(err=>console.log(err))




app.use(requestLogger);

app.use("/api/notes", notesController)

app.use(noHandlers);
app.use(errorHandler);

module.exports = app;
