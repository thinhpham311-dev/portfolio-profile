import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from 'react-icons/hi2';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaBootstrap, FaPhp } from 'react-icons/fa'
import { SiNextdotjs, SiFramer, SiAntdesign, SiSvelte, SiGatsby, SiMysql, SiPostgresql, SiTailwindcss } from 'react-icons/si'
import { RxDesktop, RxReader, RxRocket } from "react-icons/rx"

// nav data
export const NAVBAR_DATA = [
  { name: 'home', path: '/', icon: <HiHome /> },
  { name: 'about', path: '/about', icon: <HiUser /> },
  // { name: 'service', path: '/service', icon: <HiRectangleGroup /> },
  { name: 'project', path: '/project', icon: <HiViewColumns /> },
  {
    name: 'contact',
    path: '/contact',
    icon: <HiEnvelope />,
  },
];

export const RESUMELIST_DATA = [
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
          <FaWordpress />,
          <SiSvelte />,
          <SiGatsby />,
        ],
      },
      {
        title: 'UI',
        icons: [
          <FaBootstrap />,
          <SiAntdesign />,
          <SiFramer />,
          <SiTailwindcss />
        ]
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
        title: 'Front end Web Developer - PAP Technology company',
        stage: '2020/06 - 2022/02',
      },
      {
        title: 'Front end Web Developer - Antking Singapore Company',
        stage: '2022/03 - 2022/12',
      },
      {
        title: 'Front end Web Developer - TechVSI company',
        stage: '2022/11 - 2023/11',
      },
    ]
  }, {
    title: 'certificate',
    info: [
      {
        title: 'SoftWare Engineering Certificate',
        stage: '2017/05 - 2020/09',
      },
      {
        title: 'B English Certificate',
        stage: '2019/03',
      }
    ]
  },
  {
    title: 'Soft Skill',
    info: [
      {
        title: 'Able to work alone and in groups',
      },
      {
        title: 'Analysis and problem solving',
      },
      {
        title: 'Sociable and friendly',
      },
      {
        title: 'Honest and enthusiasm in work'
      }
    ]
  }
];

export const SERVICELIST_DATA = [
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
  }
];

export const PROJECTLIST_DATA = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: '/project-01.png',
          src: 'https://tnbaura.vc'
        },
        {
          title: 'title',
          path: '/project-2.png',
          src: 'https://rsvp.notsolittlefair.com'
        },
        {
          title: 'title',
          path: '/project-3.png',
          src: "https://conversations.ntuc.sg"
        },
        {
          title: 'title',
          path: '/project-4.png',
          src: "https://www.igx360.com/vi-VN"
        },
        {
          title: 'title',
          path: '/project-5.png',
          src: "https://bado.vn"
        },
        {
          title: 'title',
          path: '/project-6.png',
          src: "https://maxwellreserve.com"
        },
      ],
    },
    {
      images: [

        {
          title: 'title',
          path: '/project-7.png',
          src: "https://officersmesspolobar.sg"
        },
        {
          title: 'title',
          path: '/project-8.png',
          src: "https://shikar.sg"
        },
        {
          title: 'title',
          path: '/project-9.png',
          src: "https://pttmovies.vercel.app"
        },
        {
          title: 'title',
          path: '/project-10.png',
          src: "https://phamtrithinh-0702895474-fewebdeveloper.vercel.app"
        },
        {
          title: 'title',
          path: '/project-12.png',
          src: "https://portfolio-animation-zeta.vercel.app/"
        },
        {
          title: 'title',
          path: '/project-13.png',
          src: "https://catalog-business.vercel.app/"
        }
      ],
    },
  ],
};