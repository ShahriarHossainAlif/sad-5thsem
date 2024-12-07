import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CustomerDashboard.css'; // Assuming you have a CSS file for styling

function CustomerDashboard() {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const [packages, setPackages] = useState([]);
  
  useEffect(() => {
    // Fetch user data from the backend (assuming the user is already logged in)
    const fetchUserData = async () => {
      try {
        // Replace this with the correct endpoint for user data (based on user session)
        const response = await axios.get('http://localhost:8081/user-info', {
          withCredentials: true, // Ensure cookies are sent along with request (if required for session)
        });
        setUserInfo(response.data); // Assuming the response contains user data
      } catch (err) {
        setError('Failed to fetch user data');
      }
    };

    // Fetch purchased packages for the user
    const fetchPackages = async () => {
      try {
        const response = await axios.get('http://localhost:8081/user-packages', {
          withCredentials: true,
        });
        setPackages(response.data); // Assuming the response contains a list of packages
      } catch (err) {
        setError('Failed to fetch packages');
      }
    };

    // Call both functions to load user data and packages
    fetchUserData();
    fetchPackages();
  }, []);

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-content">
        <div className="user-info">
          <h3>User Information</h3>
          {userInfo ? (
            <>
              <p><strong>Username:</strong> @{userInfo.username}</p>
              <p><strong>Customer Name:</strong> {userInfo.customerName}</p>
              <p><strong>Email:</strong> {userInfo.email}</p>
              <p><strong>Phone Number:</strong> {userInfo.phoneNumber}</p>
              <button className="update-btn">Update Info</button>
            </>
          ) : (
            <p>Loading user data...</p>
          )}
        </div>

        <div className="stats-section">
          <div className="stats-card">
            <h3>{packages.filter(pkg => pkg.status === 'pending').length}</h3>
            <p>Pending Packages</p>
          </div>
          <div className="stats-card cancelled">
            <h3>{packages.filter(pkg => pkg.status === 'cancelled').length}</h3>
            <p>Cancelled Packages</p>
          </div>
          <div className="stats-card confirmed">
            <h3>{packages.filter(pkg => pkg.status === 'confirmed').length}</h3>
            <p>Confirmed Packages</p>
          </div>
          <div className="stats-card completed">
            <h3>{packages.filter(pkg => pkg.status === 'completed').length}</h3>
            <p>Completed Packages</p>
          </div>
        </div>

        <div className="purchased-packages">
          <h3>Purchased Packages</h3>
          <div className="package-list">
            {packages.length > 0 ? (
              packages.map((pkg, index) => (
                <div className="package-card" key={index}>
                  <h4>{pkg.packageName}</h4>
                  <p>Status: {pkg.status}</p>
                  <p>Price: {pkg.price} BDT</p>
                </div>
              ))
            ) : (
              <p>No packages available.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerDashboard;
