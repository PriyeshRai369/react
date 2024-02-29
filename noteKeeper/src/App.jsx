import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Note from "./components/Note/Note";
import notes from "./data";

function App() {
  return (
    <>
      <Header />
      {notes.map((index) => (
        <Note key={index.key} title={index.title} content={index.content} />
      ))}
      <Footer />
    </>
  );
}

export default App;
