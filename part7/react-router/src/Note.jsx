
const Note = ({ note }) => {
    
    <>  
      <h2>This is simple note {note.id} </h2>
          <li>
            {note.content} <strong>{note.important ? "important" : ""}</strong>
          </li>
    </>
  
};
export default Note;
