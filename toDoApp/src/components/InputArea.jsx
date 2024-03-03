import React,{useState} from 'react'

function InputArea(props) {
    const [input, setInput] = useState("")

    function handleInput(e){
        const newValue = e.target.value;
        setInput(newValue)
      }
  return (
    <div className="form">
        <input type="text" 
        value={input}
          onChange={handleInput}
        />
        <button
        onClick={()=>{
            props.click(input)
            setInput("")
        }}
        >
          <span>Add</span>
        </button>
      </div>
  )
}

export default InputArea