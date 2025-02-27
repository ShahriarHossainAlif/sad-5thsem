import React, { useEffect, useState } from 'react'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'


function AdminDashboard() {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        setIsAdmin(true);
    }, [])
  return (
    <div>
      <Navbar isAdmin={isAdmin} />
     
       <Dashboard/>
    </div>
  )
}

export default AdminDashboard
