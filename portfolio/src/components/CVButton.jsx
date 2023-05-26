import React from 'react';
import { BsArrowDownLeft } from 'react-icons/bs';
import { cvLink } from '../constants';
import styles from '../styles';

/*  

*/
const CVButton = () => (
    <a className={`${styles.flexCenter} w-[100px] h-[100px] rounded-full
    bg-blue-gradient p-[2px] cursor-pointer`} 
    href={cvLink} download="KhosooCV.png">
    <div className={`${styles.flexCenter} flex-col bg-black w-[100%]
    h-[100%] rounded-full transition-all hover:bg-gray-800 focus:bg-gray-800`}>
      <div className={`${styles.flexStart} flex-col`}>
        <p className='font-poppins font-medium text-[16px] leading-[23px]'>
          <span className='text-gradient'>Download</span>
        </p>
        <p className='font-poppins font-medium leading-[23px]
        flex align-middle sm:text-[16px]'>
          <span className='text-gradient ml-5'>CV</span>
          <BsArrowDownLeft className='text-teal-300 w-[23px] h-[23px]
          object-contain ml-3'/>
        </p>
      </div>
    </div>
  </a>
);

export default CVButton;

//https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1669.jpg