import React from "react";
import {
  Badge,
  Box,
  Button,
  DataList,
  Dialog,
  Flex,
  FlexProps,
  Grid,
  GridProps,
  Heading,
  IconButton,
  Link,
  ScrollArea,
  Separator,
  Text,
} from "@radix-ui/themes";
import { ClockIcon, DotFilledIcon, DotIcon } from "@radix-ui/react-icons";
import GraduationCapIcon from "@/assets/icons/graduation-cap.svg";
import PuzzleIcon from "@/assets/icons/puzzle.svg";
import BriefcaseIcon from "@/assets/icons/briefcase.svg";
import BurstIcon from "@/assets/icons/burst.svg";
import cn from "classnames";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import Image from "next/image";
import miniGames1 from "@/assets/images/mini-games-1.png";
import miniGames2 from "@/assets/images/mini-games-2.png";
import chaikin1 from "@/assets/images/chaikin-1.png";
import chaikin2 from "@/assets/images/chaikin-2.png";
import chaikin3 from "@/assets/images/chaikin-3.png";
import ivis1 from "@/assets/images/ivis-1.png";
import ivis2 from "@/assets/images/ivis-2.png";
import Figure from "@/components/figure";
import BlinkingEye from "@/components/blinking-eye";

const timelineItemType = {
  personal: { color: "yellow", label: "Personal", icon: makeIcon(PuzzleIcon) },
  uni: {
    color: "indigo",
    label: "University",
    icon: makeIcon(GraduationCapIcon),
  },
  work: { color: "grass", label: "Work", icon: makeIcon(BriefcaseIcon) },
  freelance: { color: "lime", label: "Freelance", icon: ClockIcon },
} as const;

export interface TimelineProps {}

