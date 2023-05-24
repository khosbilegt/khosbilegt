import React from 'react';
import styles from '../styles';
import { BsFacebook, BsGithub, BsLinkedin, BsYoutube } from 'react-icons/bs';
import { socialMedia } from '../constants';

const Footer = () => (
     <section className={`${styles.flexCenter} ${styles.paddingY} 
     h-[150px] flex-col bg-black`}>
          <p className='text-gray-300'>archerdoc13@gmail.com</p>
          <p className='text-gray-400 text-[14px]'>+976 85830880</p>
          <p className='text-gray-500 text-xs'>© 2023 Khosbilegt B.</p>
          <div className='text-white flex gap-[10px] mt-[10px]'>
               {socialMedia.map((val, ind) => {
                    switch(val.title) {
                         case "fb":
                              return <a href={val.url}>
                              <BsFacebook 
                              className='text-gray-400 transition-all
                              text-[30px] hover:text-gray-100'/>
                              </a>
                         case "linkedin":
                              return <a href={val.url}>
                              <BsLinkedin 
                              className='text-gray-400 transition-all
                              text-[30px] hover:text-gray-100'/>
                              </a>
                         case "git":
                              return <a href={val.url}>
                              <BsGithub 
                              className='text-gray-400 transition-all
                              text-[30px] hover:text-gray-100'/>
                              </a>
                         case "yt":
                              return <a href={val.url}>
                              <BsYoutube 
                              className='text-gray-400 transition-all
                              text-[30px] hover:text-gray-100'/>
                              </a>
                    }
               })}
          </div>
     </section>
)

export default Footer;