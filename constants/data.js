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
        stage: '2022/03 - 2022/08',
      },
      {
        title: 'Front end Web Developer - TechVSI company',
        stage: '2022/11 - 2023/08',
      },
    ]
  },{
    title: 'certificate',
    info:[
      {
        title: 'Front end Web Developer - PAP Technology company',
        stage: '2020/06 - 2022/02',
      },
      {
        title: 'Front end Web Developer - Antking Singapore Company',
        stage: '2022/03 - 2022/08',
      },
      {
        title: 'Front end Web Developer - TechVSI company',
        stage: '2022/11 - 2023/08',
      },
    ]
  },
  {
    title: 'Soft Skill',
    info:[
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
          path: '/thumb1.jpg',
          src: 'https://tnbaura.vc'
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          src: 'https://rsvp.notsolittlefair.com'
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          src: "https://conversations.ntuc.sg"
        },
        {
          title: 'title',
          path: '/thumb4.jpg',
          src: "https://www.igx360.com/vi-VN"
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          src: "https://bado.vn"
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          src: "https://maxwellreserve.com"
        },
        {
          title: 'title',
          path: '/thumb2.jpg',
          src: "https://officersmesspolobar.sg"
        },
        {
          title: 'title',
          path: '/thumb3.jpg',
          src: "https://shikar.sg"
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: '/thumb4.jpg',
          src: "https://pttmovies.vercel.app"
        },
        {
          title: 'title',
          path: '/thumb1.jpg',
          src: "https://phamtrithinh-0702895474-fewebdeveloper.vercel.app"
        }
      ],
    },
  ],
};