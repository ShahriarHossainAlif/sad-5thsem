import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import AdminCustomization from '../components/AdminCustomization'

function AdminCustomizationRoute() {
    const [isAdmin, setIsAdmin] = useState(false);
    useEffect(() => {
        setIsAdmin(true);
    }, [])
  return (
    <div>
        <Navbar isAdmin={isAdmin}/>
        <AdminCustomization/>
    </div>
  )
}

export default AdminCustomizationRoute