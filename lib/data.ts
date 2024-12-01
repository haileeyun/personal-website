import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import virtual_pantry_project from "@/public/virtual_pantry_project.png";
import field_game_project from "@/public/field_game_project.png";
import coffee_project from "@/public/coffee_project.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "TA for Intro for Programming & Problem Solving",
    location: "NYU - New York, NY",
    description:
      "Led weekly lab sections, offered daily office hours, and guided students through core Python programming concepts.",
    icon: React.createElement(LuGraduationCap),
    date: "September 2024 - present",
  },
  {
    title: "Quantitative Analyst Intern",
    location: "PNC Financial Services - Pittsburgh, PA",
    description:
      "Leveraged Anaconda and Jupyter Notebook for Python-based data analysis, utilizing decision trees to target specific subsets of New York applicants, identifying riskier clients for booking",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - August 2024",
  },
  {
    title: "Software Developer Intern",
    location: "DataVal Ventures - New York, NY",
    description:
      "Developed and implemented automated cloud-enabled distributed computing applications using AWS Lambda to orchestrate the execution of machine learning routines",
    icon: React.createElement(CgWorkAlt),
    date: "September 2023 - December 2023",
  },
] as const;

// FaReact is the react icon

export const projectsData = [
  {
    title: "Virtual Pantry",
    description:
      "I worked in a team of 2 to build a website where users could log their food storage, usage, and expiration dates. In doing so, users could see what they needed to buy.",
    tags: ["Flask", "Python", "MongoDB", "SQLAlchemy", "JavaScript"],
    imageUrl: virtual_pantry_project,
  },
  {
    title: "Field Game",
    description:
      "I developed a first-person movement game using Unity where the user could explore the terrain and solve puzzles. I used C# for gameplay mechanics and interaction.",
    tags: ["Unity", "C#"],
    imageUrl: field_game_project,
  },
  {
    title: "Coffee Finder",
    description:
      "Using the Google Maps API, I developed a website where the user could find the nearest coffee shops based on their location or custom coordinates.",
    tags: ["Python", "GoogleMapsAPI", "CSS", "HTML"],
    imageUrl: coffee_project,
  },
] as const;

export const skillsData = [
  "Python",
  "C++",
  "HTML",
  "CSS",
  "Java",
  "TypeScript",
  "React",
  "SQL",
  "Node.js",
  "Git",
  "Spring Boot",
  "Unity",
  "MongoDB",
  "x86",
  "Flask",
  "C",
  "Microsoft Office",
  "Tableau",
  "Google Teachable Machine",
] as const;