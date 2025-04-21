import styled from "styled-components";

function Numberselecter({seterror,error, selectednumber,setselectednumber}){
    const arrnumber= [1,2,3,4,5,6]
    const numberSelecterhandler= (Value) =>{
        setselectednumber(Value)
        seterror("")
    }
    
return (
    <NumberContainer>
        <p className="error">{error}</p>
        <div className="glex">
        {
            arrnumber.map((Value,i) =>(
            <Box 
            $isSelected ={Value === selectednumber}
            key={i} onClick={()=>numberSelecterhandler(Value)}>{Value}</Box>
        ))}
        
        </div>
        <p>Select Number</p>
    </NumberContainer>
)

}
export default Numberselecter;

const NumberContainer=styled.div`
display: flex;
flex-direction: column;
align-items: end;

.error{
    color: red;
}
   .glex{
    display: flex;
    gap: 24px;
   } 
   p{
    font-size: 24px;
    font-weight:500 ;
   }
`

const Box = styled.div`
    width: 72px;
    height: 72px;
    border: 1px solid black;
    display: grid;
    place-items: center;
    font-size: 24px;
    font-weight: 700;
    background-color: ${(props)=> props.$isSelected ? "black" : "white"};
    color: ${(props)=> props.$isSelected ? "white" : "black"};
`

