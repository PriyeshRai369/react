import { useState } from 'react'
import './App.css'

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: ""
  });

  function getDetails(e){
    const {value, name} = e.target
    setContact((preValue)=>{
      // if(name === 'fName'){
      //   return {
      //     fName:value,
      //     lName:preValue.lName,
      //     email:preValue.email
      //   }
      // }
      // else if(name === 'lName'){
      //   return {
      //     fName:preValue.fName,
      //     lName:value,
      //     email:preValue.email
      //   }
      // }
      // else if(name === 'email'){
      //   return {
      //     fName:preValue.fName,
      //     lName:preValue.lName,
      //     email:value
      //   }
      // }
      return{
        ...preValue,
        [name]:value
      }
      
      
    })
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input 
        value={contact.fName}
        onChange={getDetails}
        name="fName" 
        placeholder="First Name" />
        <input
        value={contact.lName} 
        onChange={getDetails}
        name="lName" 
        placeholder="Last Name" />
        <input 
        value={contact.email}
        onChange={getDetails}
        name="email" 
        placeholder="Email" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App
