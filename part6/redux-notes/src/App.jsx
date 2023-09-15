import { useEffect } from "react";
import services from "./services/notes";
import { useSelector, useDispatch } from "react-redux";

import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";
import { createNote } from "./reducers/noteReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    services.getAll().then((response) => {
      dispatch(createNote(response));
    });
  }, []);

  return (
    <div>
      <VisibilityFilter />
      <NoteForm />
      <Notes />
    </div>
  );
};

export default App;
