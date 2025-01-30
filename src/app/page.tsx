import {
  Container,
  DataList,
  Flex,
  Heading,
  Link,
  Section,
  Separator,
  Text,
} from "@radix-ui/themes";
import Timeline from "@/components/timeline";

export default function Home() {
  return (
    <>
      <Section px="6" mt="9">
        <Container>
          <Flex direction="column" maxWidth="65ch" gap="6">
            <Heading size="9">Hey there, it’s me! 👋</Heading>
            <Flex direction="column" gap="2">
              <Heading size="5">
                I’m a software engineer and web designer.
              </Heading>
              <Text size="3" color="gray">
                I’m currently writing my master thesis at{" "}
                <Link href="https://www.kth.se/en">KTH</Link> about AI based
                floor plan recognition, and helping to build a platform for
                administrative processes at{" "}
                <Link href="https://www.polyteia.com/">Polyteia</Link>.
                Previously, I’ve worked on{" "}
                <Link href="https://www.noocoon.de/en/">Noocoon</Link> a
                planning tool for electricians.
              </Text>
            </Flex>

            <Flex direction="column" gap="5">
              <Heading as="h2" size="3">
                Find me here
              </Heading>
              <DataList.Root>
                <DataList.Item align="center">
                  <DataList.Label minWidth="9">Name</DataList.Label>
                  <DataList.Value>Lennard Scheibel</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="9">Email</DataList.Label>
                  <DataList.Value>
                    <Link href="mailto:contact@lennardscheibel.de">
                      contact@lennardscheibel.de
                    </Link>
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="9">GitHub</DataList.Label>
                  <DataList.Value>
                    <Link href="https://github.com/lscheibel">@lscheibel</Link>
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="9">Social Media</DataList.Label>
                  <DataList.Value>
                    <Link href="https://mas.to/@ls">mas.to/@ls</Link>
                  </DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="9">itch.io</DataList.Label>
                  <DataList.Value>
                    <Link href="https://tjsol.itch.io/">tjsol</Link>
                  </DataList.Value>
                </DataList.Item>
              </DataList.Root>
            </Flex>
          </Flex>
        </Container>
      </Section>

      {/*<Section>*/}
      {/*  <Container>*/}
      {/*    <Separator className="w-full" />*/}
      {/*  </Container>*/}
      {/*</Section>*/}

      <Section px="6">
        <Container>
          <Separator className="w-full" mb="6" />
          <Heading size="3" mb="9">
            Event Stream
          </Heading>
          <Timeline />
        </Container>
      </Section>
      <Section px="6">
        <Container>
          <Separator className="w-full" mb="6" />
          <footer className="flex justify-between">
            <Text color="gray">
              Lennard Scheibel, {new Date().getFullYear()}
            </Text>

            <Link color="gray" href="/impressum.json">
              Imprint
            </Link>
          </footer>
        </Container>
      </Section>
    </>
  );
}
