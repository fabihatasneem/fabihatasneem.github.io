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
      header: 'Other Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['fabihatasneem/my-project1', 'fabihatasneem/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'fabihatasneem/Jigsaw-Puzzle-Solver-Using-ML',
          // 'fabihatasneem/Hall-Management-System',
          // 'fabihatasneem/Smart-Garage',
          'anupbhowmik/BrightMate-Library-Database-Project',
          'fabihatasneem/Bubble-Shooter',
        ],
      },
    },
    external: {
      header: 'Notable Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'CommuniCreate-Creative-Production-Management',
          description:
            'A centralized system for connecting Creative Content Agency and Clients. Features of this project include Personalized Dashboard, Task Management, Review System, Employee Management, Project Management, Payment System, and Admin Site for managing users. This was our term project in Level 4, Term 1 for Course CSE408 - Software Development.',
          imageUrl:
            'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/refs/heads/main/public/communicreate.png',
          link: 'https://github.com/CommuniCreate',
        },
        {
          title: 'The Great Ink Society',
          description:
            'This is a project that is the closest to my heart, and it was created genuinely following my passion. It is an online platform for creative minds who have a story to tell. Here they can share stories written by them and podcasts recorded by them freely with proper copyright and enjoy others’ content. They can also communicate with each other through chatting and build one true Great Ink Society. We submitted this project to Therap JavaFest 2022 and became one of the top 10 Finalists.',
          imageUrl:
            'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/refs/heads/main/public/tgis.png',
          link: 'https://github.com/iftekharzeeon/the-great-ink-society',
        },
      ],
    },
  },
  seo: {
    title: 'Fabiha Tasneem',
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
    website: '',
    phone: '',
    email: '',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: {
    languages: [
      'C/C++',
      'Java',
      'Python',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Bootstrap',
    ],
    frameworks: [
      'Spring Boot',
      'React.js',
      'Redux',
      'Node.js',
      'Next.js',
      'Express.js',
      'Tailwind CSS',
    ],
    databases: ['MySQL', 'PostgreSQL', 'Oracle', 'SQLite', 'Sequelize'],
    tools: [
      'Git',
      'Docker',
      'RESTful API',
      'WebRTC',
      'Kafka',
      'Cassandra',
      'Redis',
      'RabbitMQ',
      'OpenTelemetry',
      'Jaeger',
      'Eureka',
    ],
    cloud: [
      'AWS (Amazon Web Services)',
      'S3',
      'Microsoft Azure',
      'Google Firebase',
    ],
    ml: ['Tensorflow', 'Keras', 'PyTorch'],
    security: ['JWT', 'OAuth2', 'Spring Security'],
  },
  experiences: [
    {
      company: 'Synesis IT PLC',
      position: 'Software Engineer',
      from: 'June 2024',
      to: 'Present',
      companyLink: 'https://synesisit.com.bd/',
      description: [
        'Contributed to a real-time unified communication platform for large-scale government and enterprise use.',
        'Built reusable UI components and secure real-time messaging features using React, Redux, MUI, WebSockets, and JWT, improving development speed and communication reliability.',
        'Scaled the platform to support 10K+ concurrent users and enable 20K+ participants in a single meeting through optimized WebRTC signaling, Kafka-based pipelines, and distributed storage with Apache Cassandra.',
        'Increased observability coverage by 80% with OpenTelemetry and Jaeger, reducing detection and resolution time for critical issues.',
      ],
    },
    {
      company: 'MySoft Ltd.',
      position: 'Academic Intern',
      from: 'June 2022',
      to: 'July 2022',
      companyLink: 'https://www.mysoftltd.com/',
      description: [
        'Performed data analysis, cleaning, and preprocessing on health-related big data using Python.',
        'Successfully optimized CSV data processing and storage in PostgreSQL database.',
        'Created data visualizations to support healthcare analytics and reporting.',
      ],
    },
    {
      company: 'OpenRefactory, Inc.',
      position: 'Apprentice',
      from: 'November 2023',
      to: 'December 2023',
      companyLink: 'https://www.openrefactory.com/',
      description: [
        'Trained in software triaging methodologies and open-source bug fixing techniques.',
        'Contributed to internal bug triage portal development using industry best practices.',
        'Gained hands-on experience with software quality assurance and debugging tools.',
      ],
    },
    {
      company: 'BYDO Engineering Ltd',
      position: 'Trainee Software Developer',
      from: 'September 2020',
      to: 'September 2021',
      companyLink: 'https://bydoacademy.com/',
      description: [
        'Developed backend services using Java, Hibernate, and MySQL for multiple platforms.',
        'Built responsive web interfaces with JavaScript and JSP for educational and healthcare platforms.',
        'Contributed to BYDO Academy, Uposorho healthcare platform, and Institute of Engineers website.',
      ],
    },
  ],
  certifications: [
    {
      name: 'Apprentice Program with OpenRefactory Bangladesh Ltd.',
      body: 'Certified by OpenRefactory Bangladesh Ltd.',
      year: 'December 2023',
    },
    {
      name: 'Virtual Training on Health Data Analytics',
      body: 'Certified by MySoft Ltd.',
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
    {
      name: "The Duke of Edinburgh's Award (Bronze Medal)",
      body: "Certified by The Duke of Edinburgh's Award Foundation Bangladesh associated by The Regional Secretariat in Australia & The International Secretariat in the UK",
      year: 'March 2020',
    },
  ],
  educations: [
    {
      institution: 'Bangladesh University of Engineering and Technology (BUET)',
      degree: 'B.Sc in Computer Science and Engineering (CSE)',
      from: '2019',
      to: '2024',
      logoUrl:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/refs/heads/main/public/BUET_LOGO.svg',
    },
    {
      institution: 'Holy Cross College, Dhaka',
      degree: 'Higher Secondary Certificate (HSC)',
      from: '2016',
      to: '2018',
      logoUrl:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/refs/heads/main/public/holy_cross.png',
    },
    {
      institution: 'Faizur Rahman Ideal Institute, Dhaka',
      degree: 'Secondary School Certificate (SSC)',
      from: '2006',
      to: '2015',
      logoUrl:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/refs/heads/main/public/faizur.png',
    },
  ],
  extraCurricularActivities: [
    {
      company: 'IEEE Computer Society BUET Student Branch Chapter',
      position: 'Chairperson',
      year: '2023',
      logoUrl:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/refs/heads/main/public/ieee_cs_logo.jpg',
    },
    {
      company: 'IEEEXtreme 15.0',
      position: 'Ambassador',
      year: '2021',
      logoUrl:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/refs/heads/main/public/ieeextreme_logo.jpg',
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
        'Abstract: Emotion modeling has always been intriguing to researchers, where detecting emotion is highly focused and generating emotion is much less focused to date. Therefore, in this paper, we aim to exploring emotion generation, particularly for general-purpose conversations. Based on the Cognitive Appraisal Theory and focusing on audio and textual inputs, we propose a novel method to calculate informative variables to evaluate a particular emotion-generating event and six primary emotions. Incorporating such a method of artificial emotion generation, we implement an emotional chatbot, namely EmoBot. Accordingly, EmoBot analyzes continuous audio and textual inputs, calculates the informative variables to evaluate the current situation, generates appropriate emotions, and responds accordingly. An objective evaluation indicates that EmoBot could generate more accurate emotional and semantic responses than a traditional chatbot that does not consider emotion. Additionally, a subjective evaluation of EmoBot demonstrates the appreciation of users for EmoBot over a traditional chatbot that does not consider emotion.',
    },
    {
      title:
        'Transfer Learning in Bone Morphology Study for Better Hip Fracture Assessment',
      conferenceName: 'IEEE 16th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON) 2025',
      journalName: '',
      authors:
        'Sanjana Siraj and Fabiha Tasneem (Bangladesh University of Engineering and Technology, Bangladesh); Tanvir R. Faisal (University of Louisiana at Lafayette, USA); Mahmuda Naznin (Bangladesh University of Engineering and Technology (BUET), Bangladesh)',
      link: 'https://ieeexplore.ieee.org/document/11267735',
      location: 'Physical Conference (IBM Louis V. Gerstner, Jr. Center for Learning, New York, USA)',
      date: '22-24 October 2025',
      indexTerms:
        'machine learning, deep neural networks, fracture risk assessment, bone morphology, vision transformer',
      description:
        'Abstract: Hip fracture is a significant concern for the aging population, especially people with osteoarthritis or osteoporosis. This study introduces an innovative approach to predict hip fracture risk by integrating advanced machine learning techniques with detailed medical imaging data, including stress and strain distribution. Our methodology involves processing a comprehensive dataset of patients’ femoral bone information, utilizing regression techniques to determine stress and strain values, and employing these values to generate image datasets. A key challenge in this type of study is the small size of the training data which leads to poor accuracy. In order to combat this, a vision transformer model, MedViT that is more proficient in capturing long-range dependencies, has been used to predict femur fracture risk for high and low classes. The proposed framework shows superior results in terms of prediction accuracy. Our findings highlight the potential of applying advanced machine learning frameworks to enhance healthcare outcomes, particularly for individuals with a high risk of hip fractures.'
    },
  ],
  awards: [
    {
      title: 'Global Honorable Mention Award : NASA Space Apps Challenge 2020',
      year: 2020,
      description:
        'Our team BUET Zenith won this award for our satellite viewing platform named "Satellight : Putting Light On Satellites" which aims at connecting people with satellites in a socially engaging way by representing satellites in a very visual, social, and organic way. Our project comprises Web and Android apps and an Arduino module. Using our apps, users can observe satellites in Map View, Night Sky View, 3D Model View, VR, and First Person View live in real-time or at any time in the past or future. They can also comment on their favorite satellites and see others\' comments and the number of views for a particular satellite. And, our Arduino module is a physical 3D pointing device that upon selection of a satellite, will physically point to the sky where the satellite is currently at.',
      link: 'https://2020.spaceappschallenge.org/challenges/connect/orbital-sky/teams/buet-zenith/project',
      logoUrl:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/refs/heads/main/public/nasa.png',
      imageUrl1:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/main/public/nasa2.jpg',
      imageUrl2:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/main/public/nasa3.jpg',
    },
    {
      title: 'Winner : BASIS National ICT Award 2020',
      year: 2020,
      description:
        'Our team BUET EUNOIA won this award in the Student (HC-S) Tertiary Student Category for our web-based platform named "E-Waste Management System" that connects the e-waste producers with the e-waste recyclers. The platform was designed to ensure the proper management of e-waste and to reduce the environmental pollution caused by e-waste.',
      link: 'https://bnia.basis.org.bd/win/winner-2020',
      logoUrl:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/refs/heads/main/public/basis.png',
      imageUrl1:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/main/public/basis1.jpg',
      imageUrl2:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/main/public/basis2.jpg',
    },
    {
      title: 'Top 10 Finalist : Therap JavaFest 2022',
      year: 2022,
      description:
        'The Great Ink Society is a platform for all the storytellers out there. It will consist of stories in written versions or voiceovers. The purpose of this platform is to build a community with a bunch of people who will be sharing their imaginary world with one another. Here, they will be able to write a short story, a poem, or even a book that consists of multiple chapters. They will also be able to upload podcasts. A podcast is an episodic series of spoken words in digital audio files that a user can download or stream directly from any app and listen to. In this platform, a user will be able to upload their podcasts, standalone, and series in mp3 format and the listeners will be able to stream them directly from the web app. As a part of the community, others will be able to comment on these stories, like them and can even follow their preferred authors.',
      link: 'https://www.facebook.com/photo/?fbid=170385585546837&set=pcb.170386192213443',
      logoUrl:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/main/public/javafest.png',
      imageUrl1:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/main/public/therap.png',
      imageUrl2:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/main/public/therap2.jpg',
    },
    {
      title: 'First Runner Up : BUET CSE Fest 2022 Hackathon',
      year: 2022,
      description:
        'Our team BUET Bleh developed a sophisticated digital home assistant app during the intense 24-hour challenge of the BUET CSE Fest 2022 Inter-University Hackathon. Our hard work and innovation paid off, as we proudly secured the First Runner-Up position in the API & Cloud Category.',
      link: 'https://www.facebook.com/share/p/1BTXsYqcM8/',
      logoUrl:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/main/public/csefest22.jpg',
      imageUrl1:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/main/public/hackathon.jpg',
      imageUrl2:
        'https://raw.githubusercontent.com/fabihatasneem/fabihatasneem.github.io/main/public/hackathon2.jpg',
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
    defaultTheme: 'sunset',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: ['sunset', 'bumblebee'],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: ``,

  enablePWA: true,
};

export default CONFIG;
