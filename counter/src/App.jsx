import { useState } from 'react'
import './App.css'
function App() {
  // let counter = 1;
  const [counter, setCounter] = useState(0);

  const addValue = ()=> {
    // counter = counter + 1;
    // console.log(counter);
    setCounter(counter+1)
  }
  const subValue = ()=> {
    setCounter(counter-1);
  }
  return (
    <>
     <h1>Counter App</h1>
     <h2>Counter now: {counter}</h2>
     <button onClick={addValue}>Add me</button> {" "}
     <button onClick={subValue}>Subtract me</button>
     <p>counter: {counter}</p>
    </>
  )
}

export default App
