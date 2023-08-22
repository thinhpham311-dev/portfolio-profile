//component 
import ProjectBtn from "./../components/ProjectsBtn"
import Avatar from "./../components/Avatar"
import ParticlesContainer from "./../components/ParticlesContainer"

//framer motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "../variants"

const Home = () => {
  return <div className="z-10 h-full pt-40 pb-32">
      <ParticlesContainer/>
      <div className="text-center flex flex-col justify-center xl:pt-0 xl:text-left container mx-auto h-full">
        <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1 z-10">
          Transforming Ideas <br /> Info {' '} <span className="text-accent">Digital reality</span>
        </motion.h1>
        <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12 text-yellow z-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </motion.p>
        <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="z-20 mx-auto xl:mx-0">
          <ProjectBtn />
        </motion.div>
      </div>

    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
      <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden" transition={{duration:1, ease:'easeInOut'}} className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        <Avatar _w={737} _h={678} source="/avatar.png"/>
      </motion.div>
    </div>
  </div>;
};

export default Home;
