import { useEffect } from 'react';
import { Navbar, Hero, About } from "./components";
import styles from './styles';

const App = () => {
  useEffect(() => {
    document.title = "Khosoo's Portfolio";
  }, []);

  return (
    <div className="bg-zinc-900 w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
            <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <About />
        </div>
      </div>
      
    </div>
  );
};

export default App;