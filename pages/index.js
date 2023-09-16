//component 
import ProjectBtn from "../components/ProjectsBtn"
import Avatar from "../components/Avatar"
import ParticlesContainer from "../components/ParticlesContainer"
import Circles from "../components/Circles"
//framer motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "../variants"

const Home = () => {
  return <div className="z-10 h-full xl:mb-0 py-[30px] relative">
    <ParticlesContainer />
    <div className="text-center flex flex-col justify-center xl:pt-0 xl:text-left container mx-auto h-full">
      <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1 z-10">
        Hello <br /> I'm {' '} <span className="text-accent">Thinh Pham</span>
      </motion.h1>
      <motion.p variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12 text-yellow z-10">
        I'm a Web Developer with my experience developing the website. I can use my knowledge and skills to increase aesthetics and increase user experience.
      </motion.p>
      <motion.div variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit="hidden" className="z-20 mx-auto xl:mx-0">
        <ProjectBtn />
      </motion.div>

      <motion.div variants={fadeIn('up', 0.6)} initial="hidden" animate="show" exit="hidden" transition={{ duration: 1, ease: 'easeInOut' }} className="w-full h-full right-0 top-0  xl:block hidden  max-w-[737px] max-h-[678px] absolute ">
        <div className="absolute h-[450px] w-[450px] shadow-lg overflow-hidden top-1/3 left-1/3 -translate-x-1/3 -translate-y-1/3 rounded-full mt-[20px] bg-transparent">
          <Avatar _w={737} _h={678} source="/avatar-bg-thinhpham.jpg" />
        </div>
      </motion.div>
    </div>
  </div>;
};

export default Home;
