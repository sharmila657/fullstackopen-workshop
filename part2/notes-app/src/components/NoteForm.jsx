import { useState } from "react";

const NoteForm = ({ onSubmit}) => {
const [newNote, setNewNote] = useState("");


const mySubmit = (e) => {
  e.preventDefault();
  onSubmit({
    content: newNote,
    important: true,
  })
}
    return (
      <div>
        <h2>Create a new note</h2>
  
        <form onSubmit={mySubmit}>
          <input
           value={newNote}
           onChange={(e)=>setNewNote(e.target.value)}
          />
          <button type="submit">save</button>
        </form>
      </div>
    )
  }

  export default NoteForm;