import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className='navbar'>
            <div className='n-left'>
                <h4>Balaji</h4>
                <h4>toggle</h4>
            </div>
            <div className='n-right'>
                <div className='n-right-list'>
                    <ul className='n-right-list-ul'>
                        <li>Home</li>
                        <li>Service</li>
                        <li>Experience</li>
                        <li>Project</li>
                    </ul>
                </div>
                <button className='contectbtn'>Contact Us</button>
            </div>
        </div>
    )
}

export default Navbar;