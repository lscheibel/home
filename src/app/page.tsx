import {
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Section,
  Separator,
  Text,
} from "@radix-ui/themes";
import Timeline from "@/components/timeline";
import ContactData from "@/components/contact-data";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Section px="6" mt="9">
        <Container>
          <Flex direction="column" maxWidth="65ch" gap="6">
            <Heading size="9" className="text-balance">
              Hey there, it’s me! 👋
            </Heading>
            <Flex direction="column" gap="2">
              <Heading size="5">
                I’m a software engineer and web designer.
              </Heading>
              <Text size="3">
                I’m currently writing my master thesis at{" "}
                <Link href="https://www.kth.se/en">KTH</Link> about AI based
                floor plan recognition, and helping to simplify public
                administration for authorities at{" "}
                <Link href="https://www.polyteia.com/">Polyteia</Link>.
                Previously, I’ve worked on{" "}
                <Link href="https://www.noocoon.de/en/">Noocoon</Link>, a
                planning tool for electricians.
              </Text>
            </Flex>
          </Flex>
        </Container>
      </Section>

      <Container px="6">
        <Separator className="w-full" />
      </Container>

      <Section px="6">
        <Container>
          <Grid columns={{ initial: "auto", sm: "auto 1fr" }} gap="9">
            <Flex direction="column" gap="5">
              <ContactData align="start" />
            </Flex>
            <Separator className="w-full sm:hidden" />
            <Flex direction="column">
              <Timeline />
            </Flex>
          </Grid>
        </Container>
      </Section>
      <Footer />
    </>
  );
}
