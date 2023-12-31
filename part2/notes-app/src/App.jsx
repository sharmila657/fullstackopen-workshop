import Note from "./components/Note";
import axios from "axios"
import { useState, useEffect,useRef} from "react";
import loginService from "./services/login"
import Notification from "./components/Notification";
import LoginForm from "./components/LoginForm";
import Togglable from "./components/Togglable";
import NoteForm from "./components/NoteForm";
import noteService from "./services/notes"

// const [notes,setNotes] = useState([]);
// const [note, setNote] = useState("Type a note");
// const [showAll, setShowAll] = useState(true);

const App = () => {
let [ notes ,setNotes] =useState([]);
const [notification, setNotification] = useState('');
const [username, setUsername] = useState('') 
const [password, setPassword] = useState('') 
const [user, setUser] = useState(null)
console.log(user,"user")

const noteFormRef = useRef();
  
useEffect (() => {
  noteService.getAll().then((result)=>{
    console.log(result,"test")
    setNotes(result)
    let myUser = window.localStorage.getItem("noteUser");

if(myUser){
  setUser(JSON.parse(myUser));
}

  })

    // let notesPromise = axios.get("http://localhost:3001/api/notes")
    // let notesPromise = axios.get("/api/notes")

    // notesPromise.then((result) => { 
    //  console.log("login the data")
      // console.dir(result.data)
    //  setNotes(result.data)
    },[])
  //lets get user from localStorage if available


  
  // let callFunc = (event) => {
  //   event.preventDefault()
  //   console.log("form is submitted")
  //   console.log(event.target.sharmila.value)
  //   axios.post("http://localhost:3001/api/notes", {
  //     content: event.target.sharmila.value,
  //     important: true
  //   }).then((result) => {
  //     console.log(result.data)
  //     setNotes([...notes,result.data])
  //   })
  // }

const handleSubmit = async(newobj)=>{
  console.log(newobj,"obj")
  let newvariable =await noteService.create(newobj,user.token)
  console.log(newvariable,"newdata") 

 //setNotes([...notes,newvariable])
 setNotes(notes.concat(newvariable))

}
  const handleLogin = async(event)=>{
    event.preventDefault();
    console.log("logging in with",username, password);
    try{
      let loggedinUser = await loginService.login({
        username,
        password,
      });
      console.log(loggedinUser,"loginuser")
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
  <Togglable buttonLabel='login'>
    <h1>This is passing children</h1>
  <LoginForm
    username={username}
    password={password}
    handleUsernameChange={({ target }) => setUsername(target.value)}
    handlePasswordChange={({ target }) => setPassword(target.value)}
    handleSubmit={handleLogin}
  />
  </Togglable>
  );
  
};


 const noteForm = ()=>{
  return(
    <Togglable buttonLabel ="new note">
      <NoteForm createNote={handleSubmit} />
    </Togglable>
  )
 }

 return (
  <div>
    <h1>Notes</h1>
    <Notification message = {notification}/>
    <h2>Login Form</h2>

    {/* {user === null?loginForm() : noteForm()}  */}

    {!user && loginForm()}
    {user && noteForm()}
    <ul>
       {notes.map((value) => {
        return(
         <Note 
        key={value.id} 
        note={value}
        updateNote={()=>{
          updateData(value.id)
        }}
         />
        
        )
      })}

    </ul>
  
  </div>
  )
    }  
//  return  <togglable>This is from togglable components</togglable>



export default App;
