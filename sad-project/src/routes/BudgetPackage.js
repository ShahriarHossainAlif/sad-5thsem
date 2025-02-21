import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Budget from '../components/Budget'
import Footer from '../components/Footer'


const BudgetPackage = () => {
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
      <Budget/>
      <Footer/>
    </div>
  )
}

export default BudgetPackage
