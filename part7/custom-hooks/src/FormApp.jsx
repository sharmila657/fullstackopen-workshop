// import { useState } from "react"
import useField from "./hooks/useField"
const FormApp = () => {
    const name = useField("text")
    const born = useField("date")
    const height = useField("number")
  
    return (
      <div>
        <form>
          name: 
          <input
           type = {name.type} value = {name.value} onChange = {name.onChange} /> 
          <br/> 
          birthdate:
          <input
            {...born} />
          <br /> 
          height:
          <input
            {...height}
          />
        </form>
        <div>
          {name.value} {born.value} {height.value} 
        </div>
      </div>
    )
  }

  export default FormApp;