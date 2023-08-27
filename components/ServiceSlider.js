import { RxDesktop, RxReader, RxRocket, RxArrowTopRight } from "react-icons/rx"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination } from "swiper/modules"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// data
const ServiceData = [
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const ServiceSlider = () => {
  return <>
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 10
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="h-[200px] sm:h-[320px]"
    >
      {
        ServiceData.map((item, index) => <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] p-5 rounded-lg xl:block flex">
            <div className=" text-3xl w-[50px] xl:w-[auto] h-[50px] flex items-center text-accent rounded-lg">{item.icon}</div>
            <div className="xl:w-full w-[calc(100%-74px)]">
              <h5 className="h5 font-bold mb-2">{item.title}</h5>
              <p>{item.description}</p>
            </div>
            <div className="text-2xl xl:py-5 text-white/30 hover:text-accent transition-all duration-300">
              <RxArrowTopRight/>
            </div>
          </div>
        </SwiperSlide>)
      }
    </Swiper>
  </>;
};

export default ServiceSlider;
