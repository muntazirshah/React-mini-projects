import { addDoc, collection ,doc, updateDoc } from 'firebase/firestore'
import Model from './Model'
import { Formik, Form,Field, ErrorMessage } from 'formik'
import { db } from '../config/firebase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup"


const contactSchemaValidation= yup.object().shape({
  name:yup.string().required("Name is required"),
  email:yup.string().email("Invalid Email").required("Email is required")

})


const Addandupdatecontact = ({ isOpen, Onclose ,isupdate ,contact}) => {

const addContact= async (contact) =>{
    try {

    const conatctRef=collection(db, "contacts")
    await addDoc(conatctRef,contact)  
    Onclose()
    toast.success("contact Added Successfully", {
      autoClose: 2000
    })
    } catch (error) {
        console.log(error)
    }}

const updatecontact= async (contact,id) =>{
    try {

    const conatctRef=doc(db, "contacts" ,id)
    await updateDoc(conatctRef,contact) 
    Onclose();
    toast.success("contact Updated Successfully",{
      autoClose: 2000
    })
    } catch (error) {
        console.log(error)
    }}


  return (
    <div>
     <Model isOpen={isOpen} Onclose={Onclose}>
      <Formik 
      validationSchema={contactSchemaValidation}
      initialValues={isupdate ?
        {
        name: contact.name,
        email: contact.email,
        }
        : {
        name: "",
        email:"",
      }}
      onSubmit={(values) =>{
        console.log(values)
        isupdate ?
        updatecontact(values ,contact.id) :
        addContact(values)
      }}
      >
      <Form className='flex flex-col gap-4'>
        <div className="flex flex-col gap-1">
        <label htmlFor="name">Name</label>
        <Field name="name" className="border h-10"/>
        <div className='text-red-500 text-xs'>
            <ErrorMessage name="name"/>
        </div>
        </div>
        <div className="flex flex-col gap-1">
        <label htmlFor="email">Email</label>
        <Field name="email" className="border h-10"/>
        <div className='text-red-500 text-xs'>
            <ErrorMessage name="email"/>
        </div>
        </div>
        <button  className='bg-orange px-3 py-1.5 border self-end'>{isupdate ? "update" : "add"} contact</button>
      </Form>
      </Formik>
     </Model>
  </div>
  )
}

export default Addandupdatecontact