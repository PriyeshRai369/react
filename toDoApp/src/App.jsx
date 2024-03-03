import { useState } from 'react'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [item, setItem] = useState([])
  function handleInput(e){
    const newValue = e.target.value;
    setInput(newValue)
  }

  function handleClick(){
    setItem((preValue)=>{
      return [...preValue, input]
    })
    setInput("")
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input type="text" 
        value={input}
          onChange={handleInput}
        />
        <button
        onClick={handleClick}
        >
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {item.map(values => <li>{values}</li>  )}
        </ul>
      </div>
    </div>
  );
}

export default App
