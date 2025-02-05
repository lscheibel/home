import React from "react";
import { Container, Link, Section, Separator, Text } from "@radix-ui/themes";
import ThemeToggleButton from "@/components/theme-toggle-button";

export interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <Section px="6">
      <Container>
        <Separator className="w-full" mb="6" />
        <footer className="flex gap-rx-2 items-center">
          <Text color="gray">Lennard Scheibel, {new Date().getFullYear()}</Text>
          <Text color="gray">•</Text>
          <Link color="gray" href="/impressum">
            Imprint
          </Link>
          <Text color="gray">•</Text>
          <Link href="https://github.com/lscheibel/home" color="gray">
            Source
          </Link>

          <ThemeToggleButton className="ml-auto" />
        </footer>
      </Container>
    </Section>
  );
};

export default Footer;
