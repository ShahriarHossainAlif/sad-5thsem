import React, { useEffect, useState } from 'react'
import ContactForm from '../components/ContactForm'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomerCustomization from '../components/CustomerCustomization'

const ContactUs = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isUser, setIsUser] = useState(false);
    useEffect(() => {
        const adminStatus= localStorage.getItem('isAdmin');
        const userStatus= localStorage.getItem('isUser');
        if(userStatus === 'true'){
          setIsUser(true);
      }
        else if(adminStatus === 'true'){
            setIsAdmin(true);
        }
    }, [])
  return (
    <div>
      <Navbar isAdmin={isAdmin} isUser={isUser}/>
      <ContactForm/>
      <CustomerCustomization/>
    <Footer/>
    </div>
  )
}

export default ContactUs
