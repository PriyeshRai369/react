import { useState } from 'react'
import './App.css'
import Li from './components/Li'
import InputArea from './components/InputArea'

function App() {
  
  const [item, setItem] = useState([])
  
  function handleClick(input){
    setItem((preValue)=>{
      return [...preValue, input]
    })
    
  }
  
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea click={handleClick}  />
      <div>
        <ul>
          {item.map((values,index) => <Li text={values} key={index} /> )}
        </ul>
      </div>
    </div>
  );
}

export default App
