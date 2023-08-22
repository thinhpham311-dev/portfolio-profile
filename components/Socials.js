import {FaFacebookF, FaTelegram, FaInstagram, FaLinkedinIn} from "react-icons/fa6"
import Link from "next/link"

const Socials = () => {
  return  <div className="social-list xl:mx-0 mx-auto xl:w-[25%] z-10 lg:w-[40%] md:w-[50%] w-[90%]">
  <ul className="flex justify-between">
    <li className="hover:text-accent transition-all duration-300"><Link href="" className=" xl:text-[25px] text-[20px] p-3 block"><FaFacebookF/></Link></li>
    <li className="hover:text-accent transition-all duration-300"><Link href="" className=" xl:text-[25px] text-[20px] p-3 block"><FaTelegram/></Link></li>
    <li className="hover:text-accent transition-all duration-300"><Link href="" className=" xl:text-[25px] text-[20px] p-3 block"><FaLinkedinIn/></Link></li>
    <li className="hover:text-accent transition-all duration-300"><Link href="" className=" xl:text-[25px] text-[20px] p-3 block"><FaInstagram/></Link></li>
  </ul>
</div>;
};

export default Socials;