const Timeline = ({}: TimelineProps) => {
  return (
    <Grid
      columns={{ initial: "auto 1fr", lg: "auto auto 1fr" }}
      gapX="5"
      style={{ gridAutoRows: "auto" }}
    >
      <TimelineItemNow
        title={
          <span className="flex items-center">
            Polyteia <DotFilledIcon className="mx-1" /> Tectly{" "}
            <DotFilledIcon className="mx-1" /> M.Sc.
          </span>
        }
      />

      <TimelineItem
        type="uni"
        date="Feb—Mar, 2024"
        title="Chaikin Curve Explorer"
        links={
          <>
            <Link href="https://curve-explorer.vercel.app/">Visit</Link>
            <Link href="https://github.com/lscheibel/curve-explorer">
              Source
            </Link>
          </>
        }
        details={
          <Flex direction="column" gap="4">
            <DataList.Root>
              <DataList.Item>
                <DataList.Label minWidth="9">Date</DataList.Label>
                <DataList.Value>Feb—Mar, 2024</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="9">Stack</DataList.Label>
                <DataList.Value>TypeScript, React</DataList.Value>
              </DataList.Item>
            </DataList.Root>
            <Text>
              The goal of this project was to give students an interactive tool
              to play around with the Chaikin interpolation algorithm. It has
              many small quality-of-life features that are meant to be
              discovered not explained, such as being able to double click a
              number field in order ot reset its value.
            </Text>
            <Figure>
              <ScrollArea scrollbars="horizontal">
                <Flex direction="row" wrap="nowrap" gap="2">
                  <Image
                    src={chaikin1}
                    alt={""}
                    className="w-auto h-[256px] object-cover rounded-1 shrink-0"
                  />
                  <Image
                    src={chaikin2}
                    alt={""}
                    className="w-auto h-[256px] object-cover rounded-1 shrink-0"
                  />
                  <Image
                    src={chaikin3}
                    alt={""}
                    className="w-auto h-[256px] object-cover rounded-1 shrink-0"
                  />
                </Flex>
              </ScrollArea>
            </Figure>
          </Flex>
        }
      >
        This is meant as an educational resource to play with the Chaikin curve
        algorithm, and was a quick project for a professor.
      </TimelineItem>

      <TimelineItem type="work" date="Feb, 2024—" title="Polyteia">
        As a software engineer at{" "}
        <Link href="https://www.polyteia.com/">Polyteia</Link> I’m building a
        platform for administrative processes for authorites. We are currently
        working with TypeScript, Next.js and GoLang.
      </TimelineItem>

      <TimelineItem
        type="uni"
        date="Jan, 2024"
        title="Information Visualization"
        links={
          <>
            <Link href="https://ivis-project-lscheibel.vercel.app/">Visit</Link>
            <Link href="https://github.com/lscheibel/ivis-project-1">
              Source
            </Link>
          </>
        }
        details={
          <>
            <Flex direction="column" gap="4">
              <DataList.Root>
                <DataList.Item>
                  <DataList.Label minWidth="9">Date</DataList.Label>
                  <DataList.Value>Jan, 2024</DataList.Value>
                </DataList.Item>
                <DataList.Item>
                  <DataList.Label minWidth="9">Stack</DataList.Label>
                  <DataList.Value>TypeScript, React, D3</DataList.Value>
                </DataList.Item>
              </DataList.Root>

              <Text>
                Based on a dataset from a self-evaluation survey, this dashboard
                tries to evaluate different group settings. It is a React app
                using <Link href="https://d3js.org/">D3’s</Link> helper
                functions to transform the data into coordinates, which are used
                to drive the SVG shapes. All elements were first designed in
                Figma, where the radar chart was by far the hardest to come up
                with something that would fit the overall aesthetic. In the end
                I’m very happy with what I ended up with.
              </Text>
              <Figure>
                <ScrollArea scrollbars="horizontal" className="rounded-1">
                  <Flex direction="row" wrap="nowrap" gap="2">
                    <Image
                      src={ivis2}
                      alt={""}
                      className="w-auto h-[512px] object-cover rounded-1 shrink-0"
                    />
                    <Image
                      src={ivis1}
                      alt={""}
                      className="w-auto h-[512px] object-cover rounded-1 shrink-0"
                    />
                  </Flex>
                </ScrollArea>
              </Figure>
            </Flex>
          </>
        }
      >
        A dashboard displaying different visualizations of a dataset from a
        self-evaluation survey.
      </TimelineItem>

      <TimelineItem type="work" date="Apr, 2020—Dec, 2023" title="Noocoon">
        At <Link href="https://www.noocoon.de/">Noocoon</Link> I helped build
        the client of a cloud based planning tool for electricians. A main
        responsibility was the creation of a{" "}
        <Link href="https://www.noocoon.de/expert/installationsplan-erstellen/">
          lightweight CAD application
        </Link>{" "}
        allowing users to place electric installations on a floor plan.
      </TimelineItem>

      <TimelineItem
        type="freelance"
        date="May, 2022—Jan, 2023"
        title="Student Life Mini Games"
        links={
          <>
            <Link href="https://play.google.com/store/apps/details?id=de.stwon.onehundred">
              Play Store
            </Link>
            <Link href="https://apps.apple.com/at/app/studiwerk-100/id1619934636">
              App Store
            </Link>
          </>
        }
        details={
          <Flex direction="column" gap="4">
            <DataList.Root>
              <DataList.Item>
                <DataList.Label minWidth="9">Date</DataList.Label>
                <DataList.Value>May, 2022—Jan, 2023</DataList.Value>
              </DataList.Item>
              <DataList.Item>
                <DataList.Label minWidth="9">Stack</DataList.Label>
                <DataList.Value>Illustrator, Godot</DataList.Value>
              </DataList.Item>
            </DataList.Root>
            <Text>
              This was a project with the{" "}
              <Link href="https://stw-on.de/">
                Studierendenwerk OstNiedersachsen
              </Link>
              . Together with{" "}
              <Link href="https://timoschwarzer.com/">Timo</Link>, we developed
              6 different mini games that depict a typical students life and how
              they interact with the student service. I was responsible for
              designing the look and feel of the games, as well as creating the
              sprites and assets.
            </Text>
            <Figure
              caption={
                <Text color="gray">Screenshots from two of the games.</Text>
              }
            >
              <ScrollArea scrollbars="horizontal">
                <Flex direction="row" wrap="nowrap" gap="2">
                  <Image
                    src={miniGames1}
                    alt={""}
                    className="w-auto h-[512px] object-cover rounded-1 shrink-0"
                  />
                  <Image
                    src={miniGames2}
                    alt={""}
                    className="w-auto h-[512px] object-cover rounded-1 shrink-0"
                  />
                </Flex>
              </ScrollArea>
            </Figure>
          </Flex>
        }
      >
        <Text>
          A collection of mini games developed for a student service
          organisation as part of their anniversary. I was responsible for
          creating the assets and designing the levels.
        </Text>
      </TimelineItem>

      <TimelineItem
        type="personal"
        date="Aug, 2022"
        title="Mini Dice"
        links={
          <>
            <Link href="https://timoschwarzer.itch.io/minidice">
              Play on itch.io
            </Link>
          </>
        }
      >
        A game about playing mini golf with dice, developed with a friend as
        part of the GMTK Game Jam 2022. I was mostly responsible for designing
        the look of the game and creating the assets.
      </TimelineItem>

      <TimelineItem
        type="uni"
        date="Feb—Mar, 2022"
        title="Redux Yjs Bindings"
        links={
          <>
            <Link href="https://github.com/lscheibel/redux-yjs-bindings">
              Source
            </Link>
          </>
        }
      >
        A very small bridge to connect Redux with a Yjs, allows you to use the
        synchronization features of Yjs with the data management capabilities of
        Redux.
      </TimelineItem>

      <TimelineItem
        type="freelance"
        date="Nov, 2020—Jan, 2021"
        title="OTK GmbH"
        links={
          <>
            <Link href="https://www.oberflaechentechnik-kempen.de/">Visit</Link>
          </>
        }
      >
        Together with <Link href="https://v1b.es/">v1bes</Link> I worked on the
        website for{" "}
        <Link href="https://www.oberflaechentechnik-kempen.de/">OTK</Link> as a
        frontend developer.
      </TimelineItem>

      <TimelineItem
        type="freelance"
        date="Sep, 2019—"
        title="Veterinarian Website"
        links={
          <>
            <Link href="https://kleintierpraxis-cremlingen.de/">Visit</Link>
          </>
        }
      >
        Website for a local vet in Cremlingen, Germany. Together with the client
        I developed the general branding, logo and website. The site runs on
        Sapper (Svelte) and uses Strapi for content management.
      </TimelineItem>

      <TimelineItem type="work" date="Apr, 2019—Apr, 2020" title="3pc">
        As a frontend developer at the web agency{" "}
        <Link href="https://3pc.de/en/">3pc</Link> I build website components
        for a variety of clients, including{" "}
        <Link href="https://berlinischegalerie.de/en/">
          Berlinische Galerie
        </Link>
        ,{" "}
        <Link href="https://www.lessingtheater-wf.de/">
          Lessingtheater Wolfenbüttel
        </Link>{" "}
        and many more.
      </TimelineItem>

      <TimelineSpacer height="200px" />

      <TimelineItemOrigin />
    </Grid>
  );
};

