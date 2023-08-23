import { useState } from 'react'
import Avatar from '../../components/Avatar';
import { FaFigma, FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa'
import { SiAdobexd, SiAdobephotoshop, SiNextdotjs, SiFramer, FaWordpress } from 'react-icons/si'
import parse from 'html-react-parser';

//  data
const aboutData = [
  {
    title: 'about me',
    info: [
      {
        introduce: `I'm <br/><span class="text-accent">Web Developer</span>`,
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting",
        image: {
          w: 400,
          h: 550,
          link: '/avatar.png'
        }
      },
    ],
  },
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
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
  return <div className="z-10 h-full py-12">
    <div className="container mx-auto h-full">
      <div className="flex gap-x-4 xl:gap-x-8 xl:justify-center justify-between z-10 xl:mx-0 mx-[10px]">
        {
          aboutData.map((item, indexItem) => <div key={indexItem} onClick={() => setIndex(indexItem)} className={`${indexItem === index && "after:!bg-accent after:w-full after:transition-all after:duration-300 text-accent"} cursor-pointer relative capitalize after:absolute after:left-0 after:-bottom-[10px] after:h-[2px] after:w-8  after:bg-white`}>{item.title}</div>)
        }
      </div>
      <div className=" xl:my-[50px] z-10 h-[calc(100%-50px)] xl:overflow-hidden overflow-y-auto">
        {
          aboutData[index].info.map((item, indexItem) => <div key={indexItem} className="flex flex-wrap gap-5">
            <div className="xl:w-5/12 w-full">
              {
                item?.image && <div className="flex justify-center items-center">
                  <Avatar source={item?.image?.link} _w={item?.image?.w} _h={item?.image?.h} />
                </div>
              }
            </div>
            <div className="xl:w-6/12 w-full">
              {item?.introduce && <h1 className="h1">{parse(item?.introduce)}</h1>}
              {item?.content && <p>{item?.content}</p>}
              {item?.title && <p>{item?.title}</p>}
            </div>
          </div>)
        }
      </div>
    </div>
  </div>
};

export default About;
