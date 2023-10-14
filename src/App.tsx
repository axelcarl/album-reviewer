import albums from "./album.json";
import "./App.css";
import { Album } from "./components/Album";

function App() {
  return (
    <>
      <div className="album">
        {albums.map((album) => {
          return <Album album={album} />;
        })}
      </div>
    </>
  );
}

export default App;
