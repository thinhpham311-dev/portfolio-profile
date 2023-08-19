import Image from "next/image"

//component 
import ParticlesContainer from "./../components/ParticlesContainer"
import ProjectBtn from "./../components/ProjectsBtn"
import Avatar from "./../components/Avatar"

//framer motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "../variants"

const Home = () => {
  return <div className="bg-primary/60 h-full">
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 z-10">
      <div className="text-center flex flex-col justify-center xl:pt-0 xl:text-left container mx-auto h-full">
        <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden" className="h1">
          Transforming Ideas <br /> Info {' '} <span className="text-accent">Digital reality</span>
        </motion.h1>
        <motion.p variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden" className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-12 text-yellow">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </motion.p>
        <div className="flex justify-center xl:hidden z-10">
          <ProjectBtn />
        </div>
        <motion.div variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden" className="hidden xl:flex">
          <ProjectBtn />
        </motion.div>
      </div>
    </div>
    <div className="w-[1200px] h-full absolute right-0 bottom-0">
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
      <div><ParticlesContainer/></div>
      <motion.div variants={fadeIn('up', 0.5)} initial="hidden" animate="show" exit="hidden" transition={{duration:1, ease:'easeInOut'}} className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]">
        <Avatar/>
      </motion.div>
    </div>
  </div>;
};

export default Home;
