import React from "react";
import {
  Badge,
  Box,
  Button,
  Flex,
  FlexProps,
  Grid,
  GridProps,
  Heading,
  IconButton,
  Link,
  Separator,
  Text,
} from "@radix-ui/themes";
import {
  BackpackIcon,
  DotFilledIcon,
  DotIcon,
  GlobeIcon,
  MobileIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import GraduationCapIcon from "@/assets/icons/graduation-cap.svg";
import { Collapsible } from "radix-ui";
import "./timeline.css";
import cn from "classnames";
import { IconProps } from "@radix-ui/react-icons/dist/types";

const timelineItemType = {
  work: { color: "green", label: "Work", icon: BackpackIcon },
  web: { color: "tomato", label: "Web", icon: GlobeIcon },
  app: { color: "bronze", label: "App", icon: MobileIcon },
  uni: { color: "indigo", label: "Uni", icon: makeIcon(GraduationCapIcon) },
} as const;

export interface TimelineProps {}

const Timeline = ({}: TimelineProps) => {
  return (
    <Grid columns="auto auto 1fr" gapX="5" style={{ gridAutoRows: "auto" }}>
      <TimelineItemNow
        title={
          <span className="flex items-center">
            Polyteia <DotFilledIcon /> Tectly <DotFilledIcon /> M.Sc.
          </span>
        }
      />
      <TimelineItem
        type="uni"
        date="Feb—Mar, 2024"
        title="Chaikin Curve Explorer"
      >
        An educational resource to play with the Chaikin curve algorithm.
      </TimelineItem>
      <TimelineItem type="work" date="Feb, 2024—" title="Polyteia">
        As a software engineer at{" "}
        <Link href="https://www.polyteia.com/">Polyteia</Link> I’m building a
        platform for administrative processes for authorites.
      </TimelineItem>
      <TimelineItem
        type="uni"
        date="Jan, 2024"
        title="Information Visualization"
      >
        A dashboard displaying different visualizations of a simple dataset.
      </TimelineItem>
      <TimelineItem type="work" date="Apr, 2020—Dec, 2023" title="Noocoon">
        At Noocoon I helped build the client of a cloud based planning tool for
        electricians. A main responsibility was the creation of a lightweight
        CAD system allowing users to place electric installations on a floor
        plan.
      </TimelineItem>
      <TimelineItem
        type="app"
        date="May, 2022—Jan, 2023"
        title="Mini Games Collection"
      >
        <Text>
          A collection of mini games developed for a student service
          organisation as part of their anniversary.
        </Text>
        <Flex>
          <Link href="https://play.google.com/store/apps/details?id=de.stwon.onehundred">
            Play Store
          </Link>
          <Link href="https://apps.apple.com/at/app/studiwerk-100/id1619934636">
            App Store
          </Link>
        </Flex>
      </TimelineItem>
      <TimelineItem type="web" date="Aug, 2022" title="Mini Dice">
        A game about playing mini golf with dice, developed with a friend as
        part of the GMTK Game Jam 2022. Play online at itch.io.
      </TimelineItem>
      <TimelineItem type="web" date="Feb—Mar, 2022" title="Redux Yjs Bindings">
        A very small bridge to connect Redux with a Yjs, allows you to use the
        synchronization features of Yjs with the data management capabilities of
        Redux.
      </TimelineItem>
      <TimelineItem type="web" date="Nov, 2020—Jan, 2021" title="OTK GmbH">
        Together with <Link href="https://v1b.es/">v1bes</Link> I worked on the
        website for{" "}
        <Link href="https://www.oberflaechentechnik-kempen.de/">OTK</Link>.
      </TimelineItem>
      <TimelineItem type="web" date="Sep, 2019—" title="Veterinarian Website">
        Website for a local vet in Cremlingen, Germany.
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
  type: "app" | "web" | "uni" | "work";
  title: React.ReactNode;
  children: React.ReactNode;
}

const TimelineItem = ({ type, date, title, children }: TimelineItemProps) => {
  const { icon: Icon, label, color } = timelineItemType[type];

  return (
    <Collapsible.Root asChild>
      <Grid columns="subgrid" gridColumn="1 / -1">
        <TimelineSpacer />

        <Grid rows="1" columns="subgrid" gridColumn="1 / -1" align="center">
          <Flex gridColumn="1" justify="end">
            <Text color="gray" align="right">
              {date}
            </Text>
          </Flex>
          <Flex direction="column" className="relative h-full" gridColumn="2">
            <div className="flex-shrink flex-grow min-h-0 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Separator orientation="vertical" className="h-full" />
              </div>
            </div>
            <div className="relative flex-shrink-0">
              <IconButton size="2" radius="full" variant="outline" color="gray">
                <Icon type={type} />
              </IconButton>
            </div>
            <div className="flex-shrink flex-grow min-h-0 relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Separator orientation="vertical" className="h-full" />
              </div>
            </div>
          </Flex>
          <Flex direction="column" gap="6" gridColumn="3">
            <Button
              variant="ghost"
              color={color}
              className="w-full justify-start text-left text-accent-12"
            >
              <Heading size="3">{title}</Heading>
              <Badge className="ml-auto" color={color}>
                {label}
              </Badge>
              {/*<Text className="ml-auto" color="gray">more</Text>*/}
            </Button>
          </Flex>
        </Grid>

        <TimelineSpacer height="8px" />

        <Grid rows="1" columns="subgrid" gridColumn="1 / -1" align="start">
          <Flex direction="column" gap="2" className="text-right">
            <Link href="github.com">Source</Link>
          </Flex>

          <TimelineYarn height="100%" />

          <Box maxWidth="65ch">{children}</Box>
        </Grid>

        <TimelineSpacer />
      </Grid>
    </Collapsible.Root>
  );
};

interface TimelineYarnProps {}

const TimelineYarn = (props: TimelineYarnProps & FlexProps) => {
  return (
    <Flex gridColumn="2" justify="center" {...props}>
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
      <TimelineYarn />
    </Grid>
  );
};

interface TimelineItemNowProps {
  title: React.ReactNode;
}

const TimelineItemNow = ({ title }: TimelineItemNowProps) => {
  return (
    <Grid columns="subgrid" gridColumn="1 / -1">
      <Grid rows="1" columns="subgrid" gridColumn="1 / -1" align="center">
        <Text color="gray" align="right">
          Now
        </Text>
        <Grid justify="center" columns="1" rows="1" className="relative h-full">
          {/*<div className="absolute w-[1px] top-0 bottom-0 left-[50%] bg-gray-4" />*/}

          <Flex
            gridColumn="1"
            gridRow="1"
            align="end"
            justify="center"
            className="relative"
          >
            <Separator
              orientation="vertical"
              style={{ height: "calc(50% - 2px)" }}
            />
          </Flex>
          <Flex gridColumn="1" gridRow="1" align="center" justify="center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gray-4 size-rx-2 rounded-full animate-ping" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-surface size-rx-1 rounded-full" />
              </div>
              <DotIcon color="gray" className="relative" />
            </div>
          </Flex>
        </Grid>
        <Flex direction="column" gap="6">
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
    <Grid columns="subgrid" gridColumn="1 / -1">
      <Grid rows="1" columns="subgrid" gridColumn="1 / -1" align="center">
        <Text color="gray" align="right">
          {/*June, 2000*/}
        </Text>
        <Grid
          justify="center"
          columns="1"
          rows="1"
          className="relative h-full"
          py="1"
        >
          {/*<div className="absolute w-[1px] top-0 bottom-0 left-[50%] bg-gray-4" />*/}

          <Flex
            gridColumn="1"
            gridRow="1"
            align="start"
            justify="center"
            className="relative"
          >
            {/*<Separator*/}
            {/*  orientation="vertical"*/}
            {/*  style={{ height: "calc(50% - 8px)" }}*/}
            {/*/>*/}
          </Flex>
          <Flex gridColumn="1" gridRow="1" align="center" justify="center">
            <div className="relative">
              <SunIcon color="gray" />
            </div>
          </Flex>
        </Grid>
        <Flex direction="column" gap="6">
          {}
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
