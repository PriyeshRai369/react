import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState("");

  function handelChange(event){
    setName(event.target.value)
  }

  function handelClick(){
    setSubmit(name)
  }

  return (
    <>
      <div className="container">
      <h1>Hello {submit} </h1>
      <input type="text" placeholder="First Name?" 
        onChange={handelChange}
      />
      <button 
      onClick={handelClick}
      >
        Submit
      </button>
    </div>
    </>
  )
}

export default App
