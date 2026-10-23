// Newest first. type: 'work' | 'project' | 'education'
// Use `bullets` for a list of highlights or `summary` for a single paragraph.
export const timeline = [
  {
    type: 'work',
    date: 'Jan 2025 - Apr 2025',
    title: 'Software Engineer Intern',
    subtitle: 'PM Accelerator',
    tags: ['Python', 'FastAPI', 'LangChain', 'Google Cloud'],
    bullets: [
      'AI storytelling platform using LangChain + FastAPI.',
      'CI/CD to Cloud Run via Cloud Build.',
      'Real-time speech + voice generation.'
    ]
  },
  {
    type: 'project',
    date: 'Jan 2024 - Aug 2024',
    title: 'Royal Horizon Hotel',
    tags: ['Java', 'Spring Boot', 'React', 'MongoDB'],
    bullets: [
      'Full-stack hotel booking platform with JWT auth.',
      'Refresh token rotation, real-time availability.',
      'Lazy loading and code splitting for UX perf.'
    ]
  },
  {
    type: 'work',
    date: 'May 2023 - Aug 2024',
    title: 'Software Engineer Intern',
    subtitle: 'myBlueprint',
    tags: ['C#', '.NET', 'Redis'],
    bullets: [
      'Backend features using MVC in ASP.NET Core.',
      'Redis pub/sub, optimized SQL queries, CI/CD.'
    ]
  },
  {
    type: 'work',
    date: 'Jan 2023 - Apr 2023',
    title: 'Software Engineer Intern',
    subtitle: 'UofT Biology Department',
    tags: ['Java', 'Spring Boot', 'Redis', 'GKE'],
    bullets: [
      'Lab recruitment platform with autosave, autoscaling.',
      'WebSocket real-time validation, Redis caching.'
    ]
  },
  {
    type: 'project',
    date: 'Nov 2022 - Dec 2022',
    title: 'Toronto Fitness Club',
    tags: ['Python', 'Django'],
    bullets: ['Backend + API rate limiting + real-time class updates.']
  },
  {
    type: 'work',
    date: 'Sep 2022 - Dec 2022',
    title: 'Software Engineer Intern',
    subtitle: 'CheaprEats',
    tags: ['Node.js', 'React', 'TypeScript'],
    bullets: [
      'Plaid API integration, 1K+ daily updates.',
      '85% frontend test coverage with Jest.'
    ]
  },
  {
    type: 'project',
    date: 'Jul 2022 - Aug 2022',
    title: 'Task Manager',
    tags: ['Node.js', 'MongoDB'],
    summary: 'CRUD app with user authentication and session logic.'
  },
  {
    type: 'project',
    date: 'Jun 2022 - Jul 2022',
    title: 'Personal Portfolio',
    tags: ['React', 'CSS'],
    summary: 'Built responsive website to showcase projects.'
  },
  {
    type: 'project',
    date: 'Feb 2022 - Mar 2022',
    title: 'Server & Client Communicator',
    tags: ['C', 'Socket Programming'],
    summary: 'Client-server communication model for real-time messaging.'
  },
  {
    type: 'project',
    date: 'Sep 2021 - Dec 2021',
    title: 'Brawlr',
    tags: ['Java', 'Firebase']
  },
  {
    type: 'project',
    date: 'Jan 2021 - Apr 2021',
    title: 'Steam Games Recommendations',
    tags: ['Python']
  },
  {
    type: 'education',
    date: 'Sep 2021 - Jun 2025',
    title: 'University of Toronto',
    subtitle: 'Computer Science Specialist',
    summaryLabel: 'Core courses in:',
    summary: 'Software Design, Computer Organization, Software Tools and Systems Programming, Data Structures & Analysis, Software Engineering, Databases, Programming on the Web, Algorithm Design, Analysis & Complexity, Artificial Intelligence, Machine Learning, Operating Systems'
  }
];
