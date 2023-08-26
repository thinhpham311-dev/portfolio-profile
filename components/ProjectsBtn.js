//next image
import Image from "next/image"

//next link
import Link from "next/link"

// icons
import {HiArrowRight} from "react-icons/hi2"

const ProjectsBtn = () => {
  return <div className="mx-auto xl:mx-0">
    <Link href="/projects" className="relative xl:w-[185px] xl:h-[185px] w-[150px] h-[150px] flex items-center justify-center bg-circleStar bg-cover bg-center bg-no-repeat group">
      <Image src="/rounded-text.png" className="animate-spin-slow w-full h-full xl:max-w-[141px] xl:max-h-[148px] max-w-[115px] max-h-[120px]" height={148} width={141} alt=""/>
      <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300"/>
    </Link>
  </div>;
};

export default ProjectsBtn;
