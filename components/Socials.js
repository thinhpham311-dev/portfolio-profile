import Link from "next/link";
import { socialLinks } from "../constants/data"

const Socials = () => {
  return (
    <div className="social-list xl:mx-0 mx-auto xl:w-[15%] z-10 lg:w-[40%] md:w-[50%] w-[90%]">
      <ul className="flex lg:justify-end justify-center gap-3">
        {socialLinks.map(({ href, icon, label }) => (
          <li key={label}>
            <Link
              href={href}
              className="font-thin border-[0.5px] border-white hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center rounded-full h-10 w-10 text-[18px]"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
