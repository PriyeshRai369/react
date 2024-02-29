import "./App.css";
import Entry from "./components/Entry/Entry";
import emojipedia from "./data";



function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(index => {
          return (
            <Entry
              key={index.id}
              emoji={index.emoji}
              name={index.name}
              description={index.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
