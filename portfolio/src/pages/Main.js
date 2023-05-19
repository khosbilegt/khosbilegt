import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Image from '../assets/images/me.png';

function Main() {
     return (
          <div className='Main'>
               <Navbar />
               <div className="bg-gray-900 flex">
                    <img src={Image} className='object-cover w-auto'/>
                    <div className='mx-auto flex flex-col justify-center items-center'>
                         <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white  text-center">
                              Hi, I am <span class="text-blue-600 dark:text-teal-400">Khosoo</span>
                         </h1>
                         <p className="text-lg font-normal text-gray-700 lg:text-2xl dark:text-gray-400 text-center">
                              Full-Stack Developer
                         </p>
                    </div>
               </div>
               <About />
          </div>
     );
}

export default Main;