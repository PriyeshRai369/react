import { useState } from 'react'
import './App.css'

function App() {
  // const [fName, setFname] = useState("")
  // const [lName, setLname] = useState("")

  // function handleFname(e){
  //   setFname(e.target.value)
  // }
  // function handleLname(e){
  //   setLname(e.target.value)
  // }

  const [fullName, setFullName] = useState({
    fName:"",
    lName:""
  })

  function handleFullName(event){
    let inputValue = event.target.value;
    let inputName = event.target.name;

    // if(inputName === 'fName'){
    //   setFullName({fName: inputValue})
    // }else if(inputName === 'lName'){
    //   setFullName({lName:inputValue})
    // }
    setFullName((preValue)=>{
      if(inputName === 'fName'){
        return{
          fName:inputValue,
          lName:preValue.lName
        }
      }
      else if(inputName === 'lName'){
        return{
          fName:preValue.fName,
          lName:inputValue
        }
      }
    })
  }

  return (
    <>
      <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName} </h1>
      <form>
        <input 
        value={fullName.fName}
        name="fName" 
        placeholder="First Name" 
        // onChange={handleFname}
        onChange={handleFullName}
        />
        <input 
        value={fullName.lName}
        name="lName" 
        placeholder="Last Name" 
        // onChange={handleLname}
        onChange={handleFullName}
        />
        <button>Submit</button>
      </form>
    </div>
    </>
  )
}

export default App
