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
  starbucks,
  tesla,
  shopify,
  threejs,
  speraxDapp,
  chaquen,
  magically,
  defimine,
  coinforge,
  bullX,
  six30Labs,
  speraxIcon,
  ritewind,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "MERN Stack Developer",
    icon: backend,
  },
  {
    title: "Next.js Specialist",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Sperax DAO",
    icon: speraxIcon,
    iconBg: "#E6DEDD",
    date: "2023 - Present",
    points: [
      "Developed and maintained the Sperax USD (USDs) platform - an automated, yield-bearing stablecoin with PWA support.",
      "Integrated Web3 wallet connections to streamline DeFi transactions and improve user onboarding.",
      "Optimized performance of React.js+ Angular frontend, enhancing load time and user experience and then deployed the React Native App for both iOS and Android.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Ritewind LLP",
    icon: ritewind,
    iconBg: "#E6DEDD",
    date: "2022 - 2023",
    points: [
      "Contributed to Magically (formerly AlphaSharks), a Web3 NFT trading platform with 10K+ daily users.",
      "Built and deployed a Chrome extension for NFT analytics and wallet integration.",
      "Led frontend development of Chafixi Hybrid App using React Native and Next.js components.",
    ],
  },
  {
    title: "Software Development Engineer I",
    company_name: "Six30 Labs",
    icon: six30Labs,
    iconBg: "#E6DEDD",
    date: "2021 - 2022",
    points: [
      "Developed Diana Art Gallery, a Next.js-based e-commerce platform for digital art sales.",
      "Built a DAO and Digital Transformation Dashboard with interactive chart and data visualization.",
      "Implemented responsive design and dashboard components to improve usability and client reporting.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Saksham delivered exceptional work on our DeFi platform. His expertise in React and Web3 integration was impressive.",
    name: "S**** C***",
    designation: "P****** M******",
    company: "Sperax DAO",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Working with Saksham was a game-changer for our NFT platform. His attention to detail and performance optimization skills are outstanding.",
    name: "M*** R*********",
    designation: "C**",
    company: "Ritewind LLP",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Saksham's work on our dashboard revolutionized how we present data to clients. Highly recommended for any frontend project.",
    name: "E*** W*****",
    designation: "C**",
    company: "Six30 Labs",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Sperax USD (USDs) Platform",
    description:
      "DeFi stablecoin platform with wallet integration and yield generation. Tools: React, Next.js, TypeScript, Wagmi, Ethers.js, Viem, Redux, Tailwind.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "web3",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: speraxDapp,
    source_code_link: "https://www.sperax.io/",
  },
  {
    name: "Chaquen - Blockchain Fantasy Sports",
    description:
      "Polygon-based blockchain fantasy app with real-time match data and later developer native app with React Native. Tools: Next.js, TypeScript, Firebase, Viem, Wagmi, Ethers.js, MUI, Redux.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "blockchain",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: chaquen,
    source_code_link: "https://chaquen.io/",
  },
  {
    name: "Magically (AlphaSharks)",
    description:
      "NFT trading tool with wallet tracking and Chrome extension support. Tools: React, TypeScript, Wagmi, Viem, Ant Design, Redux.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nft",
        color: "green-text-gradient",
      },
      {
        name: "chrome-ext",
        color: "pink-text-gradient",
      },
    ],
    image: magically,
    source_code_link: "https://app.mintify.com/",
  },
  {
    name: "CoinForge (On chain Referral system)",
    description:
      "A token launchpad platform with wallet integration, contract interaction, and real-time UX. Tools: React, Next.js, TypeScript, Wagmi, Ethers.js, Viem, Redux, Tailwind.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "web3",
        color: "green-text-gradient",
      },
      {
        name: "launchpad",
        color: "pink-text-gradient",
      },
    ],
    image: coinforge,
    source_code_link: "https://coinforge.world/",
  },
  {
    name: "Bullex Trading WebApp+PWA",
    description:
      "Cross-chain trading platform with multi-wallet support. Tools: React Native, TypeScript, WebView, Redux, MUI.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "pwa",
        color: "green-text-gradient",
      },
      {
        name: "trading",
        color: "pink-text-gradient",
      },
    ],
    image: bullX,
    source_code_link: "https://bullx.io/",
  },
  {
    name: "Deftmine (AI based yield generation)",
    description:
      "AI based DeFi stablecoin platform with wallet integration and yield generation. Tools: React, Next.js, TypeScript, Wagmi, Ethers.js, Viem, Redux, Tailwind.",
    tags: [
      {
        name: "ai",
        color: "blue-text-gradient",
      },
      {
        name: "defi",
        color: "green-text-gradient",
      },
      {
        name: "yield",
        color: "pink-text-gradient",
      },
    ],
    image: defimine,
    source_code_link: "https://github.com/sakshamjaiswal",
  },
];

export { services, technologies, experiences, testimonials, projects };
