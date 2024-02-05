import Image from 'next/image'
import Link from 'next/link'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"

import { FiExternalLink } from "react-icons/fi"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// data
import { PROJECTLIST_DATA } from "../constants"

const ProjectSlider = () => {
  const data = PROJECTLIST_DATA
  return <>
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      spaceBetween={10}
      modules={[Pagination, Navigation]}
    >
      {
        data.slides?.map((item, index) => <SwiperSlide key={index}>
          <div className=" grid gap-3 xl:grid-cols-3 xl:grid-rows-2 grid-cols-2 grid-rows-3 cursor-pointer shadow-indigo-500/40">
            {item.images.map((image, index) => <div key={index} className="after:h-0 overflow-hidden rounded-lg flex justify-center items-center group bg-white">
              <div className="flex justify-center items-center relative overflow-hidden h-full">
                <Image src={image.path} width={500} height={300} alt={image.title} className=" h-full" />
                <Link href={image.src} target="_blank" className="absolute inset-0 h-full w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-0 group-hover:opacity-80 transition-all duration-300 flex items-center justify-center">
                  <span className="mr-2"> Visit page </span> <FiExternalLink />
                </Link>
              </div>
            </div>)}
          </div>
        </SwiperSlide>)
      }
    </Swiper>
  </>;
};

export default ProjectSlider;
