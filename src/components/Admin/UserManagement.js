// src/components/Admin/UserManagement.js

import React, { useState, useEffect } from 'react';
import '../../styles/userManagement.css';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Mock data fetching function
  useEffect(() => {
    // Replace this with actual API call to fetch users and related quiz activity
    const fetchUsers = async () => {
      const mockUsers = [
        { id: 1, username: 'user1', email: 'user1@example.com', quizActivity: { quizzesTaken: 3, averageScore: 75 } },
        { id: 2, username: 'user2', email: 'user2@example.com', quizActivity: { quizzesTaken: 5, averageScore: 80 } },
        { id: 3, username: 'user3', email: 'user3@example.com', quizActivity: { quizzesTaken: 2, averageScore: 65 } },
      ];
      setUsers(mockUsers);
    };

    fetchUsers();
  }, []);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditing(true);
  };

  const handleDeleteUser = (userId) => {
    // Replace this with actual API call to delete user
    setUsers(users.filter(user => user.id !== userId));
  };

  const handleSaveChanges = () => {
    // Replace this with actual API call to update user details
    setUsers(users.map(user => user.id === selectedUser.id ? selectedUser : user));
    setIsEditing(false);
    setSelectedUser(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser({ ...selectedUser, [name]: value });
  };

  return (
    <div>
      <h2>User Management</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Quizzes Taken</th>
            <th>Average Score</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.quizActivity.quizzesTaken}</td>
              <td>{user.quizActivity.averageScore}%</td>
              <td>
                <button onClick={() => handleEditUser(user)}>Edit</button>
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isEditing && selectedUser && (
        <div className="edit-form">
          <h3>Edit User</h3>
          <form onSubmit={handleSaveChanges}>
            <div>
              <label>Username:</label>
              <input
                type="text"
                name="username"
                value={selectedUser.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={selectedUser.email}
                onChange={handleChange}
              />
            </div>
            <button type="button" onClick={handleSaveChanges}>Save Changes</button>
            <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
