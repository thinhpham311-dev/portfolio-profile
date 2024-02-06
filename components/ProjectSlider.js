import Image from 'next/image'
import Link from 'next/link'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper/modules"

import { FiExternalLink } from "react-icons/fi"
import { FaUserClock } from "react-icons/fa"
// Import Swiper styles

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
          <div className=" grid xl:gap-3 gap-1 xl:grid-cols-3 xl:grid-rows-2 grid-cols-1 grid-rows-2 cursor-pointer shadow-indigo-500/40">
            {item.images.map((image, index) => <div key={index} className="after:h-0 overflow-hidden xl:rounded-lg flex justify-center items-center group bg-black">
              <div className="flex justify-center items-center relative overflow-hidden xl:h-full xl:w-full h-[11dvh]">
                <div className="absolute top-2 right-2 bg-black shadow-lg  p-1 h-[40px] w-[40px] flex items-center justify-center rounded-full z-50">
                  <a href={image?.companyLink} target="_blank">
                    {image?.companyImage ? <Image src={image?.companyImage} width={30} height={30} alt="" /> : <FaUserClock />}
                  </a>
                </div>
                <Image src={image.path} width={500} height={300} alt={image.title} className="object-cover object-left-top h-full" />
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
