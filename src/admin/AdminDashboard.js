import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const adminLinks = () => {
    return (
      <div className="card">
        <h4 className="card-header">Admin Routes</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <Link className="nav-link" to="/create/episode">
              Create Episode
            </Link>
            <Link className="nav-link" to="/create/ama">
              Create AMA
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="row">
      <div className="col-3">{adminLinks()}</div>
    </div>
  );
};

export default AdminDashboard;
