"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Row, Text, IconButton } from "@once-ui-system/core";
import { useTranslation } from "@/i18n/LanguageProvider";

const languages = [
  { code: "en" as const, label: "EN" },
  { code: "ar" as const, label: "AR" },
  { code: "he" as const, label: "HE" },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} style={{ position: "relative" }}>
      <IconButton icon="globe" variant="ghost" size="s" onClick={() => setOpen((v) => !v)} />
      <Row
        position="absolute"
        direction="column"
        background="surface"
        border="neutral-alpha-weak"
        radius="m"
        shadow="l"
        padding="4"
        gap="4"
        style={{
          top: "calc(100% + 4px)",
          insetInlineEnd: "0",
          zIndex: 100,
          minWidth: "80px",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.95)",
          pointerEvents: open ? "auto" : "none",
          visibility: open ? "visible" : "hidden",
          transition: "opacity 0.15s ease-out, transform 0.15s ease-out, visibility 0.15s",
          transformOrigin: "top right",
        }}
      >
        {languages.map((lang) => {
          const active = locale === lang.code;
          return (
            <Row
              key={lang.code}
              paddingX="12"
              paddingY="8"
              radius="m"
              style={{
                cursor: "pointer",
                background: active ? "var(--brand-alpha-weak)" : undefined,
                fontWeight: active ? 600 : 400,
                whiteSpace: "nowrap",
              }}
              onClick={() => {
                setLocale(lang.code);
                setOpen(false);
                router.refresh();
              }}
            >
              <Text variant="body-default-s">{lang.label}</Text>
            </Row>
          );
        })}
      </Row>
    </div>
  );
}
