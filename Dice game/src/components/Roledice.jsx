import styled from "styled-components";

function Roledice({roledice,currentdice  }){

    
return (
    <Dicecontainer>
        <div className="dice" onClick={roledice}>
        <img src={`/dice_${currentdice}.png`} alt="cubesimg" />
        </div>
        <p>Click on Dice to roll</p>
    </Dicecontainer>
)
}
export default Roledice;

const Dicecontainer =styled.div`
    display: flex;
    align-items: center;
    margin-top: 48px;
    flex-direction: column;
.dice{
    cursor: pointer;
}
    p{
        font: 24px;
    }
`