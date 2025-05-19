import { FaFacebookF, FaTelegram, FaInstagram, FaLinkedinIn } from "react-icons/fa6"
import Link from "next/link"

const Socials = () => {
  return <div className="social-list xl:mx-0 mx-auto xl:w-[15%] z-10 lg:w-[40%] md:w-[50%] w-[90%]">
    <ul className="flex lg:justify-end justify-center  gap-3">
      <li><Link href="https://www.facebook.com/profile.php?id=100064805719040&mibextid=ZbWKwL" className="font-thin border-[0.5px] border-white hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center rounded-full h-10 w-10 text-[18px] "><FaFacebookF /></Link></li>
      <li><Link href="https://www.linkedin.com/in/th%E1%BB%8Bnh-ph%E1%BA%A1m-86a6382a7/" className="font-thin border-[0.5px] border-white hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center rounded-full h-10 w-10 text-[18px] "><FaLinkedinIn /></Link></li>
      <li><Link href="https://www.instagram.com/phamthinh30522?igsh=OGY3MTU3OGY1Mw==" className="font-thin border-[0.5px] border-white hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center rounded-full h-10 w-10 text-[18px] "><FaInstagram /></Link></li>
    </ul>
  </div>;
};

export default Socials;
