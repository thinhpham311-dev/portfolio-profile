import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaBootstrap, FaPhp } from 'react-icons/fa'
import { SiNextdotjs, SiFramer, SiAntdesign, SiSvelte, SiGatsby, SiMysql, SiPostgresql, SiTailwindcss } from 'react-icons/si'
import Circles from '../../components/Circles';
import { useState } from 'react'

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
          <FaPhp/>
        ],
      },
      {
        title: 'Framework',
        icons: [
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
          <FaBootstrap/>,
          <SiAntdesign/>,
          <SiSvelte/>,
          <SiGatsby/>,
          <SiTailwindcss/>
        ],
      },
      {
        title: 'Database',
        icons: [
          <SiMysql/>,
          <SiPostgresql/>
        ],
      }
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0)

  return <div className="text-center xl:text-left xl:py-32 py-0 h-full">
    <div className="container mx-auto h-full flex flex-col xl:items-start items-center xl:flex-row xl:gap-x-8 gap-x-4">
      <div className="w-full xl:w-6/12 px-5 h-[270px]">
        <h1 className="h1 xl:text-left">I'm <br/> <span className="text-accent">Web Developer</span></h1>
        <p className="xl:text-left"> I'm a Web Developer with my experience developing the website. I can use my knowledge and skills to increase aesthetics and increase user experience. </p>
      </div>

      <div className='w-full xl:w-6/12 px-5 xl:px-0 xl:h-full h-[calc(100%-280px)]'>
        <div className=" h-[50px] mb-3 flex items-center xl:justify-start justify-center xl:gap-x-8 md:gap-x-4 lg:gap-x-6 gap-x-2">
          {aboutData.map((item, indexItem) => <div key={indexItem} onClick={() => setIndex(indexItem)} className={`${index === indexItem && "text-accent after:!bg-accent after:w-full after:transition-all after:duration-300"} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}>{item.title}</div>)}
        </div>
        <div className='h-[calc(100%-70px)] overflow-y-auto overflow-x-hidden'>
          {aboutData[index].info.map((item, indexItem) => <div key={indexItem}>
            <div className=' mx-auto xl:mx-0 flex-1 flex-col md:flex-row max-w-max gap-x-2 xl:px-0 xl:py-3 p-5'>
              <h3 className="capitalize mb-2 xl:text-xl font-bold">{item.title}</h3>
              <div>{item.stage}</div>
              <div className='flex flex-wrap xl:justify-start justify-center gap-x-4'>
                {
                  item.icons?.map((icon, indexIcon) => <div key={indexIcon} className='text-2xl transition-all'>{icon}</div>)
                }
              </div>
            </div>
          </div>)}
          </div>
        </div>
      </div>
    </div>;
};

export default About;
