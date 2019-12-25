import React from "react";

import { Link } from 'react-router-dom'

const Navbar= () => {
    return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Leave App</a>
  
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/dashboard">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/profile">Profile</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/leave-history">Leave History</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/apply-leave">Apply Leave</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/employees">Employees</Link>
      </li>
    </ul>
    
  </div>
</nav>
)
}

export default Navbar;