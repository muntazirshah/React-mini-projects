import Navbar from "./components/Navbar"
import { FiSearch } from "react-icons/fi"
import {AiFillPlusCircle} from "react-icons/ai"
import { useEffect, useState } from "react"
import {collection, getDocs, onSnapshot} from "firebase/firestore"
import { db } from "./config/firebase"
import ContactCard from "./components/ContactCard"
import Addandupdatecontact from "./components/Addandupdatecontact"
import usedisclose from "./hooks/usedisclose"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Notfoundcontact from "./components/Notfoundcontact"




function App() {
  const [contacts,setcontacts] =useState([])
  const {Onclose,isopen,onOpen}=usedisclose()


  useEffect(() => {
   const getcontacts= async () => {
    try {
   const contactsRef=collection(db ,"contacts")

   onSnapshot(contactsRef,(snapshot) =>{
    const contactslist =snapshot.docs.map((doc)=>{
      return{
        id:doc.id,
        ...doc.data()
        }
    })
     setcontacts(contactslist)
    return contactslist
   })
   
    } catch (error) {
      console.log(error)
    }
    }
     getcontacts();

  },[])

const filtercontacts= (e) => {
  const value =e.target.value;
  const contactsRef=collection(db ,"contacts")

   onSnapshot(contactsRef,(snapshot) =>{
    const contactslist =snapshot.docs.map((doc)=>{
      return{
        id:doc.id,
        ...doc.data()
        }
    })

    const felteredcontacts = contactslist.filter(contact=>
      contact.name.toLowerCase().includes(value.toLowerCase()))
     setcontacts(felteredcontacts)
    return felteredcontacts
   })
}




  return (
    <>
    <div className="max-w-[370px] mx-auto px-4">
      <Navbar/>
      <div className="flex gap-2">
      <div className="flex relative items-center flex-grow">
        <FiSearch className="text-white text-3xl absolute ml-1"/>
        <input 
        onChange={filtercontacts}
        type="text" 
        className="bg-transparent border border-white
         rounded-md h-10 flex-grow text-white pl-9" />
      </div>
      
      <AiFillPlusCircle onClick={onOpen} className="text-5xl text-white cursor-pointer" />
      
      </div>
      <div className="mt-4 flex flex-col gap-3">
          
      {contacts.length <= 0 ? (
    <Notfoundcontact />
  )  : (contacts.map(contact=> (
         <ContactCard key={contact.id} contact={contact}/>)
         ))}</div>
    </div>
    <Addandupdatecontact  isOpen={isopen} Onclose={Onclose} />
    
    <ToastContainer  position="bottom-center"/>
    </>
  )
}

export default App
