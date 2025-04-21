import styled from "styled-components"



export  const Button= styled.button`

padding: 10px 18px;
gap: 10px;
background: #000000;
border-radius: 5px;
color: white;
min-width:220px ;
border: none;
font-size: 16px;
cursor: pointer;
border: 1px solid transparent;
transition: 0.4s  ease-in;


&:hover{
    background-color:white;
    border: 1px solid black;
    color: black;
    transition: 0.3s  ease-in;
}
  `;

export  const Outline= styled(Button)`

background-color: white;
    border: 1px solid black;
    color: black;

    &:hover{
        background-color:black;
        border: 1px solid transparent;
        color: white;
    }`;

 