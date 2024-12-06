import React from 'react';
import "./LoginBoth.css"

function ButtonContainer({ onClick }) {
  return (
    <div className="button-container">
      <button onClick={() => onClick('admin')}>Admin Login</button>
      <button onClick={() => onClick('customer')}>Customer Login</button>
    </div>
  );
}

export default ButtonContainer;
