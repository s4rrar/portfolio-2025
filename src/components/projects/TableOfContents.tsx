"use client";

import { useEffect } from "react";
import { Column, Flex, Text } from "@once-ui-system/core";
import styles from "./projects.module.scss"; // reuse your hover styles

interface StructureItem {
  title: string;
  display: boolean;
  items: string[];
}

interface TableOfContentsProps {
  structure: StructureItem[];
  projects: {
    tableOfContent: {
      display: boolean;
    };
  };
}

const OFFSET = 100;

export default function TableOfContents({
  structure,
  projects,
}: TableOfContentsProps) {
  useEffect(() => {
    // optional: could track sections here, but removed active highlight
  }, [structure]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  if (!projects.tableOfContent.display) return null;

  return (
    <Column
      left="0"
      style={{
        top: "50%",
        transform: "translateY(-50%)",
        whiteSpace: "nowrap",
        cursor: "pointer",
      }}
      position="fixed"
      paddingLeft="24"
      gap="32"
      m={{ hide: true }}
    >
      {structure
        .filter((section) => section.display)
        .map((section) => (
          <Column key={section.title} gap="12">
            {/* Main Section */}
            <Flex
              role="button"
              tabIndex={0}
              className={styles.hover}
              cursor="interactive"
              gap="8"
              vertical="center"
              onClick={() => scrollToSection(section.title)}
              onKeyDown={(e) => e.key === "Enter" && scrollToSection(section.title)}
            >
              <Flex height="1" minWidth="16" background="neutral-strong"></Flex>
              <Text>{section.title}</Text>
            </Flex>

            {/* Sub Items */}
            {section.items.length > 0 && (
              <Column gap="4" paddingLeft="24">
                {section.items.map((item) => (
                  <Flex
                    role="button"
                    tabIndex={0}
                    key={item}
                    className={styles.hover}
                    gap="12"
                    vertical="center"
                    onClick={() => scrollToSection(item)}
                    onKeyDown={(e) => e.key === "Enter" && scrollToSection(item)}
                  >
                    <Flex height="1" minWidth="8" background="neutral-strong"></Flex>
                    <Text>{item}</Text>
                  </Flex>
                ))}
              </Column>
            )}
          </Column>
        ))}
    </Column>
  );
}
