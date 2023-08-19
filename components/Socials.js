import {FaFacebookF, FaTelegram, FaInstagram, FaLinkedinIn} from "react-icons/fa6"
import Link from "next/link"

const Socials = () => {
  return  <div className="social-list">
  <ul className="flex ">
    <li><Link href="" className="text-[30px] p-3 block"><FaFacebookF/></Link></li>
    <li><Link href="" className="text-[30px] p-3 block"><FaTelegram/></Link></li>
    <li><Link href="" className="text-[30px] p-3 block"><FaLinkedinIn/></Link></li>
    <li><Link href="" className="text-[30px] p-3 block"><FaInstagram/></Link></li>
  </ul>
</div>;
};

export default Socials;
