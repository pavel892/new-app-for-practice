import "./App.css";
import MusicList from "./components/MusicList";

// const tracks = [
//   { id: 1, name: "Fun soundtrack" },
//   { id: 2, name: "Fun soundtrack instrumental" },
// ];

function App() {
  return (
    <div className="text-3xl">
      Super Music App version 2!
      <MusicList />
    </div>
  );
}

export default App;
