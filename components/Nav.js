// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from 'react-icons/hi2';
import Link from 'next/link'
import {useRouter} from "next/router"
//framer motion
import { motion } from "framer-motion"

//variants
import { fadeIn } from "../variants"


// nav data
export const navData = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  { name: 'services', path: '/services', icon: <HiRectangleGroup /> },
  { name: 'work', path: '/work', icon: <HiViewColumns /> },
  {
    name: 'testimonials',
    path: '/testimonials',
    icon: <HiChatBubbleBottomCenterText />,
  },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  const router = useRouter()
  return <nav className=" xl:w-[30%] z-10 lg:w-[40%] md:w-[50%] mx-auto w-[90%] drop-shadow-2xl h-[100px] flex items-center" >
    <motion.div variants={fadeIn('up', 1)} initial="hidden" animate="show" exit="hidden" className="w-full rounded-full backdrop-blur-ms bg-white/30 px-2">
    <ul className="flex items-center justify-between h-full">
      {
        navData.map((item) => <li key={item.name} className={`text-white hover:text-accent py-2 transition-all duration-300 rounded-full `}><Link href={item.path} className={`p-[12px] drop-shadow-2xl rounded-full block ${router.pathname === item.path && "text-accent bg-white" }`}><span className="text-lg">{item.icon}</span></Link></li>)
      }

    </ul>
    </motion.div>
      </nav>;
};

export default Nav;
