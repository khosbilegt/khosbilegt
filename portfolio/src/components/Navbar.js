import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
     return (
          <nav className="flex justify-center items-center bg-gray-800 text-white h-16">
               <div className="flex space-x-8">
                    <Link to="/" className='text-teal-200 hover:text-teal-600'></Link>
                    <Link to="/" className='text-teal-200 hover:text-teal-600'>About me</Link>
                    <Link to="/" className='text-teal-200 hover:text-teal-600'>Services</Link>
                    <Link to="/" className='text-teal-200 hover:text-teal-600'>Works</Link>
                    <Link to="/" className='text-teal-200 hover:text-teal-600'>Contact</Link>
               </div>
          </nav>
     );
}

export default Navbar;