import Startgame from "./components/startgame"
import { useState } from "react"
import Gameplay from "./components/gameplay"

function App() {
  const [isgamestarted,setisgamestarted] =useState(false)

   const togglegameplay = () => {
    setisgamestarted((prev) => !prev)
   }
  
  
 return (
    <>
      {
        isgamestarted ? <Gameplay/> : <Startgame toggle={togglegameplay}/>
      }
      
    </>
  )
}

export default App
