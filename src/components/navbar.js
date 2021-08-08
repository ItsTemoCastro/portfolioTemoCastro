import React from 'react';

function Navbar(props) {
    return (
        <div className="navbar-section-all">
            <div className="navbar-layer">
                <div className="navbar-content">
                    <div className="navbar-title">
                        <h1>Temo Castro <span>Web Developer</span></h1>
                    </div>
                    <div className="navbar-links">
                        <ul>
                            <li>Home</li>
                            <li>About Me</li>
                            <li>Proyect</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Navbar;