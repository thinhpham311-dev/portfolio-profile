import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
} from 'react-icons/hi2';
import { FaHtml5, FaCss3, FaJs, FaReact, FaWordpress, FaBootstrap, FaPhp } from 'react-icons/fa'
import { SiNextdotjs, SiFramer, SiTailwindcss } from 'react-icons/si'
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
            title: "Framer Motion",
            icon: <SiFramer />,
          },
          {
            title: "Tailwind CSS",
            icon: <SiTailwindcss />,
          }
        ]
      }
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'Front End Developer - TechVSI company',
        stage: '01/2023 - 12/2023',
      },
      {
        title: 'Web Developer - Antking Company',
        stage: '02/2022 - 12/2022',
      },
      {
        title: 'Front end Developer - PAP Technology company',
        stage: '06/2020 - 12/2021',
      },
    ]
  }, {
    title: 'certificate',
    info: [
      {
        title: 'SoftWare Engineering Certificate',
        stage: '05/2017 - 09/2020',
      },
      {
        title: 'B English Certificate',
        stage: '03/2019',
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
      companyName: 'TechVSI Company',
      companyKey: 'techvsi-company',
      images: [
        {
          title: 'TNB AURA',
          path: '/projects/project-TNB_Aura.png',
          src: 'https://tnbaura.vc',
          companyImage: '/logo/logo-techvsi.webp',
        },
        {
          title: 'Not So Little Fair',
          path: '/projects/project-Not_So_Little_Fair.png',
          src: 'https://rsvp.notsolittlefair.com',
          companyImage: '/logo/logo-techvsi.webp',
        },
        {
          title: 'NTUC Conversation',
          path: '/projects/project-NTUC_Conversation.png',
          src: "https://conversations.ntuc.sg",
          companyImage: '/logo/logo-techvsi.webp',
        },
        {
          title: 'Golf Live',
          path: '/projects/project-Golf_Live.png',
          src: "https://www.igx360.com/vi-VN",
          companyImage: '/logo/logo-techvsi.webp',
        },
        {
          title: 'Child Ed',
          path: '/projects/project-Child_Ed.png',
          src: "https://www.childed.com.sg/",
          companyImage: '/logo/logo-techvsi.webp',
        },
        {
          title: 'Sony ZV Story',
          path: '/projects/project-Sony_ZV_Story.png',
          src: "https://alphauniverse.sony-asia.com/microsite/your-zv-story",
          companyImage: '/logo/logo-techvsi.webp',
        },
      ],
    },
    {
      companyName: 'Antking Company',
      companyKey: 'antking-company',
      images: [
        {
          title: 'Maxwell Reserve',
          path: '/projects/project-Maxwell_Reserve.png',
          src: "https://maxwellreserve.com",
          companyImage: '/logo/logo-antking.webp',
        },
        {
          title: 'Officers Mess Polo Bar',
          path: '/projects/project-Officer_Polo_Bar.png',
          src: "https://officersmesspolobar.sg",
          companyImage: '/logo/logo-antking.webp',
        },
        {
          title: 'Shikar',
          path: '/projects/project-Shikar.png',
          src: "https://shikar.sg",
          companyImage: '/logo/logo-antking.webp',
        },
        {
          title: 'Chess DB',
          path: '/projects/project-Chess_DB.png',
          src: "https://chessdb.vn",
          companyImage: '/logo/logo-antking.webp',
        },
        {
          title: 'Sidekick Find Expert',
          path: '/projects/project-Sidekick.png',
          src: "https://play.google.com/store/apps/details?id=com.sidekick.android",
          companyImage: '/logo/logo-antking.webp',
        },

      ],
    },
    {
      companyName: 'Paptech Company',
      companyKey: 'paptech-company',
      images: [
        {
          title: 'Bado Catalog',
          path: '/projects/project-Bado_Catalog.png',
          src: "https://bado.vn/",
          companyImage: '/logo/logo-paptech.webp',
        },
      ],
    },
    {
      companyName: 'Personal Project',
      companyKey: 'personal-project',
      images: [
        {
          title: 'title',
          path: '/projects/project-Portfolio_Profile.png',
          src: "https://phamtrithinh-0702895474-fewebdeveloper.vercel.app",
        },
        {
          title: 'title',
          path: '/projects/project-Magma_Clone.png',
          src: "https://catalog-business.vercel.app",
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
        {
          title: 'Ecommerce Test Local',
          path: '/projects/project-Ecommerce-Local.png',
          src: "https://ecommerce-test-vert.vercel.app",
        },
        {
          title: 'Market Place',
          path: '/projects/project-Market_Place.png',
          src: "https://market-place-web-gilt.vercel.app/",
        },
      ],
    },
  ],
};
