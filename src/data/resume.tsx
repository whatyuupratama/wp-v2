import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Wahyu',
  initials: 'DV',
  url: 'https://dillion.io',
  location: 'San Francisco, CA',
  locationLink: 'https://www.google.com/maps/place/sanfrancisco',
  description: 'College Student turned Frontend Developer, Active on TikTok.',
  summary:
    'I am interested in spending 10 hours every day to study from June 12, 2024 until now, Interested in exploring different design styles and following design and technology trends for software development.',
  avatarUrl: '/met.jpeg',
  skills: [
    'JavaScript',
    'React',
    'NextJs',
    'Typescript',
    'NodeJs',
    'Firebase',
    'Mongodb',
    'Flask',
    'Figma',
    'Ajax',
    'Strapi',
    'REST API',
    'Tailwind',
    'Shadcn UI',
    'Zustand',
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blog', icon: NotebookIcon, label: 'Blog' },
  ],
  contact: {
    email: 'hello@example.com',
    tel: '+123456789',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/wahyupratamaaa',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/wahyupratamaa',
        icon: Icons.linkedin,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: 'VENTURO • Professional Programmer',
      href: 'https://venturo.id/index.html',
      badges: [],
      location: 'Remote',
      title: 'Project Manager Intern',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/D560BAQE8Oew5i6T6tA/company-logo_100_100/company-logo_100_100/0/1689662484890/venturo_pro_indonesia_logo?e=1748476800&v=beta&t=JG6gWJ7nfrlaVVRtKVoH67LPzTdjQCasUtOdiCeE-zg',
      start: 'May 2021',
      end: 'Oct 2022',
      description:
        'Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.',
    },
    {
      company: 'Coding Camp powered by DBS Foundation',
      badges: [],
      href: 'https://shopify.com',
      location: 'Remote',
      title: 'Cohort Machine Learning Engineer',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/D560BAQEONBPsiZnU8w/company-logo_200_200/company-logo_200_200/0/1729482329489?e=1748476800&v=beta&t=lAUP5rf27mTaKdk8fb4D-uT3lP6W9VauxjM3qVJ1jM4',
      start: 'January 2021',
      end: 'April 2021',
      description:
        'Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.',
    },
  ],
  education: [
    {
      school: 'Universitas Negeri Malang',
      href: 'https://um.ac.id/',
      degree: "Bachelor's Degree of Computer Science",
      logoUrl:
        'https://media.licdn.com/dms/image/v2/C510BAQGIM3XtyiSK9Q/company-logo_100_100/company-logo_100_100/0/1630596771951/universitas_negeri_malang_logo?e=1748476800&v=beta&t=0VqhY2cs_XYS7uJ9RCCsYJ0ACEq-F4CvYnhlCmvxzGo',
      start: '2024',
      end: '2024',
    },
    {
      school: 'Institut Teknologi & Bisnis ASIA',
      href: 'https://ftd.asia.ac.id/',
      degree: "Bachelor's Degree of Computer Science ",
      logoUrl:
        'https://media.licdn.com/dms/image/v2/C510BAQHL1JozWUI8HA/company-logo_100_100/company-logo_100_100/0/1630630608546/perguruan_tinggi_asia_logo?e=1748476800&v=beta&t=phtpwBLDY06t9CK7RLF41xULpOHTTfgJSyLFCKFBGiU',
      start: '2022',
      end: '2026',
    },
  ],
  projects: [
    {
      title: 'EduBooks',
      // href: 'https://chatcollect.com',
      dates: 'Nov 2024 - Des 2024',
      active: true,
      description:
        'As part of the final Capstone Project for MSIB Batch 7, EduBooks emerges as an innovative platform that simplifies finding and purchasing quality books, including textbooks, academic references, and self-development. Additionally, it fosters an active reader community to share reviews, recommendations, and promote literacy education.',
      technologies: ['JavaScript', 'Flask', 'Boostrap', 'Firebase', 'Railway'],
      links: [
        {
          type: 'Website',
          href: 'https://bookmsibv1.up.railway.app/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video: '/semple.png',
    },
  ],
  hackathons: [
    {
      title: 'JavaScript Intermediate Certification',
      dates: 'Jan 2025',
      location: 'Sololern',
      image:
        'https://media.licdn.com/dms/image/v2/C4D0BAQHER-dvTqh2tA/company-logo_100_100/company-logo_100_100/0/1630576160230/sololearn_inc__logo?e=1749081600&v=beta&t=IJRKT71SrjO2cn8SaBCMgf2rODddyLt_4uBgwtjfXEQ',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Streamer Source',
          href: 'https://github.com/justinmichaud/htn2017',
        },
      ],
    },
    {
      title: 'Sertifikasi Kompetensi Fullstack Developer',
      dates: ' Des 2024',
      location: 'Kementerian Ketenagakerjaan Republik Indonesia',
      image:
        'https://media.licdn.com/dms/image/v2/C510BAQEXLaR8drbv_g/company-logo_100_100/company-logo_100_100/0/1630627733931?e=1749081600&v=beta&t=Pz88yv2kbRD5_4Zee6CykxEpNNBpGEW5R72fqHQbAD8',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Streamer Source',
          href: 'https://github.com/justinmichaud/htn2017',
        },
      ],
    },
    {
      title: 'Sertifikasi Hak Kekayaan Intelektual',
      dates: 'Mei 2024',
      location: 'Kementrian Hukum dan Hak Asasi Manusia Republik Indonesia',
      image:
        'https://media.licdn.com/dms/image/v2/C560BAQFS_aO_wNb0zA/company-logo_100_100/company-logo_100_100/0/1630648723948?e=1749081600&v=beta&t=pLKvako-CgZa2aEgjIk6Y3HE59OqWTBydIm2Y40XEEs',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Streamer Source',
          href: 'https://github.com/justinmichaud/htn2017',
        },
      ],
    },
    {
      title: 'Fullstack Competency Certification',
      dates: 'Mei 2024',
      location: 'Lx Internasional',
      image:
        'https://media.licdn.com/dms/image/v2/C560BAQHUbIOiyNLOUw/company-logo_100_100/company-logo_100_100/0/1630672897960/lginternationalcorp_logo?e=1749081600&v=beta&t=W34Ls0Z-bnEWb7kG4i4WyARz3U0OGpnVVBIJUp4dCfU',
      mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg',
      links: [
        {
          title: 'Streamer Source',
          href: 'https://github.com/justinmichaud/htn2017',
        },
      ],
    },
  ],
} as const;
