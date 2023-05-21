import React from 'react'
import { Element } from 'react-scroll';
import styles from '../styles';
import { educationInfo } from '../constants';

function Education() {
  return (
  <Element name="education" className={`${styles.paddingX}`}>
     <h1 className={`text-gray-300 text-[20px] font-light mb-5`}>
          Education
     </h1>

     <ol class={`relative border-l border-gray-200 dark:border-gray-700`}>
          {educationInfo.map((val, index) => (
               <li className="mb-10 ml-6">
                    <span class="absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-8  ring-gray-900 bg-blue-900">
                         <svg aria-hidden="true" class="w-3 h-3 text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                    </span>
                    <h3 class="flex items-center mb-1 text-lg font-semibold text-white">{val.title}</h3>
                    <time class="block mb-2 text-sm font-normal leading-none text-gray-500">{val.date}</time>
                    <p class="mb-4 text-base font-normal text-gray-400">{val.info}</p>
                    <a href={`${val.url}`} className='text-blue-500 underline'>{val.link}</a>
               </li>
          ))}
     </ol>
  </Element>
  )
}

export default Education;