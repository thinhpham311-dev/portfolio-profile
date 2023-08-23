
import Social from './Socials'
//framer motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "../variants"


const Header = () => {
  return <header className=" z-30 w-full flex items-center xl:px-0 h-[100px]">
    <motion.div variants={fadeIn('down', 1)} initial="hidden" animate="show" exit="hidden" className="container mx-auto xl:flex block xl:justify-between justify-center items-center ">
    <div className="logo font-bold">
    <h3 className="xl:text-lg text-[20px] text-center">Thinh Pham</h3>
    </div>
      <Social/>
    </motion.div>
    </header>;
};

export default Header;
