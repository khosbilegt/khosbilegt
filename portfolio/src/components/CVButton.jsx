import { BsArrowDownLeft } from 'react-icons/bs';
import styles from '../styles';

function CVButton() {
  return (
    <button className={`${styles.flexCenter} w-[120px] h-[120px] rounded-full
    bg-blue-gradient p-[2px] cursor-pointer 
    `}>
      <div className={`${styles.flexCenter} flex-col bg-black w-[100%]
      h-[100%] rounded-full transition-all hover:bg-gray-800 focus:bg-gray-800`}>
        <div className={`${styles.flexStart} flex-col`}>
          <p className='font-poppins font-medium text-[18px] leading-[23px]'>
            <span className='text-gradient'>Download</span>
          </p>
          <p className='font-poppins font-medium leading-[23px]
          flex align-middle sm:text-[18px]'>
            <span className='text-gradient ml-5'>CV</span>
            <BsArrowDownLeft className='text-teal-300 w-[23px] h-[23px]
            object-contain ml-3'/>
          </p>
        </div>
      </div>
    </button>
  );
}

export default CVButton;
