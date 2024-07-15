// src/components/Dashboard/EditProfile.js

import React, { useState, useEffect } from 'react';

const EditProfile = () => {
  // State to hold user profile data
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    // Add more fields as needed
  });

  // Fetch user data from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      const { username, email } = JSON.parse(storedUser);
      setUserData({ username, email });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Example of handling form submission (replace with actual logic)
    console.log('Submitted:', userData);
    // Add logic to update user profile data on the backend
  };

  return (
    <div>
      <h2>Edit Profile</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditProfile;
