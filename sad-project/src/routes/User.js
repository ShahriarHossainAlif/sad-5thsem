import React, { useEffect, useState } from 'react'
import CustomerDashboard from '../components/CustomerDashboard'
import Navbar from '../components/Navbar'

const User = () => {
  const [isUser, setUser] = useState(false);
  useEffect(() => {
    const userStatus= localStorage.getItem('isUser');
    if(userStatus==='true') 
      setUser(true);
  }, [])
  return (
    <div>
      <Navbar isUser={isUser}/>
      <CustomerDashboard/>
    </div>
  )
}

export default User
