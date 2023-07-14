import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  reacticon,
  tripguide,
  threejs,
  nextjs,
  developer,
  fullstack,
  sikkim,
  youtube,
  painting,
  qouta,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI Design',
    icon: creator,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'React.js Developer',
    company_name: 'Freelancer',
    icon: reacticon,
    iconBg: '#383E56',
    date: 'March 2020 - April 2021',
    points: [
      'Developing and maintaining web applications using React.js and other related technologies.',
      'Based on client requirements delivered promising project with good feedback',
      'Delivered project on time.',
    ],
  },
  {
    title: 'Nextjs Developer',
    company_name: 'Starter,NeoMarket',
    icon: nextjs,
    iconBg: '#E6DEDD',
    date: 'Dec 2021 - May 2022',
    points: [
      'Developing and maintaining web applications using Next.js and other related technologies.',
      'Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Worked with a startup which is ecommerce functionality project.',
      'Maintained online products with good feedback.',
    ],
  },
  {
    title: 'Web Developer',
    company_name: 'WeHoursCinema',
    icon: developer,
    iconBg: '#383E56',
    date: 'August 2022 - Jan 2023',
    points: [
      'Maintained a realtime website with shortfilms and videos.',
      'Also maintained a test OTT platform.',
      'Implementing responsive design and ensuring best user performance.',
      'Proivided with good feedback.',
    ],
  },
  {
    title: 'Full stack Developer',
    company_name: 'Remote',
    icon: fullstack,
    iconBg: '#E6DEDD',
    date: 'Feb 2023 - Present',
    points: [
      'Worked with some foreign countries projects.',
      'Collaborating with cross-functional international teams including designers, product managers, and other developers to create high-quality outcome.',
      'Implementing responsive design.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      'Craved for learning new things and submitted the works on time.',
    name: 'Jakir',
    designation: 'CEO',
    company: 'WeHoursCinema',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    name: 'Html-Css-Js',
    description:
      'A project for travel management, tour guides, tourist spots and so on. I used html5, css3 and javascript for this project. This project is fully mobile resposive using media quries from css.',
    tags: [
      {
        name: 'html5',
        color: 'blue-text-gradient',
      },
      {
        name: 'css3',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: sikkim,
    source_code_link: 'https://github.com/Ohi20/HTML_CSS_JS_TRAVEL_WEBSITE',
  },
  {
    name: 'YouTube-Clone',
    description:
      'Web application that resembles to youtube. Fetched data from Rapid API. This project has search functionality, categories functionality, video details and can use it like youtube.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'rapidapi',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: youtube,
    source_code_link: 'https://github.com/Ohi20/Youtube-Lite-Clone-2023',
  },
  {
    name: 'BulkArt',
    description:
      'A project with 29 theme change configuration. Used daisyui, taildwind to create beutiful design. Firebase implementaiton for login with email, password and login with google and protected routes.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'firebase',
        color: 'green-text-gradient',
      },
      {
        name: 'daisyui',
        color: 'pink-text-gradient',
      },
    ],
    image: painting,
    source_code_link: 'https://github.com/Ohi20/Auth-App-With-Firebase',
  },
  {
    name: 'Qouta',
    description:
      'A project includes google authentication for sign in and register. Theme configuration with dark and light mode. Blog page has data fetched from database mongodb. Can add post and delete post. A protected Dashboard page where all the posted blog there.',
    tags: [
      {
        name: 'Nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'NextAuth',
        color: 'green-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: qouta,
    source_code_link: 'https://github.com/Ohi20/Fullstack-nextjs-2023',
  },
];

export { services, technologies, experiences, testimonials, projects };
