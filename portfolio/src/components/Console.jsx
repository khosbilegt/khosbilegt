import React from 'react'
import styles from '../styles';
import './Toolbar.css';

function Console() {
  return (
    <div className={`w-full ${styles.paddingX} mt-5
     flex-col ${styles.flexCenter}`}>
          <div class="outer w-[400px] h-[40px]">
               <div class="dot red"></div>
               <div class="dot amber"></div>
               <div class="dot green"></div>
          </div>
          <div className='w-[400px] h-[200px] bg-black'>
               <p className='text-white font-majorMono'>
                    xocoo@KMac Desktop % ./guesstheletter
                    <br />
                    Choose a road (A, B, C): 
                    <span className='animate-pulse' style={{animationDuration: '1s'}}>|</span>
               </p>
          </div>
    </div>
  )
}

export default Console