import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const Notes = ({ notes }) => {
  return (
    <Table striped>
      <tbody>
        {notes.map(note =>
          <tr key={note.id}>
            <td>
              <Link to={`/notes/${note.id}`}>
                {note.content}
              </Link>
            </td>
            <td>
              {note.user}
            </td>
          </tr>
        )}
      </tbody>
    </Table>
  );
};
export default Notes;
