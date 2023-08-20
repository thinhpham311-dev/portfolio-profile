
import Social from './Socials'
//framer motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "../variants"


const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] xl:py-[10px] py-[20px]">
    <motion.div variants={fadeIn('down', 1)} initial="hidden" animate="show" exit="hidden" className="container mx-auto xl:flex block xl:justify-between justify-center items-center ">
    <div className="logo font-bold">
    <h3 className="xl:text-lg text-[20px] text-center">Thinh Pham</h3>
    </div>
      <Social/>
    </motion.div>
    </header>;
};

export default Header;
