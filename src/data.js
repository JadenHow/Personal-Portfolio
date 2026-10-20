import {
  FaSteam,
  FaGamepad,
  FaComments,
  FaUserCircle,
  FaTasks,
  FaDumbbell,
  FaHotel
} from 'react-icons/fa';

// Each project gets a locally rendered cover (icon on a gradient) instead of
// a hotlinked third-party image, so covers never break or disappear.
export const products = [
  {
    id: 1,
    icon: FaSteam,
    gradient: ['#1b2838', '#2a475e'],
    tagline: 'Python',
    link: 'https://github.com/JadenHow/Steam-Games-Recommendations',
    title: 'Steam Games Recommendations'
  },
  {
    id: 2,
    icon: FaGamepad,
    gradient: ['#b45309', '#7c2d12'],
    tagline: 'Java · Firebase',
    link: 'https://github.com/JadenHow/Brawlr',
    title: 'Brawlr'
  },
  {
    id: 3,
    icon: FaComments,
    gradient: ['#0f766e', '#134e4a'],
    tagline: 'C · Socket Programming',
    link: 'https://github.com/JadenHow/Server-and-Client-Communicator',
    title: 'Server and Client Communicator'
  },
  {
    id: 4,
    icon: FaUserCircle,
    gradient: ['#7e22ce', '#4c1d95'],
    tagline: 'React',
    link: 'https://github.com/JadenHow/Personal-Portfolio',
    title: 'Personal Portfolio'
  },
  {
    id: 5,
    icon: FaTasks,
    gradient: ['#2563eb', '#1e3a8a'],
    tagline: 'Node.js · MongoDB',
    link: 'https://github.com/JadenHow/Task-Manager',
    title: 'Task Manager'
  },
  {
    id: 6,
    icon: FaDumbbell,
    gradient: ['#dc2626', '#7f1d1d'],
    tagline: 'Python · Django',
    link: 'https://github.com/JadenHow/Toronto-Fitness-Club',
    title: 'Toronto Fitness Club'
  },
  {
    id: 7,
    icon: FaHotel,
    gradient: ['#a16207', '#422006'],
    tagline: 'Java · Spring Boot · React',
    link: 'https://github.com/JadenHow/RoyalHorizonHotel-Backend',
    title: 'Royal Horizon Hotel'
  }
];
