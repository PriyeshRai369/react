import Login from './components/Login/Login'
import Register from './components/Register/Register';
import './App.css'

let isLogin = false;

function App() {
  

  return (
    <div className="container">
      {isLogin ? <Login /> : <Register />}
    </div>
  )
}

export default App
