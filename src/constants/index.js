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
    meta,
    starbucks,

    topperworld,
    overleaf,
    colab,
    mysql,
    bootstrap,

    netflix,
    autonomous,
    java,

    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Machine Learning",
      icon: mobile,
    },
    // {
    //   title: "Backend Developer",
    //   icon: backend,
    // },
    // {
    //   title: "Content Creator",
    //   icon: creator,
    // },
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
      name: "MySQL",
      icon: mysql,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
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
      name: "overleaf",
      icon: overleaf,
    },
    {
      name: "colab",
      icon: colab,
    },
  ];
  
  const experiences = [
    {
      title: "Autocorrect System",
      company_name: "TopperWorld",
      icon: topperworld,
      iconBg: "#505050",
      date: "Oct 2023 - Nov 2023",
      points: [
        "Developed a probabilistic autocorrect model with 93.43% accuracy.",
      "Worked on improving the spell-checking and text-correction algorithms.",
      "Collaborated with a team to integrate the model into existing applications.",
      "Participated in code reviews and ensured the delivery of high-quality code.",
      ],
    },
    {
      title: "Chatbot",
      company_name: "TopperWorld",
      icon: topperworld,
      iconBg: "#505050",
      date: "Oct 2023 - Nov 2023",
      points: [
        "Developed a chatbot using Python and libraries like TensorFlow, Keras, and NLTK for natural language processing.",
        "Built and trained a deep learning model with dense and dropout layers to classify user intents and generate accurate responses.",
        "Preprocessed text inputs using tokenization and lemmatization for improved chatbot performance.",
        "Tested and deployed the chatbot, ensuring robust interaction and response accuracy in various scenarios."
      ],
    },
    // {
    //   title: "Web Developer",
    //   company_name: "Shopify",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "Jan 2022 - Jan 2023",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Prakhar",
      // designation: "CFO",
      // company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Ritam",
      // designation: "COO",
      // company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Maniratnam",
      // designation: "CTO",
      // company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Netflix Clone",
      description:
        "A web-based platform that enables users to browse, stream, and manage a vast library of movies and TV shows, offering a seamless and immersive entertainment experience designed around their preferences.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "light-green-text-gradient",
        },
        {
          name: "express",
          color: "dark-yellow-text-gradient",
        },
        {
          name: "node.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: netflix,
      source_code_link: "https://github.com/aayushgithub1/Netflix-FullStack",
    },
    {
      name: "Autonomous Driving System",
      description:
        "A model that leverages machine learning to simulate autonomous driving, enabling vehicles to detect and respond to road signs accurately, enhancing safety and driving efficiency.",
      tags: [
        {
          name: "pandas",
          color: "blue-text-gradient",
        },
        {
          name: "numpy",
          color: "green-text-gradient",
        },
        {
          name: "multilayer perceptron",
          color: "pink-text-gradient",
        },
        {
          name: "random forest classifier",
          color: "light-green-text-gradient",
        },
      ],
      image: autonomous,
      source_code_link: "https://github.com/",
    },
    {
      name: "Snake Game",
      description:
        "A visually engaging and interactive Snake Game developed in Java using the Swing library, featuring dynamic gameplay with randomly generated apples, increasing difficulty as the snake grows, and game-over alerts when collisions occur.",
      tags: [
        {
          name: "java",
          color: "pink-text-gradient",
        },
        {
          name: "Java Swing",
          color: "green-text-gradient",
        },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: java,
      source_code_link: "https://github.com/aayushgithub1/Snake_Game",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };