import ParticlesContainer from "../../components/ParticlesContainer"
import ProjectSlider from "../../components/ProjectSlider"
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';

const Project = () => {
  return <div className="h-full xl:py-36 relative flex items-center">
  <ParticlesContainer/>
  <div className="container mx-auto">
    <div className="flex flex-col xl:flex-row gap-x-8">
      <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4">
        <motion.h2 className="h2 xlmt-5" variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden">My projects <span className="text-accent">.</span></motion.h2>
        <motion.p className="mb-4 max-w-[400px] mx-auto lg:mx-0" variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</motion.p>
      </div>
      <motion.div className="w-full xl:w-[calc(100%-30vw)]" variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit="hidden">
        <ProjectSlider/>
      </motion.div>
    </div>
  </div>
</div>;;
};

export default Project;
