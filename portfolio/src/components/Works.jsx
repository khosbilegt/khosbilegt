import React from 'react'
import { Element } from 'react-scroll';
import { currentWorkInfo, worksInfo } from '../constants';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import styles from '../styles';

function Works() {
     return (
     <Element name="works" className={`${styles.paddingX} ${styles.paddingY}`}>
          <h1 className={`text-gray-300 text-[20px] font-light mb-5`}>
               Currently working on
          </h1>
          <div className={`w-full flex-wrap gap-[20px] flex ${styles.flexCenter}`}>
               <div className={`rounded-lg max-w-sm p-6 h-[300px]
                         border shadow bg-gray-800 border-gray-700`}>
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-white h-[75px]">
                         {currentWorkInfo.title}
                    </h5>
                    <p class="mb-3 mt-3 font-normal text-gray-400
                    h-[75px]">
                         {currentWorkInfo.info}
                    </p>
                    <div className={`${styles.flexCenter} mt-10`}>
                         <span className={`"inline-flex items-center px-3 py-2.5 
                         text-sm font-medium text-center text-white rounded-lg 
                         focus:outline-none bg-teal-600`} key={"t"}>
                              {currentWorkInfo.tag}
                         </span>
                         <span className="inline-flex items-center px-3 py-[9px] 
                         text-sm font-medium text-center text-white rounded-lg 
                         focus:outline-none bg-blue-600 hover:bg-blue-700 ml-5">
                              Work in Progress
                              <AiOutlineLoading3Quarters className='ml-3'/>
                         </span>
                    </div>
               </div>
          </div>

          <h1 className={`text-gray-300 text-[20px] font-light mb-5 mt-5`}>
               Recent Works
          </h1>

          <div className={`w-full flex-wrap gap-[20px] flex ${styles.flexCenter}`}>
               {worksInfo.map((val, index) => {
                    return <div className={`rounded-lg max-w-sm p-6 h-[450px]
                    border shadow bg-gray-800 border-gray-700`}>
                         <h5 class="mb-2 text-2xl font-bold tracking-tight text-white h-[75px]">
                              {val.title}
                         </h5>
                         <p class="mb-3 mt-3 font-normal text-gray-400
                         h-[75px]">
                              {val.info}
                         </p>
                         {val.image ? 
                         <div className={`w-full flex ${styles.flexCenter}`}>
                              <img src={val.image} className="h-[150px] border-gray-600 
                              rounded-lg border-[2px] mb-5" alt=""/>
                         </div>
                         : 
                         <p></p>
                         }
                         <div className={`${styles.flexCenter}`}>
                              <span className={`"inline-flex items-center px-3 py-2.5 
                              text-sm font-medium text-center text-white rounded-lg 
                              focus:outline-none bg-teal-600`} key={"t"+index}>
                                   {val.tag}
                              </span>
                              <a href={val.url} className="inline-flex items-center px-3 py-[9px]  
                              text-sm font-medium text-center text-white rounded-lg 
                              focus:outline-none bg-blue-600 hover:bg-blue-700 ml-5">
                                   Read more 
                                   <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                              </a>
                         </div>
                    </div>
               })}
          </div>
     </Element>
     )
}

export default Works;

/*

*/