export default Timeline;

interface TimelineItemProps {
  date: React.ReactNode;
  type: keyof typeof timelineItemType;
  title: React.ReactNode;
  links?: React.ReactNode;
  details?: React.ReactNode;
  children?: React.ReactNode;
}

const TimelineItem = ({
  type,
  date,
  title,
  links,
  details,
  children,
}: TimelineItemProps) => {
  const { label, color } = timelineItemType[type] || {};

  return (
    <Dialog.Root>
      <Grid columns="subgrid" gridColumn="1 / -1" className="group/item">
        <TimelineSpacer />

        <Grid
          rows={{ initial: "2", lg: "1" }}
          columns="subgrid"
          gridColumn="1 / -1"
          align="center"
          style={{ gridAutoFlow: "row dense" }}
        >
          <TimelineYarn gridColumn="1" gridRow="1" className="lg:hidden" />
          <Flex
            gridColumn={{ initial: "2", lg: "1" }}
            gridRow={{ initial: "1", lg: "2" }}
            justify={{ initial: "start", lg: "end" }}
          >
            <Text color="gray" align={{ initial: "left", lg: "right" }}>
              {date}
            </Text>
          </Flex>

          <TimelineYarnItem>
            {type ? <TimelineEventIcon type={type} /> : <TimelineYarn />}
          </TimelineYarnItem>

          <Flex
            direction="row"
            gap="3"
            align="baseline"
            gridColumn={{ initial: "2", lg: "3" }}
            gridRow={{ initial: "2", lg: "2" }}
            className="flex flex-nowrap justify-between"
          >
            <Heading size="3">{title}</Heading>
            {details ? (
              <Dialog.Trigger>
                <Button
                  variant="ghost"
                  size="1"
                  color="gray"
                  className="lg:opacity-100 group-hover/item:opacity-100 bg-transparent inline ml-auto md:ml-0"
                >
                  View
                  <BlinkingEye width="14" height="14" className="inline ml-2" />
                </Button>
              </Dialog.Trigger>
            ) : null}
            <Badge className="md:ml-auto" color={color}>
              {label}
            </Badge>
          </Flex>
        </Grid>

        <TimelineSpacer height="8px" />

        <Grid
          columns="subgrid"
          gridColumn="1 / -1"
          align="start"
          style={{ gridAutoFlow: "row dense" }}
        >
          <TimelineYarn
            height="100%"
            gridColumn={{ initial: "1", lg: "2" }}
            gridRow={{ initial: "1 / 3", lg: "1" }}
          />

          <Box maxWidth="65ch" gridColumn={{ initial: "2", lg: "3" }}>
            {children}
          </Box>

          {details ? (
            <Dialog.Content
              maxWidth="calc(100vw - 32px)"
              width="calc(65ch + 128px)"
              className="overflow-auto p-rx-6 px-rx-4 xs:p-rx-6 sm:p-rx-9"
            >
              <Dialog.Title mb="5">{title}</Dialog.Title>
              {details}
            </Dialog.Content>
          ) : null}

          <Flex
            justify={{ initial: "start", lg: "end" }}
            direction="row"
            gap="4"
            className="text-right"
            gridColumn={{ initial: "2", lg: "1" }}
            mt={{ initial: "3", lg: "0" }}
          >
            {links}
          </Flex>
        </Grid>

        <TimelineSpacer />
      </Grid>
    </Dialog.Root>
  );
};

