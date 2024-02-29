import { useState } from 'react'
import './App.css'

function App() {

  let currentTime = new Date().toLocaleTimeString()
  
  let [time, setTime] = useState(currentTime)
  
  const change = () => {
    const newTime = new Date().toLocaleTimeString()
    setTime(newTime)
  }
  
  setInterval(change ,1000)

  return (
    <>
      <h1>{time}</h1>
      <button onClick={change}>Get Time</button>
    </>
  )
}

export default App
