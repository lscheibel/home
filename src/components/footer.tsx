import React from "react";
import { Container, Link, Section, Separator, Text } from "@radix-ui/themes";
import { DotFilledIcon } from "@radix-ui/react-icons";

export interface FooterProps {}

const Footer = ({}: FooterProps) => {
  return (
    <Section px="6">
      <Container>
        <Separator className="w-full" mb="6" />
        <footer className="flex gap-rx-2 items-center">
          <Text color="gray">Lennard Scheibel, {new Date().getFullYear()}</Text>
          <Text color="gray">
            <DotFilledIcon />
          </Text>
          <Link href="https://github.com/lscheibel/home" color="gray">
            Source
          </Link>
          <Link className="ml-auto" color="gray" href="/impressum">
            Imprint
          </Link>
        </footer>
      </Container>
    </Section>
  );
};

export default Footer;
