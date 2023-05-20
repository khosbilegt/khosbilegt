import { useState } from 'react';
import { navLinks } from '../constants';
import { Link } from 'react-router-dom';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import styles from '../styles';

const Navbar = () => {
     const [toggle, setToggle] = useState(false);

     return (
          <nav className='w-full flex py-6 justify-between items-center navbar'>
               <h1 className='w-[124px] h-[32px] bg-slate-50'>Xocoo</h1>
               <ul className='list-none sm:flex hidden 
               justify-end items-center flex-1'>
                    {navLinks.map((nav, index) => (
                         <li
                         key={nav.id}
                         className={`font-poppins font-normal cursor-pointer
                         text-[16px] text-white  hover:text-teal-300 transition-all
                         ${index == navLinks.length - 1 ? 'mr-0' : 'mr-10'}
                         `}>
                              <Link to={`#${nav.id}`}>
                                   {nav.title}
                              </Link>
                         </li>
                    ))}
               </ul>

               <button className='sm:hidden flex flex-1 justify-end items-center'
               onClick={() => {setToggle(!toggle)}}>
                    <h1 className='text-white w-[28px] h-[28px] object-contain text-xl'>
                         {toggle ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </h1>
               </button>

               <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient
               absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col
                    justify-end items-center flex-1'>
                         {navLinks.map((nav, index) => (
                              <li
                              key={nav.id}
                              className={`font-poppins font-normal cursor-pointer
                              text-[16px] text-white hover:text-teal-300
                              ${index == navLinks.length - 1 ? 'mb-0' : 'mb-4'}
                              `}>
                                   <Link to={`#${nav.id}`}>
                                        {nav.title}
                                   </Link>
                              </li>
                         ))}
                    </ul>
               </div>
          </nav>
     )
};

export default Navbar;
