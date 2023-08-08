import Note from "./components/Note";
import axios from "axios"
import { useState, useEffect} from "react";


const App = () => {
  let [ notes ,setNotes] =useState( [{
    id: 100,
    content: "Html is easy",
    important: true
  }]);
  useEffect(() => {
    let notesPromise = axios.get("http://localhost:3001/api/notes")
    // let notesPromise = axios.get("/api/notes")

    notesPromise.then((result) => {
     console.log("login the data")
      console.dir(result.data)
     setNotes(result.data)
    })
  
  }, [])
  let callFunc = (event) => {
    event.preventDefault()
    console.log("form is submitted")
    console.log(event.target.sharmila.value)
    axios.post("http://localhost:3001/api/notes", {
      content: event.target.sharmila.value,
      important: true
    }).then((result) => {
      console.log(result.data)
      setNotes([...notes,result.data])
    })

  }
  return (<div>
    <h1>Notes</h1>
    <ul>


      {notes.map((value) => {
        // return <li key={value.id}>{value.content}</li>
        return <Note key={value.id} note={value} />
      })}

    </ul>
    <form onSubmit={callFunc}>

      <input name="sharmila"/>
      <button>Submit</button>

    </form>
  </div>
  );
};

export default App;
