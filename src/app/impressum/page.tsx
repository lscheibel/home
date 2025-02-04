import {
  Box,
  Container,
  DataList,
  Flex,
  Heading,
  Link,
  Section,
  Separator,
  Text,
} from "@radix-ui/themes";
import Footer from "@/components/footer";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import NavigationLink from "@/components/navigation-link";
import List, { ListItem } from "@/components/list";

export default function Home() {
  return (
    <>
      <Section px="6">
        <Container>
          <Flex direction="row" gap="2">
            <NavigationLink className="flex gap-rx-2 items-center" color="gray">
              <ArrowLeftIcon /> Back
            </NavigationLink>
          </Flex>
          <Separator className="w-full" mt="6" />
        </Container>
      </Section>
      <Section px="6">
        <Container>
          <Heading size="9" className="text-pretty" mb="6">
            Impressum
          </Heading>
          <DataList.Root
            mb="6"
            orientation="vertical"
            className="md:flex-row md:gap-rx-6"
          >
            <DataList.Item>
              <DataList.Label>Name</DataList.Label>
              <DataList.Value>Lennard Scheibel</DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Kontakt (E-Mail)</DataList.Label>
              <DataList.Value>
                <Link href="mailto:contact@lennardscheibel.de">
                  contact@lennardscheibel.de
                </Link>
              </DataList.Value>
            </DataList.Item>
            <DataList.Item>
              <DataList.Label>Umsatzsteuer-ID</DataList.Label>
              <DataList.Value>DE326967967</DataList.Value>
            </DataList.Item>
          </DataList.Root>

          <Heading size="7" mb="4">
            Haftungsausschluss
          </Heading>
          <Box className="md:columns-2 md:gap-x-rx-4">
            <Heading size="5" mb="2">
              Haftung für Inhalte
            </Heading>
            <Text>
              Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen
              zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung
              oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung
              ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
            </Text>
            <Heading size="5" mb="2" mt="4">
              Haftung für Links
            </Heading>
            <Text className="block">
              Mein Angebot enthält gegebenfalls Links zu externen Webseiten
              Dritter, auf deren Inhalte ich keinen Einfluss habe. Deshalb kann
              ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für
              die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten
              wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
              überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle
              der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werde ich derartige Links umgehend entfernen.
            </Text>
            <Heading size="5" mb="2" mt="4">
              Urheberrecht
            </Heading>
            <Text className="block">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitte Ich um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werde ich derartige Inhalte umgehend entfernen.
            </Text>
          </Box>

          <Heading size="7" mb="4" mt="6">
            Datenschutzerklärung
          </Heading>
          <Box className="md:columns-2 md:gap-x-rx-4" style={{ widows: 3 }}>
            <Heading size="5" mb="2">
              Server Logs
            </Heading>
            <Text>
              Der Server, von dem diese Webseite verfügbar gemacht wird,
              speichert beim Seitenbesuch automatisch Informationen in Server
              Logs. Dies sind:
              <List>
                <ListItem>Browsertyp und Browserversion</ListItem>
                <ListItem>verwendetes Betriebssystem</ListItem>
                <ListItem>Referrer URL</ListItem>
                <ListItem>
                  Hostname und IP-Adresse des zugreifenden Rechners
                </ListItem>
                <ListItem>Uhrzeit der Serveranfrage</ListItem>
              </List>
              Diese Daten können nicht bestimmten Personen zugeordnet werden.
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen. Es wird vorbehalten, diese Daten nachträglich
              zu prüfen, sollten konkrete Anhaltspunkte für eine rechtswidrige
              Nutzung bekannt werden.
            </Text>
            <Heading size="5" mb="2" mt="4">
              Verschlüsselung
            </Heading>
            <Text>
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Wenn die SSL- bzw. TLS-Verschlüsselung
              aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
              von Dritten mitgelesen werden
            </Text>
            <Heading size="5" mb="2" mt="4">
              Recht auf Auskunft, Löschung, Sperrung
            </Heading>
            <Text>
              Es besteht zu jederzeit das Recht auf unentgeltliche Auskunft über
              gespeicherte personenbezogene Daten, deren Herkunft und Empfänger
              und den Zweck der Datenverarbeitung sowie ein Recht auf
              Berichtigung, Sperrung oder Löschung dieser Daten. Für weitere
              Fragen zum Thema personenbezogene Daten steht die oben angegebene
              E-Mail-Adresse zur Verfügung.
            </Text>
          </Box>
        </Container>
      </Section>

      <Footer />
    </>
  );
}
