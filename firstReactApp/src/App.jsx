import './App.css'

function App() {
  let name = "Priyesh Rai";
  const style = {
    color:"aqua",
    fontSize:"80px",
    fontWeight:"800" 
  }
  let msg = "";
  const currentTime = new Date().getHours()
  if(currentTime >= 0 && currentTime < 12){
    msg="Good Morning";
    style.color="Green";
  }
  else if(currentTime >= 12 && currentTime < 18){
    msg="Good Afternoon";
    style.color="Gold";
  }
  else if(currentTime >= 18 && currentTime < 20){
    msg="Good Evening";
    style.color="#000080";
  }
  else{
    msg="Good Night";
    style.color="black";
  }

  return (
    <>
      <h1 style={style}> {name} {msg} </h1>
    </>
  )
}

export default App
