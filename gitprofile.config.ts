// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'fabihatasneem', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['fabihatasneem/my-project1', 'fabihatasneem/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'fabihatasneem/the-great-ink-society',
          'fabihatasneem/Jigsaw-Puzzle-Solver-Using-Machine-Learning',
          'fabihatasneem/BrightMate-Library-L2T2-1',
          'fabihatasneem/Smart-Garage',
          'fabihatasneem/Bubble-Shooter',
          'fabihatasneem/HocusPocusHomeAssistant'], 
      },
    },
    external: {
      header: 'Other Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'CommuniCreate-Creative-Production-Management',
          description:
            'A centralized system for connecting Creative Content Agency and Clients. Features of this project include Personalized Dashboard, Task Management, Review System, Employee Management, Project Management, Payment System, and Admin Site for managing users.',
          imageUrl:
            '',
          link: 'https://github.com/CPM-Creative-Production-Management',
        }
      ],
    },
  },
  seo: {
    title: 'Portfolio of Fabiha Tasneem',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'fabiha-tasneem',
    twitter: '',
    mastodon: '',
    researchGate: 'Fabiha-Tasneem',
    facebook: 'fabiha008',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://fabihatasneem.github.io',
    phone: '',
    email: 'fabihatsnm.00@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'C++',
    'C',
    'JavaScript',
    'Spring Boot',
    'React.js',
    'Node.js',
    'Next.js',
    'Express.js',
    'MySQL',
    'PostgreSQL',
    'Oracle',
    'Sequlize',
    'Git',
    'Docker',
    'Tensorflow',
    'Keras',
    'PyTorch',
    'HTML',
    'CSS',
    'Tailwind'
  ],
  experiences: [
    {
      company: 'Synesis IT PLC',
      position: 'Software Engineer',
      from: 'June 2024',
      to: 'Present',
      companyLink: 'https://synesisit.com.bd/',
    },
    {
      company: 'MySoft Ltd.',
      position: 'Intern',
      from: 'June 2022',
      to: 'July 2022',
      companyLink: 'https://www.mysoftltd.com/',
    },
    {
      company: 'OpenRefactory, Inc.',
      position: 'Apprentice',
      from: 'November 2023',
      to: 'December 2023',
      companyLink: 'https://www.openrefactory.com/',
    }
  ],
  certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Computer Science and Engineering, Bangladesh University of Engineering and Technology',
      degree: 'B.Sc',
      from: '2019',
      to: '2024',
    },
    {
      institution: 'Holy Cross College',
      degree: 'HSC',
      from: '2016',
      to: '2018',
    },
    {
      institution: 'Faizur Rahman Ideal Institute',
      degree: 'HSC',
      from: '2006',
      to: '2015',
    }
  ],
  publications: [
    {
      title: 'Publication Title',
      conferenceName: '',
      journalName: 'Journal Name',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      title: 'Publication Title',
      conferenceName: 'Conference Name',
      journalName: '',
      authors: 'John Doe, Jane Smith',
      link: 'https://example.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'retro',
      'fantasy'
    ],

  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
