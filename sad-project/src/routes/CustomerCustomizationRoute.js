import React, { useEffect, useState } from 'react'
import CustomerCustomization from '../components/CustomerCustomization'
import Navbar from '../components/Navbar'

function CustomerCustomizationRoute() {
  const [isUser, setIsUser] = useState(false);
    useEffect(() => {
        const userStatus= localStorage.getItem('isUser');
        if(userStatus === 'true'){
          setIsUser(true);
      }
    }, [])

  return (

    <div>
        <Navbar isUser={isUser}/>
        <CustomerCustomization/>
    </div>
  )
}

export default CustomerCustomizationRoute