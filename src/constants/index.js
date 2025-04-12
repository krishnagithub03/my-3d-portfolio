import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    githublogo,
    ybif,
    kiet,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    cpp,
    jQuery,
    Bootstrap,
    figma,
    docker,
    meta,
    github,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    linkedin,
    codechef,
    leetcode,
    gem,
    platter,
    java,
    python,
    fastapi,
    aws,
    gcp,
    sql
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
      title: "React Js Developer",
      icon: mobile,
    },
    {
      title: "Software Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "javaa",
      icon: java,
    },
    {
      name: "cpp lang",
      icon: cpp,
    },
    {
      name: "python faknwk",
      icon: python,
    },
    {
      name: "javaScript wjfiw",
      icon: javascript,
    },
    // {
    //   name: "html 5",
    //   icon: html,
    // },
    // {
    //   name: "css 3",
    //   icon: css,
    // },
    {
      name: "bootstrap",
      icon: Bootstrap,
    },
    {
      name: "react js",
      icon: reactjs,
    },
    {
      name: "jquery",
      icon: jQuery,
    },
    {
      name: "tailwind CSS",
      icon: tailwind,
    },
    {
      name: "node js",
      icon: nodejs,
    },
    {
      name: "mongoDB",
      icon: mongodb,
    },
    {
      name: "fastAPI",
      icon: fastapi,
    },
    {
      name: "aws",
      icon: aws,
    },
    {
      name: "gcp",
      icon: gcp,
    },
    {
      name: "sql",
      icon: sql,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "git github",
      icon: git,
    },
    {
      name: "figma uiuix",
      icon: figma,
    },
  ];
  const footer = [
    {
      name: "LinkedIn",
      icon: linkedin,
    },
    {
      name: "Github",
      icon: githublogo,
    },
    {
      name: "Leetcode",
      icon: leetcode,
    },
    {
      name: "Codecehf",
      icon: codechef,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Trainee",
      company_name: "Gemini Solutions, Gurugram",
      icon: gem,
      iconBg: "#383E56",
      date: "Jan 2025 - Present",
      points: [
        "Gained hands-on training in Core Java, with a strong focus on object-oriented programming (OOPs) concepts,data structures, multithreading, error handling, and best practices in Java application development.",
 "Collaborated in a team to build a task management system using the MERN stack (MongoDB, Express.js,React.js, Node.js), implemented responsive UI using Tailwind CSS, and managed application state effectively using Redux.",
 "Implemented FastAPI in an internal project to build high-performance, asynchronous RESTful APIs with efficient request handling and data validation using Pydantic.",
      ],
    },
    {
      title: "Software Engineering Intern",
      company_name: "ProInfo Technologies, Noida",
      icon: platter,
      iconBg: "#E6DEDD",
      date: "Sep 2024 - Jan 2025",
      points: [
         "Engineered a user-friendly frontend with React.js and crafted a robust backend using Node.js and Express.js, ensuring seamless communication through the implementation of RESTful APIs that improved response by 30%",
 "Containerized applications using Docker to create scalable, consistent, and efficient environments for both development and production deployments.",
 "Deployed and managed the platform on Google Cloud Platform (GCP), leveraging its services to ensure high availability, reliability, and optimal performance.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };