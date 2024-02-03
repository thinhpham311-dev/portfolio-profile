import { useState } from 'react'
import Link from "next/link"

//icons
import { BsDownload, BsGithub } from 'react-icons/bs'

//framer motion
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants';

//components

import { Button } from '../../components/Button'

//data
import { RESUMELIST_DATA } from '../../constants'


const About = () => {
  const [index, setIndex] = useState(0)
  const data = RESUMELIST_DATA

  return <div className="text-center xl:text-left py-0 xl:py-20 h-full relative">

    <div className="container h-full mx-auto px-5 flex flex-col items-center xl:flex-row xl:gap-x-10 gap-x-4">
      <div className="flex flex-col justify-center xl:flex-1 h-[300px]">
        <motion.h1 className="h1 xl:text-left" variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden">About <span className="text-accent">me</span></motion.h1>
        <motion.p className="xl:text-left w-full xl:max-w-[84%] xl:mb-8 mb-5" variants={fadeIn('down', 0.3)} initial="hidden" animate="show" exit="hidden"> I am a Web Developer with my experience developing the website. I can use my knowledge and skills to increase aesthetics and increase user experience.  It's also an opportunity to enhance my knowledge by engaging in new challenges. </motion.p>
        <motion.form method="get" action="/PhamTriThinh-0702895474-frontendwebdeveloper.pdf" className="xl:justify-start gap-x-5 justify-center flex" variants={fadeIn('down', 0.4)} initial="hidden" animate="show" exit="hidden">
          <Button type="submit" styles=" xl:py-2 xl:px-3 py-1 px-2 bg-transparent border-accent border-2 hover:bg-accent rounded-lg"><BsDownload className="mr-3" />Download CV</Button>
          <Link href="https://github.com/thinhpham311-dev" target="_blank">
            <Button type="button" styles=" xl:py-2 xl:px-3 py-1 px-2 bg-accent border-accent border-2 hover:bg-accent/50 hover:border-accent/50 hover:border-2 rounded-lg"><BsGithub className="mr-3" />Github</Button>
          </Link>
        </motion.form>
      </div>

      <div className='flex flex-col w-full xl:max-w-[48%] flex-1'>
        <motion.div variants={fadeIn('down', 0.5)} initial="hidden" animate="show" exit="hidden" className="  text-white  h-[50px] mb-3 flex items-center xl:justify-start justify-center xl:gap-x-8 lg:gap-x-6 gap-x-4">
          {data.map((item, indexItem) => <div key={indexItem} onClick={() => setIndex(indexItem)} className={`${index === indexItem && "text-accent after:!bg-accent after:w-full after:transition-all after:duration-300"} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}>{item.title}</div>)}
        </motion.div>
        <motion.div variants={fadeIn('down', 0.6)} initial="hidden" animate="show" exit="hidden" className='h-[calc(100dvh-550px)] overflow-y-auto'>
          <div className=' flex flex-col xl:gap-y-4 gap-y-2'>
            {data[index].info.map((item, indexItem) => <div key={indexItem} className='mx-auto xl:mx-0 flex-1 flex-col md:flex-row max-w-max text-white/60'>
              <h3 className="capitalize mb-2">{item.title}</h3>
              <div className='text-white'>{item.stage}</div>
              <div className='flex flex-wrap xl:justify-start justify-center gap-x-4'>
                {
                  item.icons?.map((icon, indexIcon) => <div key={indexIcon} className='text-2xl text-white transition-all p-2'>{icon}</div>)
                }
              </div>
            </div>)}
          </div>
        </motion.div>
      </div>
    </div>
  </div>;
};

export default About;
