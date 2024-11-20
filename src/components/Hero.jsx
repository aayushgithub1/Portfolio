import { motion } from "framer-motion";

// import { TypeAnimation } from 'react-type-animation';
import {ReactTyped} from "react-typed";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Font } from "three/examples/jsm/Addons.js";


const Hero = () => {
  return (
    <section className={"relative w-full h-screen mx-auto"}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >

        <div className="flex flex-col justify-center items-center mt-5">
        <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
        <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>


        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className='text-[hsl(259,100%,68%)]'>Aayush</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`} style={{ fontSize: '2.2rem' }}>
            <ReactTyped
            strings={[
              "Full-Stack Developer", "Machine Learning",
            ]}
            typeSpeed={100}
            backSpeed={30}
            loop
            />
            {/* Full Stack Developer,<br className='sm:block hidden' />
            Machine Learning */}
          </p>
        </div>

          {/* Circular image */}
        <div className="absolute top-0 right-2 transform translate-x-10">
          <img
            src="src/components/Aayush.png"
            alt="Aayush Raj Verma"
            className="w-[300px] h-[300px] object-cover rounded-full border-4"
            style={{ borderColor: 'hsl(259, 100%, 68%)' }} 
          />
        
        </div>
        

      </div>  


      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
      <a href='#about'>
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
      <motion.div
              animate={{
                y: [0, 4, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;