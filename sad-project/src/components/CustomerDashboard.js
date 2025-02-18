import React, { useState, useEffect } from 'react';

import './CustomerDashboard.css'; // Assuming you have a CSS file for styling
import { auth, db } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

function CustomerDashboard() {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [packages, setPackages] = useState([]);
  const fetchUserInfo = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userRef = doc(db, "Users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserInfo(userSnap.data());
        } else {
          setError("User not found");
        }
      } else {
        setError("User not logged in");
      }
    });
  }
  useEffect(() => {
    fetchUserInfo();
  },[])
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
    } catch(error) {
      console.log("Error logging out", error.message);
      
    }
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="user-info">
          <h3>User Information</h3>
          {userInfo ? (
            <>
              <p><strong>Username:</strong> {userInfo.username}</p>
              <p><strong>Email:</strong> {userInfo.email}</p>
              <p><strong>Phone Number:</strong> {userInfo.phone}</p>
              <button className="update-btn" onClick={handleLogout}>Log Out</button>
            </>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>
        </div>
        </div>
  )

  }

export default CustomerDashboard;
