import { useState } from "react"
const useCounter = (initialvalue = 0) => {
    const [value, setValue] = useState(initialvalue)
  
    const increase = () => {
      setValue(value + 1)
    }
  
    const decrease = () => {
      setValue(value - 1)
    }
  
    const zero = () => {
      setValue(0)
    }
  
    return {
      value, 
      increase,
      decrease,
      zero
    }
  }
  export default useCounter;