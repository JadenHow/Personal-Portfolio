// All site copy lives here so it can be kept in sync with the resume.
// In bullet strings, wrap a phrase in **double asterisks** to highlight it.

export const profile = {
  name: 'Jaden How',
  role: 'Software Engineer · Backend & Full-Stack',
  location: 'Toronto, Canada',
  email: 'jadenhow02@gmail.com',
  github: 'https://github.com/JadenHow',
  linkedin: 'https://www.linkedin.com/in/jaden-how02/',
  resume: 'https://drive.google.com/file/d/16jjYzWaowHHl3utBhvRg02FhDiu_Hrc9/view?usp=drive_link'
};

export const heroPoints = [
  '**Founding engineer @ GenTube**: **5×** D1 retention, **2,000+ DAU**',
  '**Founding engineer @ Trakyo**: **$0 → $100K MRR** in 8 months',
  'Shipped to **1M+ students** at myBlueprint',
  '**UofT Computer Science**'
];

export const stats = [
  { value: '$100K', label: 'MRR built from $0 in 8 months at Trakyo' },
  { value: '330+', label: 'Paying businesses on the attribution engine I built' },
  { value: '5×', label: 'D1 retention growth at GenTube, to 2,000+ DAU' },
  { value: '26×', label: 'Faster revenue dashboard (~4s to ~150ms)' }
];

export const experience = [
  {
    company: 'GenTube',
    note: 'Founders ex-Maluuba/Microsoft, Wish',
    role: 'Founding Software Engineer',
    period: 'May 2026 – Present',
    current: true,
    bullets: [
      'Built the content moderation system screening every upload, prompt and AI image; tuned it on production data, cutting safe posts wrongly blocked from **10% to 2.5%** and unsafe content missed from **25% to 5%**.',
      'Launched an AI feature that writes and illustrates stories frame by frame, cutting wait per frame from **~21s to ~3s** by merging sequential LLM calls, parallelizing image generation and pre-generating frames.',
      'Ran A/B experiments on onboarding, creation and engagement flows, including an onboarding redesign that got users to their first image faster; helped grow **D1 retention 5×** and **DAU to 2,000+**.',
      'Sharded popular AI characters\' usage counters across 16 documents to stop write conflicts during traffic spikes, cutting failed gallery inserts from **~20% to 0** while keeping counts accurate.'
    ],
    tech: ['TypeScript', 'React', 'Convex', 'LLMs', 'A/B testing']
  },
  {
    company: 'Trakyo',
    note: '$0 to $100K MRR in 8 months',
    role: 'Founding Software Engineer',
    period: 'Sep 2025 – Apr 2026',
    bullets: [
      'Built Trakyo\'s core product, a real-time attribution engine that tells **330+ paying businesses** which ad drove each sale, serving its tracking script from Cloudflare\'s edge in **under 50ms (p90)**.',
      'Integrated **13+ ad platforms** and Stripe behind idempotent, signature-verified webhook handlers, so retried or forged events never double-counted a conversion or double-charged a customer.',
      'Architected a hybrid analytics layer, routing heavy queries to ClickHouse for speed and recent events to Supabase since ClickHouse ingestion lags, making the revenue-by-channel dashboard **26× faster** (~4s to ~150ms).',
      'Built an MCP server that lets marketers ask AI assistants which campaigns drive sales using Trakyo\'s live data, serving **100+ users** and **5,000+ requests per week**.'
    ],
    tech: ['Cloudflare Workers', 'ClickHouse', 'Supabase', 'PostgreSQL', 'Stripe', 'MCP']
  },
  {
    company: 'PM Accelerator',
    role: 'Software Engineer Intern',
    period: 'Jan 2025 – Apr 2025',
    bullets: [
      'Built an AI storytelling app where children talk to characters and steer the plot by voice, transcribing speech in **under 200ms** by streaming audio over WebSockets; supports 100+ concurrent users.',
      'Made the app\'s stories **35% more coherent** (consistent characters and plot) by building an automated LLM judge that scored 500+ stories and redesigning prompts against it.'
    ],
    tech: ['Python', 'FastAPI', 'Gemini', 'WebSockets']
  },
  {
    company: 'University of Toronto, Lin Lab',
    role: 'Research Assistant, Software (Part-time)',
    period: 'Sep 2023 – Apr 2024',
    bullets: [
      'Built real-time VR environments in Unity for zebrafish experiments (1D/2D/3D, visual and mechanical stimuli) that react live to each fish\'s movement; **used by 10+ researchers**.',
      'Synchronized VR with whole-brain microscopy to **within ~10ms** across **500+ experiment sessions**, letting researchers match each behavior to the neural activity behind it.',
      'Automated processing of raw fish position data into analysis-ready datasets, cutting cleanup per experiment from **half a day to under a minute** and feeding the lab\'s behavior models.'
    ],
    tech: ['C#', 'Unity']
  },
  {
    company: 'myBlueprint',
    role: 'Software Engineer Intern (PEY Co-op)',
    period: 'May 2023 – Aug 2024',
    bullets: [
      'Owned classroom features end to end, letting teachers share materials, post lessons and collect assignments in one place for **1M+ students across 7,900+ schools**.',
      'Cut database queries by **80%** for 100K+ daily users by caching the course catalog and school settings in Redis.',
      'Added 200+ automated tests to the CI pipeline covering assignment submission and grading, raising coverage to **85%** so regressions were caught before every release.'
    ],
    tech: ['C#', 'ASP.NET Core', 'React', 'Redis']
  }
];

