
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
  return <header className=" z-30 w-full flex items-center  xl:px-0 h-[100px]">
    <motion.div variants={fadeIn('down', 1)} initial="hidden" animate="show" exit="hidden" className="container mx-auto flex xl:flex-row flex-col justify-between gap-3 items-center ">
      <div className="logo flex justify-center flex-wrap gap-x-5">
        <Link href="tel:0702895474" className="flex items-center  text-lg"><BsPhoneFill className="mr-2" /> <span className="font-thin mr-1 text-[13px]"> 0702895474</span></Link>
        <Link href="" className="flex items-center  text-lg"><MdEmail className="mr-2" /> <span className="font-thin mr-1 text-[13px]"> thinhpham67ag@gmail.com</span></Link>
      </div>
      <Social />
    </motion.div>
  </header>;
};

export default Header;
