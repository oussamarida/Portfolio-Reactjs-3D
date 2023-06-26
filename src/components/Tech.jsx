import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/montion";
import { styles } from "../styles";

const Tech = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
       
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologie.
        </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
    </>
  
  );
};

export default SectionWrapper(Tech, "");