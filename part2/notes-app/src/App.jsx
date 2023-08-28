import Note from "./components/Note";
import axios from "axios"
import { useState, useEffect} from "react";
import loginService from "./services/login"
import Notification from "./components/Notification";


// const [notes,setNotes] = useState([]);
// const [note, setNote] = useState("Type a note");
// const [showAll, setShowAll] = useState(true);



const App = () => {
let [ notes ,setNotes] =useState([]);
const [notification, setNotification] = useState('');
const [username, setUsername] = useState('') 
const [password, setPassword] = useState('') 
const [user, setUser] = useState(null)
  
useEffect(() => {
    let notesPromise = axios.get("http://localhost:3001/api/notes")
    // let notesPromise = axios.get("/api/notes")

    notesPromise.then((result) => {
     console.log("login the data")
      console.dir(result.data)
     setNotes(result.data)
    })
  //lets get user from localStorage if available
let myUser = window.localStorage.getItem("noteUser");

if(myUser){
  setUser(JSON.parse(myUser));
}

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

  
  const handleLogin = async(event)=>{
    event.preventDefault();
    console.log("logging in with",username, password);
    try{
      let loggedinUser = await loginService.login({
        username,
        password,
      });
    setUser(loggedinUser);
    window.localStorage.setItem("noteUser",JSON.stringify(loggedinUser))
   }catch(error){
    setNotification(
      error.response.data.error
    )
    setTimeout(()=>{
      setNotification("");
    },2000);
   }
};
const loginForm = ()=> {
  return (
 
  <form onSubmit={handleLogin}>
      <div>
        username
          <input
          type="text"
          value={username}
          name="Username"
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
          <input
          type="password"
          value={password}
          name="Password"
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">login</button>
    </form>
);
  };

 const noteForm = ()=>{
  return(
    <form onSubmit={callFunc}>

    <input name="sharmila"/>
    <button>Submit</button>

  </form>
  )
 }
  return (
  <div>
    <h1>Notes</h1>
    <Notification message = {notification}/>
    <h2>Login Form</h2>

    {user === null?loginForm() : noteForm()} 
    <ul>
       {notes.map((value) => {
        return <Note key={value.id} note={value} />
      })}

    </ul>
  
  </div>
  );
};

export default App;
