
import Link from 'next/link'
import Social from './Socials'
//framer motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "../variants"

//icons
import { BsPhoneFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md"


const Header = () => {
  return <header className=" z-30 w-full flex items-center xl:px-0 h-[100px]">
    <motion.div variants={fadeIn('down', 1)} initial="hidden" animate="show" exit="hidden" className="container mx-auto xl:flex block xl:justify-between justify-evenly items-center ">
      <div className="logo font-bold flex justify-center flex-wrap gap-y-1 gap-x-3">
        <Link href="tel:0702895474" className="flex items-center text-[13px] xl:text-lg"><span className="font-bold mr-1"><BsPhoneFill /> </span>0702895474</Link>
        <Link href="" className="flex items-center text-[13px] xl:text-lg"><span className="font-bold mr-1"><MdEmail /></span> thinhpham67ag@gmail.com</Link>
      </div>
      <Social />
    </motion.div>
  </header>;
};

export default Header;
