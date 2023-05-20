import { CVButton } from './';
import { heroText } from '../constants';
import { Me } from '../assets';
import styles from '../styles';
import { Element } from 'react-scroll';

const Hero = () => (
  <Element name="home" className={`flex md:flex-row flex-col
   ${styles.paddingY} h-[100%]`}>
    <div className={`flex-1 ${styles.flexStart} flex-col 
    xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px]
        text-[52px] text-white ss:leading-[100px]'>
          Hi, I am <br className='sm:block hidden'/>
          <span className='text-gradient'>Khosoo.</span>
        </h1>
        <div className='sm:block hidden'>
          <CVButton/>
        </div>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-gray-300`}>
        {heroText}
      </p>
    </div>
    <div className={`flex-1 flex flex-col ${styles.flexCenter} 
    md:my-0 my-10 gap-5 relative`}>
      <img src={Me} alt="me" className='h-[500px] object-cover
      relative z-[5]'/>
      <div className="sm:hidden absolute top-10 right-10 z-10">
          <CVButton />
      </div>
      <div className='pink__gradient w-[20%] h-[20%] z-0
      absolute top-0 right-0'/>
      <div className='blue__gradient w-[50%] h-[50%] z-0
      absolute top-0 right-0'/>
      <div className='white__gradient w-[30%] h-[100%] z-0
      absolute top-0 right-0'/>
    </div>

  </Element>
);

export default Hero;
