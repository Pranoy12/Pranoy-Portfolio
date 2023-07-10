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
    tesla,
    shopify,
    carrent,
    jobit,
    markyo,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "#about",
      title: "About",
    },
    {
      id: "#work",
      title: "Projects",
    },
    {
      id: "#contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Ethical Hacker/Cyber Security",
      icon: mobile,
    },
    {
      title: "AI/ML",
      icon: backend,
    },
    {
      title: "IOS/Android App Developer",
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
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
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
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Organizing volunteer",
      company_name: "AKRASC",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2023",
      points: [
        "An all Kerala event hosted by IEEE FISAT SB for the exchange of scientific and technological knowledge.",
      ],
    },
    {
      title: "Organizing volunteer",
      company_name: "SB KNOCKOUT",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "November 2023",
      points: [
        "An event hosted by IEEE FISAT SB where every SB(Student Branches) under the India Council where challenged to put up their best teams to showcase their talents.",
      ],
    },
    {
      title: "Organizing volunteer",
      company_name: "Professional Students Summit 2023",
      icon: shopify,
      iconBg: "#383E56",
      date: "February 11 2023",
      points: [
        "An event hosted by ASAP Kerala which is the Government of Kerala’s maiden initiative to get professional students from varied disciplines and institutions of the state to a common arena to share ideas to build a better Kerala.",
      ],
    },
    {
      title: "Sub Coordinator",
      company_name: "ICEFOSS 2023",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "April 2,3,4 2023",
      points: [
        "A National level Free Software Conference organized jointly by FISAT Free Software Cell (FFSC) and ACM Student Chapter, FISAT.",
      ],
    },
    {
      title: "Organizing volunteer",
      company_name: "DROID 3.0",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "April 21,22,23 2023",
      points: [
        "An event hosted by IEEE FISAT SB for the exchange of scientific and technological knowledge.",
      ],
    },
    {
      title: "Coordinator",
      company_name: "NAUTILUS 2023",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "April 28,29 2023",
      points: [
        "National level Techno Cultural Fest hosted by FISAT College.",
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
      name: "Underwater Image Enhancement and Object Detection",
      description:
        "Web-based platform that allows users to enhance and detect objects in an underwater image.",
      tags: [
        {
          name: "django",
          color: "blue-text-gradient",
        },
        {
          name: "yolov5",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Self Checkout App - Markyo",
      description:
        "An Android app that aims to reduce the tiring long queues in supermarkets, enables users to pay without standing in long queues.",
      tags: [
        {
          name: "flutter",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
      ],
      image: markyo,
      source_code_link: "https://github.com/",
    },
    {
      name: "File Management Website",
      description:
        "A comprehensive file management platform that allows users to upload and download files easily.",
      tags: [
        {
          name: "mysql",
          color: "blue-text-gradient",
        },
        {
          name: "php",
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
    {
      name: "Hotel Managment Website",
      description:
        "Web application for managing hotel operations from ordering food online to giving reviews.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "postgresql",
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