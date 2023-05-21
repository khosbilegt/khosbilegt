import { CVButton } from './';
import { heroText } from '../constants';
import { Me } from '../assets';
import styles from '../styles';
import { Element } from 'react-scroll';

const Hero = () => (
  <Element name="home" className={`flex md:flex-row flex-col
   ${styles.paddingY} h-[90%]`}>
    <div className={`flex-1 ${styles.flexStart} flex-col 
    xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row justify-between items-start w-full'>
        <h1 className='flex-1 font-poppins font-light ss:text-[72px]
        text-[52px] text-white ss:leading-[100px]'>
          Hi, I am
          <span className='text-gradient'> Xocoo.</span>
        </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[600px] mt-5 text-gray-300`}>
        {heroText}
      </p>
    </div>
    <div className={`flex-1 flex flex-col ${styles.flexCenter} 
    md:my-0 my-10 gap-5 relative`}>
      <img src={Me} alt="me" className='h-[500px] object-cover
      relative z-[5]'/>
      <div className=" absolute top-10 right-10 z-10">
          <CVButton />
      </div>
      <div className='white__gradient w-[40%] h-[80%] z-0
      absolute top-20'/>
    </div>

  </Element>
);

export default Hero;