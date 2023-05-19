import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
     return (
          <div className='Navbar'>
               <ul>
                    <Link to="/">Test</Link>
                    <Link to="/">Test</Link>
                    <Link to="/">Test</Link>
               </ul>
          </div>
     );
}

export default Navbar;