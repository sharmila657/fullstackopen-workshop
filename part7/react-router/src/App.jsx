import { Routes, Route, Link, Navigate, useMatch } from "react-router-dom";
import Notes from "./Notes";
import Note from "./Note";
import { useState } from "react";
import Login from "./Login";
// import { Navbar, Nav } from "react-bootstrap";
import {
  Container, Alert, AppBar,Toolbar, IconButton, Button,} from "@mui/material";

const notes = [
  {
    content: "the app state is in redux store",
    important: true,
    id: 1,
  },
  {
    content: "state changes are made with actions",
    important: false,
    id: 2,
  },
  {
    content: "one more",
    important: true,
    id: 3,
  },
];

const Home = () => (
  <div>
    <h2>TKTL notes app</h2>
  </div>
);

const Users = () => (
  <div>
    <h2>Users</h2>
  </div>
);

const App = () => {
  const [user, setUser] = useState(null);

  const match = useMatch("/notes/:id");
  const note = match ? notes.find((note) => note.id == match.params.id) : null;

  const padding = {
    padding: 5,
  };

  const footerStyle = { color: "blue", fontSize: "20px" };

  return (
    <Container>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            home
          </Button>
          <Button color="inherit" component={Link} to="/notes">
            notes
          </Button>
          <Button color="inherit" component={Link} to="/users">
            users
          </Button>
          {user ? (
            <Alert style = {padding}>{user} logged in</Alert>
          ) : (
            <Button color="inherit" component={Link} to="/login">
              login
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Routes>
        <Route path="/notes/:id" element={<Note note={note} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/notes" element={<Notes notes={notes} />} />
        <Route
          path="/users"
          element={user ? <Users /> : <Navigate replace to="/login" />}
        />
        <Route path="/" element={<Home />} />
      </Routes>

      <div>
        <i style={footerStyle}>Note app, Department of Computer Science 2023</i>
      </div>
    </Container>
  );
};

export default App;
