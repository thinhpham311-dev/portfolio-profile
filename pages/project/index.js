import ParticlesContainer from "../../components/ParticlesContainer"
import ProjectSlider from "../../components/ProjectSlider"
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';

const Project = () => {
  return <div className="h-full xl:py-36 relative flex items-center">
    <ParticlesContainer />
    <div className="container mx-auto">
      <div className="mb-5">
        <motion.h2 className="h2 text-center" variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden">My projects <span className="text-accent">.</span></motion.h2>
      </div>
      <motion.div className="w-full " variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit="hidden">
        <ProjectSlider />
      </motion.div>
    </div>
  </div>;
};

export default Project;
