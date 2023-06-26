import {
    mobile,
    backend,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    docker,
    starbucks,
    carrent,
    jobit,
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
      title: "Mobile Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
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
      name: "React JS",
      icon: reactjs,
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
      title: "Student",
      School: "EMSI",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2018 - April 2024",
      points: [
        "In this year I m working on my soft skills to devlope and work on more project that gona help me to devlope ly knowledge thank u very much for helping me",
      ],
    },
   
  ];
  

  
  const projects = [
    {
      name: "eExams",
      description:
        "Gestion des exams.",
      tags: [
        {
          name: "React ,  React Native",
          color: "blue-text-gradient",
        },
        {
          name: "springbot",
          color: "red-text-gradient",
        },
        {
          name: "MySql",
          color: "green-text-gradient",
        },
       
      ],
      image: carrent,
      source_code_link: "https://github.com/oussamarida/Gestion-Exam-Backend-Frontend-web-mobile",
    },
    {
      name: "Location voiture",
      description:
        "site pour location voiture",
      tags: [
        {
          name: "React ,  React Native",
          color: "blue-text-gradient",
        },
        {
          name: "Django",
          color: "green-text-gradient",
        },
        {
          name: "MySql",
          color: "green-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/oussamarida/location-voiture",
    },
    
  ];
  
  export { services, technologies, experiences, projects };