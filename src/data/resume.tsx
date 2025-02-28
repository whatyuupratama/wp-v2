import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Wahyu Pratama',
  initials: 'DV',
  url: 'https://dillion.io',
  location: 'San Francisco, CA',
  locationLink: 'https://www.google.com/maps/place/sanfrancisco',
  description:
    'College Student turned Frontend Developer, Active on GDG Surabaya, TikTok, Linkedin, and Medium.',
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
      badges: [],
      location: 'Remote',
      title: 'Project Manager Intern',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/D560BAQE8Oew5i6T6tA/company-logo_100_100/company-logo_100_100/0/1689662484890/venturo_pro_indonesia_logo?e=1748476800&v=beta&t=JG6gWJ7nfrlaVVRtKVoH67LPzTdjQCasUtOdiCeE-zg',
      start: 'Feb 2025',
      end: 'Jun 2025',
      description:
        'In the company, I manage and optimize various projects involving planning, team coordination, and oversight to ensure objectives are achieved with high efficiency. As a Project Manager, I am responsible for designing and implementing strategies that support the success of each project, identifying risks, and ensuring smooth communication among all involved parties. My focus is on effective resource management, meeting deadlines, and achieving quality standards as set.',
    },
    {
      company: 'Coding Camp powered by DBS Foundation',
      badges: [],
      location: 'Remote',
      title: 'Cohort Machine Learning Engineer',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/D560BAQEONBPsiZnU8w/company-logo_200_200/company-logo_200_200/0/1729482329489?e=1748476800&v=beta&t=lAUP5rf27mTaKdk8fb4D-uT3lP6W9VauxjM3qVJ1jM4',
      start: 'Feb 2025',
      end: 'Jun 2025',
      description:
        'In this program, I enhanced my skills and knowledge in machine learning, from foundational concepts to expert-level techniques, under the guidance of experienced mentors. Throughout the camp, I gained hands-on experience in developing machine learning models, learning key algorithms, and implementing best practices for real-world applications.',
    },
    {
      company: 'PT.Winnicode Garuda Indonesia',
      badges: [],
      location: 'Remote',
      title: 'Fullstack Developer Intern',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/D560BAQHBchDFb5AGrg/company-logo_100_100/company-logo_100_100/0/1728400424449/winnicodegarudateknologi_logo?e=1749081600&v=beta&t=nOSSw5S7Sm7apuP0AOYPrWoEH5e-qfiU0GHhM8f2LJI',
      start: 'Feb 2025',
      end: 'Jun 2025',
      description:
        'At this company, I worked independently on a full-stack project, developing a web job portal. My responsibilities covered the entire process, from planning, design, and frontend development to backend development, implementation, and testing. I utilized various technologies to ensure the application ran smoothly, responsively, and was user-friendly. This project provided me with valuable experience in managing the full software development lifecycle and enhanced my technical skills and problem-solving abilities.',
    },
    {
      company: 'LX International',
      badges: [],
      location: 'Remote',
      title: 'Fullstack Engineer SIB',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/C560BAQHUbIOiyNLOUw/company-logo_100_100/company-logo_100_100/0/1630672897960/lginternationalcorp_logo?e=1749081600&v=beta&t=W34Ls0Z-bnEWb7kG4i4WyARz3U0OGpnVVBIJUp4dCfU',
      start: 'Aug 2024',
      end: 'Jan 2025',
      description:
        'During my Fullstack Independent Study, I developed a book marketplace for students using JavaScript and Flask. I implemented CRUD systems and REST APIs to manage user and product data, integrated MongoDB for large-scale database management, and used Firebase for secure authentication. The application was deployed on Glitch for online accessibility. I also designed a responsive and interactive UI/UX with a strong focus on user experience. Additionally, I successfully managed the project collaboratively, utilizing modern technology stacks.',
    },
    {
      company: 'Institut Teknologi & Bisnis ASIA',
      badges: [],
      location: 'Remote',
      title: 'Frontend Developer Intern',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/C510BAQHL1JozWUI8HA/company-logo_100_100/company-logo_100_100/0/1630630608546/perguruan_tinggi_asia_logo?e=1749081600&v=beta&t=Zh6fVTATb5THemU18w3gtgg_r-STzoMylvxFarrR_Rs',
      start: 'Jul 2024',
      end: 'Nov 2024',
      description:
        'Some of my responsibilities include designing the UI and UX for web applications, developing web applications using Next.js, and ensuring they remain responsive and interactive across different devices. I also implement interactive design elements like animations, transitions, and micro-interactions. I work closely with the team to meet project requirements and provide technical support, handling issues during and after the launch process.',
    },
    {
      company: 'Niagahoster',
      badges: [],
      location: 'Remote',
      title: 'UI/UX Designer Intern',
      logoUrl:
        'https://media.licdn.com/dms/image/v2/C560BAQGtK9FmMI4NDw/company-logo_100_100/company-logo_100_100/0/1630671293643/niagahoster_logo?e=1749081600&v=beta&t=f3JM_iBTW89yURZzQGHJV8XwgNVFqK2O2VwBF_OUiY4',
      start: 'Aug 2023',
      end: 'Sep 2023',
      description:
        'Successfully completed the final assignment, namely solving UX problem suggestions in the payment menu section at the Niagahoste company. Focuses on the case of improving the payment UX of the Niagahoster application which is expected to increase the purchasing insight of Niagahoster users.',
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
    {
      title: 'Vertex Summarizer',
      active: true,
      description:
        'Project Vertex Summarizer is a case conducted during the Generative AI in Action Roadshow event organized by Google Cloud and AI/ML Surabaya. During this event, developers from various backgrounds, including Backend, Android, and Flutter, were given the opportunity to learn and apply the latest Generative AI technologies',
      technologies: ['Flask', 'Docker', 'Vertex AI', 'Google Cloud'],
      links: [
        {
          type: 'Website',
          href: 'https://yt-summarizer-wp-950461813204.us-central1.run.app/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video: '/public/semple.png',
    },
    {
      title: 'Aube Parfum',
      active: true,
      description:
        'Aube Parfum Malang is a perfume company offering high-quality products with long-lasting fragrances. We use the finest ingredients and careful crafting to create elegant and unique perfumes. With a focus on customer satisfaction, Aube Parfum is committed to providing a fulfilling experience and excellent service with every product we offer.',
      technologies: ['React', 'Tailwind', 'Vercel'],
      links: [
        {
          type: 'Website',
          href: 'https://aubeparfum.vercel.app/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '',
      video: '/public/semple.png',
    },
    {
      title: 'Madura 24Jam',
      active: true,
      description:
        'Madura24Jam is a platform that makes it easy for users to order food quickly and conveniently. With a simple checkout feature, users can enjoy a variety of Maduras signature dishes anytime and anywhere, with just a few easy steps. We provide a hassle-free shopping experience, allowing you to focus on enjoying your meal, not the ordering process',
      technologies: ['React', 'Tailwind', 'Firebase'],
      links: [
        {
          type: 'Github',
          href: 'https://github.com/wahyupratamaaa/kemnakercred17',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video: '/public/semple.png',
    },
    {
      title: 'Conseling Institut ASIA',
      active: true,
      description:
        'Providing consulting services to the ASIA Counseling Institute with a focus on assisting them in updating their tech stack, specifically migrating from Laravel to Next.js with TypeScript. We will ensure a smooth transition, improve application performance, and provide modern, efficient solutions that support long-term growth and technical needs of the institution',
      technologies: [
        'NextJs',
        'Tailwind',
        'MySQL',
        'TypeScript',
        'ExpressJs',
        'Axios',
      ],
      links: [
        {
          type: 'Github',
          href: 'https://github.com/wahyupratamaaa/conselingasia ',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image: '',
      video: '/public/semple.png',
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
