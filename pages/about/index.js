import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaBootstrap, FaPhp } from 'react-icons/fa'
import { SiNextdotjs, SiFramer, SiAntdesign, SiSvelte, SiGatsby, SiMysql, SiPostgresql, SiTailwindcss } from 'react-icons/si'
import { useState } from 'react'
import Circles from './../../components/Circles';

import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programing Language',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaPhp />
        ],
      },
      {
        title: 'Framework',
        icons: [
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
          <FaBootstrap />,
          <SiAntdesign />,
          <SiSvelte />,
          <SiGatsby />,
          <SiTailwindcss />
        ],
      },
      {
        title: 'Database',
        icons: [
          <SiMysql />,
          <SiPostgresql />
        ],
      }
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Front End Developer - PAP Technology company',
        stage: '2020/06 - 2022/02',
      },
      {
        title: 'Web Developer - Antking Singapore Company',
        stage: '2022/03 - 2022/08',
      },
      {
        title: 'Front End Developer - TechVSI company',
        stage: '2022/11 - 2023/08',
      },
    ],
  },{
    title: 'certificate',
    info:[
      {
        title: 'B English certificate',
        stage: '2019'
      }
    ]
  }
];

const About = () => {
  const [index, setIndex] = useState(0)

  return <div className="text-center xl:text-left xl:pt-32 py-0 h-full relative">
        <Circles/>
    <div className="container mx-auto px-5 h-full flex flex-col xl:items-start items-center xl:flex-row xl:gap-x-10 gap-x-4">
      <div className="flex flex-col justify-center h-[200px]">
        <h1 className="h1 xl:text-left">I'm <br /> <span className="text-accent">Web Developer</span></h1>
        <p className="xl:text-left w-full xl:max-w-[84%]"> I'm a Web Developer with my experience developing the website. I can use my knowledge and skills to increase aesthetics and increase user experience. </p>
      </div>

      <div className='flex flex-col w-full xl:max-w-[48%] h-[calc(100%-200px)]'>
        <div className="  text-white  h-[50px] mb-3 flex items-center xl:justify-start justify-center xl:gap-x-8 lg:gap-x-6 gap-x-4">
          {aboutData.map((item, indexItem) => <div key={indexItem} onClick={() => setIndex(indexItem)} className={`${index === indexItem && "text-accent after:!bg-accent after:w-full after:transition-all after:duration-300"} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}>{item.title}</div>)}
        </div>
        <div className='h-[calc(100%-60px)] overflow-y-auto'>
          <div className=' flex flex-col gap-y-2 xl:gap-y-4'>
            {aboutData[index].info.map((item, indexItem) => <div key={indexItem} className='mx-auto xl:mx-0 flex-1 flex-col md:flex-row max-w-max gap-x-2 text-white/60'>
              <h3 className="capitalize mb-2">{item.title}</h3>
              <div className='text-white'>{item.stage}</div>
              <div className='flex flex-wrap xl:justify-start justify-center gap-x-4'>
                {
                  item.icons?.map((icon, indexIcon) => <div key={indexIcon} className='text-2xl text-white transition-all p-2 xl:p-0'>{icon}</div>)
                }
              </div>
            </div>)}
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default About;