interface TimelineYarnProps {}

const TimelineYarn = (props: TimelineYarnProps & FlexProps) => {
  return (
    <Flex justify="center" style={{ alignSelf: "stretch" }} {...props}>
      <Separator orientation="vertical" className="h-full" />
    </Flex>
  );
};

interface TimelineSpacerProps {}

const TimelineSpacer = (props: TimelineSpacerProps & GridProps) => {
  return (
    <Grid
      columns="subgrid"
      gridColumn="1 / -1"
      height="32px"
      {...props}
      className={cn("relative", props.className)}
    >
      <TimelineYarn gridColumn={{ initial: "1", lg: "2" }} />
    </Grid>
  );
};

interface TimelineItemNowProps {
  title: React.ReactNode;
}

const TimelineItemNow = ({ title }: TimelineItemNowProps) => {
  return (
    <Grid columns="subgrid" gridColumn="1 / -1">
      <Grid
        rows={{ initial: "2", lg: "1" }}
        columns="subgrid"
        gridColumn="1 / -1"
        align="center"
        style={{ gridAutoFlow: "row dense" }}
      >
        <Flex
          gridColumn={{ initial: "2", lg: "1" }}
          gridRow={{ initial: "1", lg: "2" }}
          justify={{ initial: "start", lg: "end" }}
        >
          <Text color="gray" align={{ initial: "left", lg: "right" }}>
            Now
          </Text>
        </Flex>

        <TimelineYarnItem attach="bottom">
          <Flex
            gridColumn="1"
            gridRow="1"
            align="center"
            justify="center"
            className="h-[5px]"
          >
            <div className="relative -m-2 z-10">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gray-4 size-rx-2 rounded-full animate-ping" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-surface size-rx-1 rounded-full" />
              </div>
              <DotIcon color="gray" className="relative" />
            </div>
          </Flex>
        </TimelineYarnItem>

        <Flex
          direction="column"
          gap="6"
          gridColumn={{ initial: "2", lg: "3" }}
          gridRow={{ initial: "2", lg: "2" }}
        >
          <Heading size="3">{title}</Heading>
        </Flex>
      </Grid>

      <TimelineSpacer />
    </Grid>
  );
};

interface TimelineItemOriginProps {}

const TimelineItemOrigin = ({}: TimelineItemOriginProps) => {
  return (
    <Grid columns="subgrid" gridColumn="1 / -1" className="grid-flow-row-dense">
      <Box gridColumn={{ initial: "2", lg: "1" }}>
        <Text color="gray" align="right">
          {/*June, 2000*/}
        </Text>
      </Box>

      <Grid
        gridColumn={{ initial: "1", lg: "2" }}
        justify="center"
        columns="1"
        rows="1"
        className="relative h-full"
      >
        <Flex gridColumn="1" gridRow="1" align="center" justify="center">
          <div className="relative">
            <BurstIcon className="text-grayA-7" />
            {/*<SunIcon color="gray" className="text-grayA-6" />*/}
          </div>
        </Flex>
      </Grid>
    </Grid>
  );
};

function makeIcon(
  Component: React.FunctionComponent<React.RefAttributes<SVGSVGElement>>,
) {
  const Icon = ({ color = "currentColor", ...props }: IconProps) => {
    return <Component fill={color} {...props} />;
  };
  Icon.displayName = Component.name;
  return Icon;
}

interface TimelineIconProps {
  children: React.ReactNode;
  attach?: "both" | "bottom" | "top" | "none";
}

const TimelineYarnItem = ({ attach = "both", children }: TimelineIconProps) => {
  return (
    <Flex
      direction="column"
      className="relative h-full"
      gridColumn={{ initial: "1", lg: "2" }}
      gridRow={{ initial: "2", lg: "2" }}
    >
      <div className="flex-shrink flex-grow misn-h-0 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          {attach === "both" || attach === "top" ? (
            <Separator orientation="vertical" className="h-full" />
          ) : null}
        </div>
      </div>
      <div className="relative flex-shrink-0">{children}</div>
      <div className="flex-shrink flex-grow min-h-0 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          {attach === "both" || attach === "bottom" ? (
            <Separator orientation="vertical" className="h-full" />
          ) : null}
        </div>
      </div>
    </Flex>
  );
};

interface TimelineEventIconProps {
  type: keyof typeof timelineItemType;
}

const TimelineEventIcon = ({ type }: TimelineEventIconProps) => {
  const Icon = timelineItemType[type]?.icon;

  return (
    <IconButton
      className="size-[33px]"
      radius="full"
      variant="outline"
      color="gray"
    >
      {Icon && <Icon type={type} />}
    </IconButton>
  );
};
