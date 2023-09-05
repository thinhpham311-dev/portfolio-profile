import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from "swiper/modules"
import {BsArrowRightCircle} from "react-icons/bs"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// data
import {PROJECTLIST_DATA } from "../constants"

const ProjectSlider = () => {
  const data = PROJECTLIST_DATA
  return <>
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[260px] sm:h-[480px]"
    >
     {
        data.slides.map((item, index) => <SwiperSlide key={index}>
            <div className=" grid gap-3 grid-cols-2 grid-rows-2 cursor-pointer shadow-indigo-500/40">
            {item.images.map((image, index) => <div key={index} className="after:h-0 overflow-hidden rounded-lg flex justify-center items-center group ">
               <div className="flex justify-center items-center relative overflow-hidden">
                <Image src={image.path} width={500} height={300} alt={image.title}/>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-80 transition-all duration-300 flex items-center justify-center">
                   <span className="mr-2"> Read More </span> <BsArrowRightCircle/>
                </div>
               </div>
            
            </div>)}
            </div>
        </SwiperSlide>)
     }
    </Swiper>
  </>;
};

export default ProjectSlider;
