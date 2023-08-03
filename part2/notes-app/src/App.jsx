import Note from "./components/Note";
import axios from "axios"
import { useState, useEffect} from "react";

const App = () => {
  let [ notes ,setNotes] =useState( [{
    id: 100,
    content: "HTML is easy",
    important: true
  }]);
  useEffect(() => {
    // let notesPromise = axios.get("http://localhost:3001/api/notes")
    let notesPromise = axios.get("/api/notes")

    notesPromise.then((result) => {
      console.dir(result.data)
     setNotes(result.data)
    })
  
  },[])
  return (<div>
    <h1>Notes</h1>
    <ul>

      {notes.map((value) => {
        // return <li key={value.id}>{value.content}</li>
        return <Note key={value.id} note={value} />
      })}

    </ul>
  </div>
  );
};

export default App;
