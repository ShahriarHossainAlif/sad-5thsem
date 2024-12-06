import React, { useState } from 'react';
import ButtonContainer from './ButtonContainer';
import AdminLogin from './AdminLogin';
import CustomerLogin from './CustomerLogin';
import './LoginBoth.css';

function LoginBoth() {
  const [activeForm, setActiveForm] = useState(''); // State to track which form is active

  return (
    <div classname="center-wrapper">
        <div className="container">
      <ButtonContainer onClick={setActiveForm} />

      {activeForm === 'admin' && <AdminLogin />}
      {activeForm === 'customer' && <CustomerLogin />}
    </div>
    </div>
  );
}

export default LoginBoth;
