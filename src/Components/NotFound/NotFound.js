import React from 'react';
import Navbar from '../CommonSections/Navbar/Navbar';

// ---------------------------ERROR page----------------------------

const NotFound = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h1 style={{ textAlign: "center" }}>404 page not found</h1>
        </div>
    );
};

export default NotFound;