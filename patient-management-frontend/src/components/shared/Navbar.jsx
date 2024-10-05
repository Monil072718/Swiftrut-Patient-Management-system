import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Assuming token is stored in localStorage
    navigate('/login');
  };

  const isAuthenticated = !!localStorage.getItem('token'); // Check if token exists to show/hide links

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <ul className="navbar-links">
          {!isAuthenticated && (
            <>
              
            </>
          )}
          {isAuthenticated && (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
