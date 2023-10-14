import { useState } from "react"
import albums from "./album.json"
import './App.css'
import { Album } from "./components/Album"

function App() {
  const [count, setCount] = useState(1)

  return (
    <>
      <div className='album'>{
        albums.map((album) => {
          return <Album album={album}/>
        })
      }</div>

    </>
  )
}

export default App