export const featuredProjects = [
  {
    title: 'Real-Time Order Processing Pipeline',
    description: 'A distributed, event-driven pipeline that ingests, processes and assigns orders in real time, with full observability.',
    highlights: [
      '**500 orders/sec** throughput across 100K+ daily events at **99.9% uptime** using Kafka',
      'Cut order-assignment query latency from **2s to 50ms** with a Redis caching layer',
      'Prometheus and Grafana monitoring brought incident detection **under 1 minute**'
    ],
    tech: ['Python', 'Kafka', 'PostgreSQL', 'Redis', 'Docker', 'Prometheus', 'Grafana'],
    links: []
  },
  {
    title: 'Royal Horizon Hotel',
    description: 'A full-stack hotel booking platform with secure authentication and live room availability.',
    highlights: [
      'JWT authentication with **refresh-token rotation**',
      'Real-time room availability during booking',
      'Lazy loading and code splitting for a fast frontend'
    ],
    tech: ['Java', 'Spring Boot', 'React', 'MongoDB'],
    links: [
      { label: 'Backend', href: 'https://github.com/JadenHow/RoyalHorizonHotel-Backend' },
      { label: 'Frontend', href: 'https://github.com/JadenHow/RoyalHorizonHotel-Frontend' }
    ]
  },
  {
    title: 'Toronto Fitness Club',
    description: 'The backend for a fitness club platform, built to stay responsive under load.',
    highlights: [
      'REST API with **rate limiting** to protect against abuse',
      'Real-time class schedule updates'
    ],
    tech: ['Python', 'Django'],
    links: [{ label: 'Code', href: 'https://github.com/JadenHow/Toronto-Fitness-Club' }]
  }
];

export const otherProjects = [
  {
    title: 'Weather Analytics App',
    description: 'Fetches and stores OpenWeatherMap data, with CRUD over saved records.',
    tech: ['Spring Boot', 'React', 'Redux Saga'],
    href: 'https://github.com/JadenHow/WeatherService-Backend'
  },
  {
    title: 'Server & Client Communicator',
    description: 'Real-time client-server messaging over raw sockets.',
    tech: ['C', 'Sockets'],
    href: 'https://github.com/JadenHow/Server-and-Client-Communicator'
  },
  {
    title: 'Task Manager',
    description: 'Task app with user authentication and session handling.',
    tech: ['Node.js', 'MongoDB'],
    href: 'https://github.com/JadenHow/Task-Manager'
  },
  {
    title: 'Steam Games Recommendations',
    description: 'Recommends games by similarity of genre, tags and developer, filtered by price and rating.',
    tech: ['Python'],
    href: 'https://github.com/JadenHow/Steam-Games-Recommendations'
  }
];

export const skills = [
  { group: 'Languages', items: ['Python', 'Java', 'TypeScript', 'JavaScript', 'C#', 'Go', 'SQL'] },
  { group: 'Backend', items: ['FastAPI', 'Spring Boot', 'ASP.NET Core', 'Node.js', 'Express', 'Django'] },
  { group: 'Frontend', items: ['React', 'Next.js', 'HTML/CSS'] },
  { group: 'Data & Messaging', items: ['PostgreSQL', 'SQL Server', 'MongoDB', 'Redis', 'Kafka'] },
  { group: 'Cloud & DevOps', items: ['AWS', 'GCP', 'Azure', 'Cloudflare', 'Docker', 'Kubernetes', 'GitHub Actions', 'Linux'] },
  { group: 'Testing', items: ['Pytest', 'Jest', 'xUnit', 'Playwright', 'Cypress', 'JMeter'] }
];

export const education = {
  school: 'University of Toronto, St. George',
  degree: 'Honours B.Sc. in Computer Science',
  period: 'Sep 2020 – Nov 2025',
  gpa: '3.5 / 4.0',
  coursework: ['Algorithms & Data Structures', 'Operating Systems', 'Database Systems', 'Software Engineering', 'Theory of Computation', 'Artificial Intelligence']
};
