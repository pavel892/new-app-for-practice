import "./App.css";
import MusicList from "./components/MusicList";
import NewSuperFeature from "./components/NewSuperFeature";

// const tracks = [
//   { id: 1, name: "Fun soundtrack" },
//   { id: 2, name: "Fun soundtrack instrumental" },
// ];

function App() {
  return (
    <div className="text-3xl">
      Super Music App version 3!
      <div>
        <p>Some new awesome feature added!</p>
      </div>
      <NewSuperFeature />
      <MusicList />
    </div>
  );
}

export default App;
