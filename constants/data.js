import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiEnvelope,
} from 'react-icons/hi2';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaBootstrap, FaPhp } from 'react-icons/fa'
import { SiNextdotjs, SiFramer, SiAntdesign, SiSvelte, SiGatsby, SiMysql, SiPostgresql, SiTailwindcss, SiLaravel } from 'react-icons/si'
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
          {
            title: "Html 5",
            icon: <FaHtml5 />,
          },
          {
            title: "CSS 3",
            icon: < FaCss3 />,
          },
          {
            title: "Javascript",
            icon: <FaJs />,
          },
          {
            title: "PHP",
            icon: <FaPhp />,
          }
        ]
      },
      {
        title: 'Framework',
        icons: [
          {
            title: "React JS",
            icon: <FaReact />,
          },
          {
            title: "Next JS",
            icon: <SiNextdotjs />,
          },
          {
            title: "Wordpress",
            icon: <FaWordpress />,
          },
          {
            title: "Laravel",
            icon: <SiLaravel />,
          },
          {
            title: "Svelte",
            icon: <SiSvelte />,
          },
          {
            title: "Gatsby",
            icon: <SiGatsby />,
          }
        ]
      },
      {
        title: 'UI',
        icons: [
          {
            title: "Bootstrap",
            icon: <FaBootstrap />,
          },
          {
            title: "Html 5",
            icon: <SiAntdesign />,
          },
          {
            title: "Framer Motion",
            icon: <SiFramer />,
          },
          {
            title: "Tailwind CSS",
            icon: <SiTailwindcss />,
          }
        ]
      },
      {
        title: 'Database',
        icons: [
          {
            title: "MySQL",
            icon: < SiMysql />,
          },
          {
            title: "PostgreSQL",
            icon: <SiPostgresql />,
          }
        ],
      }
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Front end Web Developer - PAP Technology company',
        stage: '2020/06 - 2021/12',
      },
      {
        title: 'Web Developer - Antking Singapore Company',
        stage: '2022/03 - 2022/06',
      },
      {
        title: 'Front End Developer - TechVSI company',
        stage: '2023/01 - 2023/07',
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
          title: 'TNB AURA',
          path: '/projects/project-TNB_Aura.png',
          src: 'https://tnbaura.vc',
          companyImage: '/logo/logo-techvsi.webp'
        },
        {
          title: 'Not So Little Fair',
          path: '/projects/project-Not_So_Little_Fair.png',
          src: 'https://rsvp.notsolittlefair.com',
          companyImage: '/logo/logo-techvsi.webp'
        },
        {
          title: 'NTUC Conversation',
          path: '/projects/project-NTUC_Conversation.png',
          src: "https://conversations.ntuc.sg",
          companyImage: '/logo/logo-techvsi.webp'
        },
        {
          title: 'Golf Live',
          path: '/projects/project-Golf_Live.png',
          src: "https://www.igx360.com/vi-VN",
          companyImage: '/logo/logo-techvsi.webp'
        },
        {
          title: 'Child Ed',
          path: '/projects/project-Child_Ed.png',
          src: "https://www.childed.com.sg/",
          companyImage: '/logo/logo-techvsi.webp'
        },
        {
          title: 'Sony ZV Story',
          path: '/projects/project-Sony_ZV_Story.png',
          src: "https://alphauniverse.sony-asia.com/microsite/your-zv-story",
          companyImage: '/logo/logo-techvsi.webp'
        },
      ],
    },
    {
      images: [
        {
          title: 'Maxwell Reserve',
          path: '/projects/project-Maxwell_Reserve.png',
          src: "https://maxwellreserve.com",
          companyImage: '/logo/logo-antking.webp'
        },
        {
          title: 'Officers Mess Polo Bar',
          path: '/projects/project-Officer_Polo_Bar.png',
          src: "https://officersmesspolobar.sg",
          companyImage: '/logo/logo-antking.webp'
        },
        {
          title: 'Shikar',
          path: '/projects/project-Shikar.png',
          src: "https://shikar.sg",
          companyImage: '/logo/logo-antking.webp'
        },

        {
          title: 'Chess DB',
          path: '/projects/project-Chess_DB.png',
          src: "https://chessdb.vn",
          companyImage: '/logo/logo-antking.webp'
        },
        {
          title: 'Sidekick Find Expert',
          path: '/projects/project-Sidekick.png',
          src: "https://play.google.com/store/apps/details?id=com.sidekick.android",
          companyImage: '/logo/logo-antking.webp'
        },
        {
          title: 'Bado Catalog',
          path: '/projects/project-Bado_Catalog.png',
          src: "https://bado.vn/",
          companyImage: '/logo/logo-paptech.webp',
        },

      ],
    },
    ,
    {
      images: [
        {
          title: 'title',
          path: '/projects/project-Portfolio_Profile.png',
          src: "https://phamtrithinh-0702895474-fewebdeveloper.vercel.app",
        },
        {
          title: 'title',
          path: '/projects/project-Magma_Clone.png',
          src: "https://catalog-business.vercel.app/",
        },
        {
          title: 'title',
          path: '/projects/project-ChatGPT_Clone.png',
          src: "https://chat-gpt-thinhpham.vercel.app",
        },
        {
          title: 'PTT Movies',
          path: '/projects/project-PTT_Movies.png',
          src: "https://pttmovies.vercel.app",
        },
      ],
    },
  ],
};