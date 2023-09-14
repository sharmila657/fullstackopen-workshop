import NoteForm from "./components/NoteForm";
import Notes from "./components/Notes";
import VisibilityFilter from "./components/VisibilityFilter";

const App = () => {
  // const [filter, setFilter] = useState("ALL")
  return (
    <div>
      <NoteForm />
      <Notes />
      <VisibilityFilter/>
    </div>
  );
};

export default App;
