import Card from "./components/Card/Card"
import './App.css'
function App() {
  const url ="https://imgs.search.brave.com/BMuYABP7oP4l8HymmSOQIH30nF_YQMtJm-y7Bz-vc6Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9idXJz/dC5zaG9waWZ5Y2Ru/LmNvbS9waG90b3Mv/dHdvLXRvbmUtaW5r/LWNsb3VkLmpwZz93/aWR0aD0xMDAwJmZv/cm1hdD1wanBnJmV4/aWY9MCZpcHRjPTA"
  const uri = "https://imgs.search.brave.com/t4ltToFyrmOnrMvV7rxNq4eMuyqMdESOe7LwYbLrl10/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxOC8w/MS8xNC8yMy8xMi9u/YXR1cmUtMzA4Mjgz/Ml82NDAuanBn"
  return (
    <>
      <Card name="Priyesh"  link="https://google.com" location={url} />
      <Card name="Ashish" link="https://google.com" location={uri} />
    </>
  )
}

export default App
