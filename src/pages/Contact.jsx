import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import "./Contact.css";

export const Contact = () => {
  const [contactFormData,setContactFormData] = useState({
    fullname:'',
    email:'',
    phone:'',
    message:''
  })
  // useEffect(()=>{

  //   // console.log(contactFormData);

  // },{contactFormData})
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("form submitted");
  }
  const handleOnChange =(e)=>{
    const {name,value}=e.target;
    // const name =e.target.name;
    // const value =e.target.value;

   setContactFormData({...contactFormData,[name]:value});
  }
  console.log(contactFormData);

  return (
   <Container>
    <h2>Contact Us</h2>
    <div>
    <form className='contact-form my-4' onSubmit={handleSubmit}>
      <input type="text" name='fullname' onChange={handleOnChange} placeholder='please enter fullname' />
      <input type="email" name='email' onChange={handleOnChange} placeholder='enter email' />
      <input type="number" name='phone' onChange={handleOnChange} placeholder='enter mobile number' />
      <textarea name='message' onChange={handleOnChange} color='30' rows="10"></textarea>
      <button type='submit'>Submit</button>
      </form>
    </div>
   
   </Container>
  )
}
