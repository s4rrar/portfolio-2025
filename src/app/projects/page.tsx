import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, person } from "@/resources";
import TableOfContents from "@/components/projects/TableOfContents";
import React from "react";

interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface Technology {
  name: string;
  icon: string;
}

interface ProjectLink {
  label: string;
  url: string;
  icon: string;
}

interface FeaturedProject {
  title: string;
  year?: string;
  role?: string;
  description: string;
  technologies?: Technology[];
  links?: ProjectLink[];
  images?: ProjectImage[];
}

interface CategoryProject {
  name: string;
  description?: string;
}

interface ProjectCategory {
  name: string;
  description: string;
  projects: CategoryProject[];
}

const projects = {
  title: "Open-Source",
  subtitle: "Some of my open-source projects",
  description: "Explore my portfolio of projects.",
  path: "/projects",
  tableOfContent: {
    display: true,
  },
  intro: {
    title: "Overview",
    display: true,
    description: "I've worked on a variety of projects, scripts and more. Here are some highlights.",
  },
  featured: {
    title: "Featured Projects",
    display: true,
    items: [
      {
        title: "PyCrypt",
        year: "2025",
        role: "Cyber Security Engineer",
        description: "A Python script encryption tool that compresses, encrypts, and obfuscates Python scripts for secure distribution. It uses AES encryption and zlib compression to protect your code from unauthorized access.",
        technologies: [
          { name: "Python", icon: "python" },
          { name: "AES-256", icon: "aes" },
        ],
        links: [
          { label: "GitHub", url: "https://github.com/s4rrar/PyCrypt", icon: "github" },
        ],
        images: [
        ],
      },
      {
        title: "Streamlit Israel-Gaza War",
        year: "2025",
        role: "Data Scientist",
        description: "This project provides an interactive dashboard to visualize and analyze the casualties data from the Israel-Gaza conflict, specifically from the October 7, 2023, war. The data is fetched daily and presented with insights such as total casualties, average deaths, and casualty proportions, as well as daily updates on the situation.",
        technologies: [
          { name: "Python", icon: "python" },
          { name: "Streamlit", icon: "streamlit" },
          { name: "Pandas", icon: "pandas" },
          { name: "Matplotlib", icon: "matplotlib" },
        ],
        links: [
          { label: "GitHub", url: "https://github.com/s4rrar/streamlit-israel-gaza-war", icon: "github" },
        ],
        images: [
          {src: "/images/projects/streamlit-israel-gaza-war.png", width: 20, height: 15}
        ],
      },
    ] as FeaturedProject[],
  },
  categories: {
    title: "Projects",
    display: true,
    groups: [
      {
        name: "Web Development",
        description: "Full-stack web applications and interactive experiences.",
        projects: [
          { name: "Jawwal Towers", description: "Infrastructure inspection documentation platform" },
          { name: "Master It", description: "E-Learning Platform for learners worldwide" },
          { name: "Ghost", description: "Versatile Telegram group protection bot" },
        ],
      },
      // {
      //   name: "Open Source",
      //   description: "Contributions to open source projects and libraries.",
      //   projects: [
      //     { name: "UI Component Library", description: "Contributed multiple components and bug fixes" },
      //     { name: "Documentation Site", description: "Improved documentation and examples" },
      //   ],
      // },
      // {
      //   name: "Mobile",
      //   description: "Mobile applications and responsive experiences.",
      //   projects: [
      //     { name: "Fitness Tracker", description: "Cross-platform mobile app built with React Native" },
      //     { name: "Recipe App", description: "Mobile-first recipe browsing and meal planning" },
      //   ],
      // },
    ],
  },
};

export async function generateMetadata() {
  return Meta.generate({
    title: projects.title,
    description: projects.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(projects.title)}`,
    path: projects.path,
  });
}

export default function Projects() {
  const structure = [
    {
      title: projects.intro.title,
      display: projects.intro.display,
      items: [],
    },
    {
      title: projects.featured.title,
      display: projects.featured.display,
      // items: projects.featured.items.map((project) => project.title),
      items: []
    },
    {
      title: projects.categories.title,
      display: projects.categories.display,
      // items: projects.categories.groups.map((category) => category.name),
      items: []
    },
  ];

  return (
    <Column maxWidth="m" className="cursor-default">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={projects.title}
        description={projects.description}
        path={projects.path}
        image={`/api/og/generate?title=${encodeURIComponent(projects.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${projects.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {projects.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} projects={projects} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column" }} horizontal="center">
        <Column flex={9} maxWidth={40}>
          <Column
            id={projects.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            <Heading variant="display-strong-xl">
              {projects.title}
            </Heading>
            <Text
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {projects.subtitle}
            </Text>
          </Column>

          {projects.intro.display && (
            <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
              {projects.intro.description}
            </Column>
          )}

          {projects.featured.display && (
            <>
              <Heading
                as="h2"
                id={projects.featured.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {projects.featured.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {projects.featured.items.map((project, index) => (
                  <Column key={`${project.title}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={project.title} variant="heading-strong-l">
                        {project.title}
                      </Text>
                      {project.year && (
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {project.year}
                        </Text>
                      )}
                    </Row>
                    {project.role && (
                      <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                        {project.role}
                      </Text>
                    )}
                    <Text variant="body-default-m" marginBottom="m">
                      {project.description}
                    </Text>
                    {project.technologies && project.technologies.length > 0 && (
                      <Row wrap gap="8" marginBottom="m">
                        {project.technologies.map((tech, techIndex) => (
                          <Tag key={`${project.title}-tech-${techIndex}`} size="l" prefixIcon={tech.icon}>
                            {tech.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {project.links && project.links.length > 0 && (
                      <Row gap="8" wrap marginBottom="m">
                        {project.links.map((link, linkIndex) => (
                          <Button
                            key={`${project.title}-link-${linkIndex}`}
                            href={link.url}
                            prefixIcon={link.icon}
                            label={link.label}
                            size="s"
                            variant="secondary"
                          />
                        ))}
                      </Row>
                    )}
                    {project.images && project.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {project.images.map((image, imgIndex) => (
                          <Row
                            key={imgIndex}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {projects.categories.display && (
            <>
              <Heading
                as="h2"
                id={projects.categories.title}
                variant="display-strong-s"
                marginBottom="m"
              >
                {projects.categories.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {projects.categories.groups.map((category, index) => (
                  <Column key={`${category.name}-${index}`} fillWidth>
                    <Text id={category.name} variant="heading-strong-l" marginBottom="4">
                      {category.name}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak" marginBottom="m">
                      {category.description}
                    </Text>
                    <Column as="ul" gap="12" paddingLeft="20">
                      {category.projects.map((project, projIndex) => (
                        <Row
                          as="li"
                          key={`${category.name}-project-${projIndex}`}
                          gap="8"
                          vertical="start"
                        >
                          <Text variant="body-default-m">
                            <Text as="span" variant="body-strong-m">
                              {project.name}
                            </Text>
                            {project.description && ` — ${project.description}`}
                          </Text>
                        </Row>
                      ))}
                    </Column>
                  </Column>
                ))}
              </Column>
            </>
          )}
        </Column>
      </Row>
    </Column>
  );
}