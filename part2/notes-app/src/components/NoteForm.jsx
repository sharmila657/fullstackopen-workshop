import { useState } from "react";

const NoteForm = ({ createNote}) => {
const [newNote, setNewNote] = useState("");

const mySubmit = (e) => {
  e.preventDefault();
  createNote({
    content: newNote,
    important: true,
  })
}
    return (
      <div className="formDiv">
        <h2>Create a new note</h2>
  
        <form onSubmit={mySubmit}>
          <input 
           placeholder="write note content here"
           value={newNote}
           onChange={(e)=>setNewNote(e.target.value)}
          />
          <button type="submit">save</button>
        </form>
      </div>
    )
  }
  export default NoteForm;