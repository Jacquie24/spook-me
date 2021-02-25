import React from 'react';
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/addNew">Add New</Link>
            <Link to="/viewAll">View All</Link>
            <Link to="/login/signup">Login/Sign Up</Link>
        </div>
    );
};

export default NavBar;