import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket } from "react-icons/rx"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Scrollbar } from "swiper/modules"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

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
          spaceBetween: 30
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      modules={[FreeMode, Pagination, Scrollbar]}
      className="h-[200px] sm:h-[260px]"
    >
      {
        ServiceData.map((item, index) => <SwiperSlide key={index}>
          <div className="flex gap-x-5">
            <div className="bg-white h-[50px] w-[50px] text-2xl text-accent flex items-center justify-center rounded-lg">{item.icon}</div>
            <div className="w-[calc(100%-50px)]">
              <strong >{item.title}</strong>
              <p>{item.description}</p>
            </div>
          </div>
        </SwiperSlide>)
      }
    </Swiper>
  </>;
};

export default ServiceSlider;
