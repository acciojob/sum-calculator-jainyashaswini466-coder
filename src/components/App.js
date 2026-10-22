
import React, { useEffect, useState } from "react";
import './../styles/App.css';

const App = () => {

  let [sum, setSum] = useState(0)
  let [numbers,setNumbers] = useState([])

  useEffect(()=>{

    // setSum(prevSum=>prevSum+value)
    console.log(numbers)
    setSum(numbers.reduce((acc,curr)=>acc+curr,0))
    

  },[numbers])

  function handleChange(e){
    let value = Number(e.target.value)

    // console.log("nums array",numbers,sum)

    setNumbers(prev=>[...prev,value])
  }

  return (
    <div>
      <input type="number" onChange={handleChange} />
      <div>Sum : {sum}</div>
    </div>
  )
}

export default App
