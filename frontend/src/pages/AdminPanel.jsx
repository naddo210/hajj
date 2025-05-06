import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/AdminPanel.css';
const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <div className="admin-sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li>
              <Link to="/admin/reviews">Manage Reviews</Link>
            </li>
            <li>
              <Link to="/admin/videos">Manage Videos</Link>
            </li>
            {/* Add more admin navigation links as needed */}
          </ul>
        </nav>
      </div>
      <div className="admin-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminPanel;