import React from 'react'
import { Element } from 'react-scroll';
import { worksInfo } from '../constants';
import styles from '../styles';

function Works() {
     return (
     <Element name="works" className={`${styles.paddingX} ${styles.paddingY}`}>
          <h1 className={`text-gray-300 text-[20px] font-light mb-5`}>
               Recent Works
          </h1>

          <div className={`w-full flex-wrap gap-[20px] flex ${styles.flexCenter}`}>
               {worksInfo.map((val, index) => (
                    <div className={`rounded-lg max-w-sm p-6 h-[450px]
                    border shadow bg-gray-800 border-gray-700`}>
                         <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900
                         dark:text-white h-[75px]">
                              {val.title}
                         </h5>
                         <p class="mb-3 font-normal text-gray-700 dark:text-gray-400
                         h-[75px]">
                              {val.info}
                         </p>
                         {val.image ? 
                         <div className={`w-full flex ${styles.flexCenter}`}>
                              <img src={val.image} className="h-[150px] border-gray-600 
                              rounded-lg border-[2px] mb-5"/>
                         </div>
                         : 
                         <p></p>
                         }
                         <a href={val.url} class="inline-flex items-center px-3 py-2 
                         text-sm font-medium text-center text-white bg-blue-700 
                         rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none
                         focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700
                         dark:focus:ring-blue-800">
                              Read more 
                              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                         </a>
                    </div>
               ))}
          </div>
     </Element>
     )
}

export default Works;