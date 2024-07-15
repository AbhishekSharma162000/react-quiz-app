// src/pages/UserDashboardPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ChangePassword from '../Auth/ChangePassword'; // Path to ChangePassword component
import Leaderboard from '../Dashboard/Leaderboard';
import MyResults from '../Dashboard/MyResults';
import EditProfile from '../Dashboard/EditProfile';
import ContactUs from '../Dashboard/ContactUs';
import QuizList from '../Quiz/QuizList';
import '../../styles/styles.css';

// Assume you have quiz data
const quizzes = [
  { id: 1, title: 'Quiz 1', description: 'Description for Quiz 1' },
  { id: 2, title: 'Quiz 2', description: 'Description for Quiz 2' },
  { id: 3, title: 'Quiz 3', description: 'Description for Quiz 3' },
  // Add more quizzes as needed
];

const UserDashboardPage = () => {
  const [activeSection, setActiveSection] = useState(null); // Default active section

  const renderContent = () => {
    switch (activeSection) {
      case 'changePassword':
        return <ChangePassword />; // Render ChangePassword component
      case 'leaderboard':
        return <Leaderboard />; // Example placeholder
      case 'myResults':
        return <MyResults />; // Example placeholder
      case 'editProfile':
        return <EditProfile />;
      case 'ContactUs':
        return <ContactUs />;
      case 'allQuizzes':
        return <QuizList quizzes={quizzes} />;
      // Add cases for other features as needed
      default:
        return null;
    }
  };

  const handleNavigation = (section) => {
    setActiveSection(section); // Set the active section
  };

  return (
    <div className="container">
      <div className="dashboard">
        <div className="left-content">
          <div className="dashboard-links">
            <h2>Dashboard Navigation</h2>
            <ul>
              <li><button onClick={() => handleNavigation('allQuizzes')}>All Quizzes</button></li>
              <li><button onClick={() => handleNavigation('myResults')}>My Results</button></li>
              <li><button onClick={() => handleNavigation('leaderboard')}>Leaderboard</button></li>
              <li><button onClick={() => handleNavigation('changePassword')}>Change Password</button></li>
              <li><button onClick={() => handleNavigation('editProfile')}>Edit Profile</button></li>
              <li><button onClick={() => handleNavigation('ContactUs')}>Contact Us</button></li>
              
              {/* Add more navigation items as necessary */}
              <li><Link to="/logout">Logout</Link></li>
            </ul>
          </div>
        </div>
        <div className="right-content">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
