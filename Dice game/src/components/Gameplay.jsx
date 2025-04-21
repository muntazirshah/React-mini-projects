import styled from "styled-components";
import Numberselecter from "./Numberselecter"
import Totalscore from "./Totalscore"
import Roledice from "./Roledice";
import { useState } from "react";
import { Button, Outline  } from "../styled/Button";
import Rules from "./Rules";

function Gameplay(){
    const[Score,setScore] =useState(0)
    const [selectednumber,setselectednumber]=useState();
    const [currentdice ,setcurrentdice] =useState(1)
    const [error ,seterror]=useState("")
    const [showrules ,setshowrules] = useState(false)

    const generatedandomnumber=(min,max)=>{
        return Math.floor(Math.random() *(max - min) + min)
    }

    const roledice=() =>{
        if(!selectednumber){
         seterror("You have not selected any number")   
            return
        };
        const randomnumber=generatedandomnumber(1,7)
        setcurrentdice((prev) => randomnumber)


        if(selectednumber === randomnumber){
            setScore((prev) => prev + randomnumber)
        }else{
            setScore(prev => prev - 2)
        }
    setselectednumber(undefined)
    
    }

    const resetscore=()=>{
        setScore(0);
    }

    return(
    <Maincontianer>
        <div className="topsection">
        <Totalscore Score={Score}/>
        <Numberselecter 
        error={error}
        seterror={seterror}
        selectednumber={selectednumber}
        setselectednumber={setselectednumber}
        />
        </div>

        <Roledice
        currentdice={currentdice}
        roledice={roledice}
        />
        <div className="btns">
            <Outline  onClick={resetscore}>Reset</Outline>
            <Button onClick={() => setshowrules(prev => !prev)}>{
              showrules ? "Hide" : "show"
                } Rules</Button>
        </div>
        
         { showrules   && <Rules/>}

    </Maincontianer>
    )
}

export default Gameplay;

const Maincontianer=styled.main`
padding-top:70px;
 .topsection{
    display: flex;
    justify-content: space-around;
    align-items: end;
 }  
 .btns{
    margin-top:48px ;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 10px;
 } 
`

