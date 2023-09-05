import { createRoot } from "react-dom/client";
import {useState} from "react"
import {createStore} from "redux"

const counterReducer = (state = 0, action) =>{
    console.log(action);
    console.log(state);
    if(action.type === "ADD"){
        const newState = state + 1;
        return newState;
    }
    return state;
}

const store = createStore(counterReducer);

const App =() =>{
    const [counter,setCounter ]= useState(0 )

    const addCounter = ()=>{
        setCounter(counter + 1)
        store.dispatch({type:"ADD"})
    }
    const subCounter = ()=> {
        setCounter(counter - 1);
    
   }
   const  makeZero =() => {
        setCounter(0)
   }

    return (
    <div>
        {/* <div>{counter}</div> */}
        <div>{store.getState()}</div>
        <button onClick = {addCounter}>Add</button>
        <button onClick = {subCounter}>Sub</button>
        <button onClick = {makeZero}>Zero</button>
    </div>
    );
};
const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />)
store.subscribe(() => {
    root.render(<App />)
})
 