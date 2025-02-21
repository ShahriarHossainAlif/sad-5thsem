import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import DestinationCom from '../components/DestinationCom'
import Footer from '../components/Footer'

const Destinations = () => {
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
      <DestinationCom/>
      <Footer/>
    </div>
  )
}

export default Destinations
