import { useState } from 'react'
import './App.css'

function App() {
  const [mouseOver, setMouseOver] = useState(false)
  function handelMouseOver(){
    setMouseOver(true)
  }
  function handelMouseOut(){
    setMouseOver(false)
  }

  return (

    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button 
      onMouseOver={handelMouseOver}
      onMouseOut={handelMouseOut}
      style={{backgroundColor: mouseOver ? "black" : "white" }}
      >
        Submit
      </button>
    </div>
  );
}

export default App
