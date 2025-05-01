import { deleteDoc,doc } from "firebase/firestore"
import {HiOutlineUserCircle} from "react-icons/hi"
import {IoMdTrash } from "react-icons/io"
import {RiEditCircleLine } from "react-icons/ri"
import { db } from "../config/firebase"
import Addandupdatecontact from "./Addandupdatecontact"
import usedisclose from "../hooks/usedisclose"
import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const ContactCard = ({contact}) => {
const {Onclose,isopen,onOpen}=usedisclose();

const deleteCard= async(id) =>{
    try {
      await deleteDoc(doc(db, "contacts" ,id))
      toast.success("contact deleted Successfully", {
        autoClose: 2000
      })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
    <div 
    key={contact.id} 
    className="bg-yellow flex justify-between
        items-center p-2 rounded-lg"  >

        <div className="flex gap-1">
        <HiOutlineUserCircle className="text-orange text-4xl" />
         <div className="">
          <h2 className="font-medium">{contact.name}</h2>
          <p className="text-sm">{contact.email}</p>
         </div>
        </div>
         <div className="flex text-3xl">
         <RiEditCircleLine onClick={onOpen}  className="cursor-pointer"/>
         <IoMdTrash onClick={()=>deleteCard(contact.id)} className="text-orange cursor-pointer"/>

         </div>
       </div>
       
       <Addandupdatecontact 
        contact={contact}
        isupdate 
        isOpen={isopen}
         Onclose={Onclose}/>
       
       </>
  )
}

export default ContactCard