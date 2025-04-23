import { useEffect, useState } from "react";
import  { styled } from "styled-components";
import Searchresult from "./componenets/searchresult/searchresult";

export const BASE_URL ="http://localhost:9000"

function App() {
const [data,setdata] =useState(null)
const [filterdata,setfilterdata] = useState(null)
const [loading,setloading] = useState(false)
const [error,seterror] = useState(null)
const [selectedbtn,setselectedbtn] = useState("all")



useEffect(() => {
  const fetchfooddata = async () => {
    setloading(true);
    try {

      const response = await fetch(BASE_URL);

      const json = await response.json(); 

      setdata(json); 
      setfilterdata(json)                     
    } catch (error) {
      seterror("Unable to fetch data");
    } finally {
      setloading(false);
    }
  };
  fetchfooddata();
}, []);

const searchfood = (e) => {
  const serachvalue= e.target.value;
  if(serachvalue === ""){
    setfilterdata(null)
  }

  const filter = data?.filter((food) =>
     food.name.toLowerCase().includes(serachvalue.toLowerCase())
);
setfilterdata(filter)
}

const filterfood = (type) => {
  if(type === "all"){
    setfilterdata(data)
  setselectedbtn("all")

  return;
  }
  const filter = data?.filter((food) =>
    food.type.toLowerCase().includes(type.toLowerCase())
);
setfilterdata(filter)
setselectedbtn(type)
}

const filterbtn=[
  {
    name:"all",
    type:"all",
  },
  {
    name:"breakfast",
    type:"breakfast",
  },
  {
    name:"lunch",
    type:"lunch",
  },
  {
    name:"dinner",
    type:"dinner",
  },
]


if(error) return <div>{error}</div>
if (loading) return <div>loading....</div>


  return (
    <>
    <Container>
      
      <Topcontainer>
<div className="logo">
  <img src="/Foodylogo.svg" alt="" />
</div>
<div className="search">
  <input onChange={searchfood} placeholder="Search Food"/>
</div>
      </Topcontainer>

      <Filtercontainer>
         {
          filterbtn.map(value=>(
            <Button
             isselected ={selectedbtn === value.type}
            key={value.name} onClick={()=> filterfood(value.type)}>{value.name}</Button>
          ))
        }
        
      </Filtercontainer>

      
    </Container>
    <Searchresult data={filterdata} />

    </>
  )
}

export default App;

     
 export  const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
      
const Topcontainer = styled.div`
height: 140px;
display: flex;
justify-content: space-between;
padding: 16px;
align-items: center;

.search{
  input{
    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 48px;
    font-size: 16px;
    padding: 0 10px;
    &::placeholder{
      color: white;
    }
  }
}
@media (0 < width < 600px){
  flex-direction: column;
  height: 120px;
}
`;

const Filtercontainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;
 export const Button = styled.button`
  background-color:${({isselected}) =>(isselected ? "#f22f2f" : "#ff4343")} ;
  outline: 1px solid  ${({isselected}) =>(isselected ? "white" : "#ff4343")} ;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color: #f22f2f;
  }
`;

