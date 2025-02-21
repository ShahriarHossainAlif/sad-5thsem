import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import axios from 'axios';

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [editUser, setEditUser] = useState(null);

  // Fetch users data when the component mounts
  useEffect(() => {
    fetchUsers();
  }, []);

  // Fetch users from the backend
  const fetchUsers = async () => {
    try {
      const res = await axios.get('http://localhost:8081/users');
      setUsers(res.data);  // Set fetched data to users state
    } catch (err) {
      console.error('Error fetching users:', err);
    }
  };

  // Handle updating user info
  const handleUpdate = async (user) => {
    try {
      await axios.put(`http://localhost:8081/users/${user.id}`, user);  // API call to update user
      fetchUsers();  // Refetch users after update
      setEditUser(null);  // Clear the edit form
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  // Handle deleting a user
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/users/${id}`);  // API call to delete user
      fetchUsers();  // Refetch users after deletion
    } catch (err) {
      console.error('Error deleting user:', err);
    }
  };

  // Handle input changes in the edit form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditUser({ ...editUser, [name]: value });
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    window.location.reload();
    window.location.href= "/login";
  }


  return (
    <div className="dashboard-container">
      <br />
      <br />
      <h1>Admin Dashboard</h1>
      <br />
      <br />
      <div className="high">
        <span className="top">
          Incoming <br />
          <span className="zero">0</span>
        </span>

        <span className="top">
          Confirmed <br />
          <span className="zero">0</span>
        </span>

        <span className="top">
          Completed <br />
          <span className="zero">0</span>
        </span>

        <span className="top">
          Cancelled <br />
          <span className="zero">0</span>
        </span>

        <span className="left">
          Budget Pack
          <button className="bud">
            pack-1 <br /> 0
          </button>
          <button className="bud">
            pack-2 <br /> 0
          </button>
          <button className="bud">
            pack-3 <br /> 0
          </button>
        </span>

        <span className="left">
          Gold Pack
          <button className="bud">
            pack-1 <br /> 0
          </button>
          <button className="bud">
            pack-2 <br /> 0
          </button>
          <button className="bud">
            pack-3 <br /> 0
          </button>
        </span>
      </div>
      <br />
      <br />
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Customer Name</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              {editUser && editUser.id === user.id ? (
                <>
                  <td>
                    <input
                      type="text"
                      name="username"
                      value={editUser.username}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="email"
                      value={editUser.email}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="customerName"
                      value={editUser.customerName}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name="phoneNumber"
                      value={editUser.phoneNumber}
                      onChange={handleChange}
                    />
                  </td>
                  <td>
                    <button onClick={() => handleUpdate(editUser)}>Save</button>
                    <button onClick={() => setEditUser(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.customer_name}</td>
                  <td>{user.phone_number}</td>
                  <td>
                    <button onClick={() => setEditUser(user)}>Edit</button>
                    <button onClick={() => handleDelete(user.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <br />
      <h1>Pending Orders</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Package Information</th>
          </tr>
        </thead>
        <tbody>
          {/* Example data, replace it with real pending orders */}
          <tr>
            <td>Shahriar Hossain Alif</td>
            <td>Budget Package</td>
          </tr>
        </tbody>
      </table>
      <br />
      <br />
      <h1>Confirmed Order</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Package Information</th>
          </tr>
        </thead>
        <tbody>
          {/* Example data, replace it with real confirmed orders */}
          <tr>
            <td>Shahriar Hossain Alif</td>
            <td>Budget Package</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
