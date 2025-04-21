import styled from "styled-components"
import { Button } from "../styled/Button";
function Startgame({toggle}) {
  
    return (
      <Container>
        <div>
        <img src="/ludo.png" alt="ludo img" />
        </div>
        <div className="content">
            <h1>DICE GAME</h1>
             <Button onClick={toggle}>Play Now</Button>
        </div>
      </Container>
    )
  }
  
  export default Startgame;

  const Container= styled.div`
  max-width: 1180px;
  display: flex;
  margin: 0 auto;
  height: 100vh;
  align-items: center;


.content{
    display: flex;
        flex-direction: column;
        justify-content: end;
        align-items: end;
        width: 528px;
    h1{
        font-size: 96px;
        white-space: nowrap;
        
    }
}

  `
  