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
      header: 'GitHub Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['fabihatasneem/my-project1', 'fabihatasneem/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'fabihatasneem/Jigsaw-Puzzle-Solver-Using-ML',
          'fabihatasneem/Hall-Management-System',
          'fabihatasneem/Smart-Garage',
          'anupbhowmik/BrightMate-Library-Database-Project',
          'fabihatasneem/Bubble-Shooter',
        ],
      },
    },
    external: {
      header: 'Other Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'The Great Ink Society',
          description:
            'This is my favorite project, and it was created genuinely following my passion. It is an online platform for creative minds who have a story to tell. Here they can share their stories and podcasts freely with proper copyright and enjoy others’ content. They can also communicate with each other and build one true Great Ink Society. We submitted this project to Therap JavaFest 2022 and became one of the top 10 Finalists.',
          imageUrl:
            'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/refs/heads/main/public/BUET_LOGO.svg',
          link: 'https://github.com/iftekharzeeon/the-great-ink-society',
        },
        {
          title: 'CommuniCreate-Creative-Production-Management',
          description:
            'A centralized system for connecting Creative Content Agency and Clients. Features of this project include Personalized Dashboard, Task Management, Review System, Employee Management, Project Management, Payment System, and Admin Site for managing users. This was our term project in Level 4 Term 1 for Course CSE408 - Software Development.',
          imageUrl:
            'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/refs/heads/main/public/BUET_LOGO.svg',
          link: 'https://github.com/CPM-Creative-Production-Management',
        },
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
    email: '',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
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
    'Tailwind',
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
    },
  ],
  certifications: [
    {
      name: 'Apprentice Program with OpenRefactory Bangladesh Ltd.',
      body: 'Certified by OpenRefactory',
      year: 'December 2023',
    },
    {
      name: 'Virtual Training on Health Data Analytics',
      body: 'Certified by MySoft',
      year: 'June 2023',
    },
    {
      name: 'Certificate of Ambassador for the IEEEXtreme 15.0',
      body: 'Certified by IEEE',
      year: 'October 2021',
    },
    {
      name: 'Introduction to Data Science',
      body: 'Certified by IBM',
      year: 'June 2020',
      link: 'https://courses.edx.org/certificates/917b4ec8eeaa445daef713a42efdd578',
    },
  ],
  educations: [
    {
      institution: 'Bangladesh University of Engineering and Technology',
      degree: 'B.Sc in Computer Science and Engineering (CSE)',
      from: '2019',
      to: '2024',
    },
    {
      institution: 'Holy Cross College',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2016',
      to: '2018',
    },
    {
      institution: 'Faizur Rahman Ideal Institute',
      degree: 'Secondary School Certificate (SSC)',
      from: '2006',
      to: '2015',
    },
  ],
  publications: [
    {
      title:
        'EmoBot: Artificial emotion generation through an emotional chatbot during general-purpose conversations',
      conferenceName: '',
      journalName:
        'Cognitive Systems Research, Volume 83, 2024, 101168, ISSN 1389-0417',
      authors:
        "Md Ehtesham-Ul-Haque, Jacob D' Rozario, Rudaiba Adnin, Farhan Tanvir Utshaw, Fabiha Tasneem, Israt Jahan Shefa, A.B.M. Alim Al Islam",
      link: 'https://doi.org/10.1016/j.cogsys.2023.101168',
      description:
        'Emotion modeling has always been intriguing to researchers, where detecting emotion is highly focused and generating emotion is much less focused to date. Therefore, in this paper, we aim to exploring emotion generation, particularly for general-purpose conversations. Based on the Cognitive Appraisal Theory and focusing on audio and textual inputs, we propose a novel method to calculate informative variables to evaluate a particular emotion-generating event and six primary emotions. Incorporating such a method of artificial emotion generation, we implement an emotional chatbot, namely EmoBot. Accordingly, EmoBot analyzes continuous audio and textual inputs, calculates the informative variables to evaluate the current situation, generates appropriate emotions, and responds accordingly. An objective evaluation indicates that EmoBot could generate more accurate emotional and semantic responses than a traditional chatbot that does not consider emotion. Additionally, a subjective evaluation of EmoBot demonstrates the appreciation of users for EmoBot over a traditional chatbot that does not consider emotion.',
    },
    {
      title:
        'Risk Morphological Study of Assessment of Hip Fracture by Using Machine Learning',
      conferenceName:
        'Submitted to 23rd IEEE International Conference on Machine Learning and Applications',
      journalName: '',
      authors:
        'Sanjana Binte Siraj, Fabiha Tasneem, Dr. Tanvir R. Faisal, Dr. Mahmuda Naznin',
      link: '',
      description:
        'Hip fractures pose a significant risk to the aging population, particularly among individuals with osteoarthritis or osteoporosis. This study proposes a novel approach to predicting hip fracture risk by integrating advanced machine learning techniques with detailed medical imaging data, including stress and strain distribution. Later we modify the MedViT architecture to enhance prediction accuracy. Our methodology involves further preprocessing a preprocessed CSV dataset generated from QCT image data, determining stress and strain values at various nodes, generating image datasets from these values, and predicting femur fracture risk based on the images. We evaluated several models, including Neural Network, PointNet, and MedViT through extensive feature extraction, data optimization, and hyperparameter tuning. MedViT initially achieved a 79% accuracy, but with further modifications in the internal architecture, we reached a 95% accuracy in predicting bone fracture risk and identifying potential fracture locations. This high predictive accuracy holds significant promise for early intervention, enabling healthcare professionals to identify and address fracture risks before they lead to debilitating injuries. Our findings highlight the potential of advanced machine learning frameworks to improve healthcare outcomes for aging individuals and those at high risk for fractures, contributing to enhanced quality of life and reduced healthcare costs.',
    },
  ],
  awards: [
    {
      title:
        'Winner of BASIS National ICT Award 2020 in Student (HC-S) Tertiary Student Category for Project E-Waste Management System',
      year: 2020,
      description:
        'Our team BUET Eunoia won this award for our web-based platform that connects the e-waste producers with the e-waste recyclers. The platform was designed to ensure the proper management of e-waste and to reduce the environmental pollution caused by e-waste.',
      link: 'https://bnia.basis.org.bd/win/winner-2020',
      imageUrl:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/refs/heads/main/public/BUET_LOGO.svg',
    },
    {
      title: 'Global Honorable Mention Award in NASA Space Apps Challenge 2020',
      year: 2020,
      description:
        'Our team BUET Zenith won this award for a satelite viewing platform that allows the users to view the live locations, detailed information about orbit, and satelite images all over the space.',
      link: 'https://2020.spaceappschallenge.org/challenges/connect/orbital-sky/details',
      imageUrl:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/refs/heads/main/public/BUET_LOGO.svg',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
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
    defaultTheme: 'retro',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ['retro', 'luxury', 'cupcake'],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
