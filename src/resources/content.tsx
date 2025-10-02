import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Logo, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "AL-Hassan",
  lastName: "Sarrar",
  name: `AL-Hassan Sarrar`,
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "s4rrar@protonmail.com",
  location: "Asia/Jerusalem", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic", "Hebrew"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/s4rrar",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/s4rrar",
  },
  {
    name: "Threads",
    icon: "threads",
    link: "https://www.threads.com/@s4rrar",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>From abstract algorithms to functional, dynamic systems</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">@s4rrar</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Telegram
        </Text>
      </Row>
    ),
    href: "https://t.me/s4rrar",
  },
  subline: (
    <>
      I'm AL-Hassan Sarrar, a computer scientist,
      <br /> Interested in cybersecurity, software engineering and AI
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        AL-Hassan Sarrar is a computer scientist specializing in 
        software engineering, data science, ML, AI, and cyber security. 
        With a strong foundation in developing robust software systems, 
        analyzing complex data sets, and ensuring secure digital environments, 
        focuses on leveraging technology to solve real-world problems. 
        Passionate about innovation, stays at the forefront of industry trends to 
        deliver efficient, scalable, and secure solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Jawwal",
        timeframe: "2025",
        role: "Software Engineer",
        achievements: [
          <>
            Transformed the inspection and documentation system for telecom towers and infrastructure
            from a fully paper-based process to a complete digital platform, increasing data accuracy
            and accessibility.
          </>,
          <>
            Implemented end-to-end electronic workflows, eliminating manual paperwork and reducing
            reporting time by over 50%.
          </>,
        ],

        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.png",
            alt: "Jawwal Towers",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Al-Quds University",
        description: <>Studied computer science.</>,
      },
      {
        name: "Udemy",
        description: <>Completed multiple online courses in software development, 
        cyber security, data science, ML and AI 
        to enhance technical and professional skills.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        tags: [
          {
            name: "Figma",
            icon: "figma",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        tags: [
          {
            name: "JavaScript",
            icon: "javascript",
          },
          {
            name: "Next.js",
            icon: "nextjs",
          },
          {
            name: "Supabase",
            icon: "supabase",
          },
        ],
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },  
    ],
  },
};

export { person, social, newsletter, home, about };
