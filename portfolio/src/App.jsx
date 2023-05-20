import { useEffect } from 'react';
import { Navbar, Hero, About, Experience, Education, Works } from "./components";
import styles from './styles';

const App = () => {
  useEffect(() => {
    document.title = "Khosoo's Portfolio";
  }, []);

  return (
    <div className="bg-zinc-900 w-full">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.paddingY} ${styles.flexStart} w-full h-[100%]`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Education />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Experience />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Works />
        </div>
      </div>
      
    </div>
  );
};

export default App;