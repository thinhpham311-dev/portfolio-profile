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
  return <nav className="fixed bottom-[20px] xl:w-[30%] z-50 lg:w-[40%] md:w-[50%] w-[90%] left-1/2 -translate-x-1/2 drop-shadow-2xl"> 
    <div className="w-full rounded-full backdrop-blur-ms bg-white/30 px-2">
    <ul className="flex items-center justify-between h-full">
      {
        navData.map((item) => <li key={item.name} className={`text-white hover:text-accent py-2 transition-all duration-300 rounded-full `}><Link href={item.path} className={`p-[12px] drop-shadow-2xl rounded-full block ${router.pathname === item.path && "text-accent bg-white" }`}><span className="text-lg">{item.icon}</span></Link></li>)
      }

    </ul>
    </div>
  </nav>;
};

export default Nav;
