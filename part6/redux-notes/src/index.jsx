import { createRoot } from "react-dom/client";
import {useState} from "react"
import {createStore} from "redux"

const counterReducer = (state = 0, action) =>{
    console.log(action);
    console.log(state);
    if(action.type === "NEW_NOTE"){
        const newState = state.concat(action.payload);
        return newState;
    }
    return state;
}

const store = createStore(counterReducer);
store.dispatch({
    type:'NEW_NOTE',
    payload:{
    content:'the app state is in redux store',
    important:true,
    id:1,
}
})

const App = () => {
    return(
      <div>
        <ul>
          {store.getState().map(note=>
            <li key={note.id}>
              {note.content} <strong>{note.important ? 'important' : ''}</strong>
            </li>
          )}
          </ul>
      </div>
    )
  }

// const  

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />)
store.subscribe(() => {
    root.render(<App />)
})

 

