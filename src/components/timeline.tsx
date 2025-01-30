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
} from "@radix-ui/react-icons";
import GraduationCapIcon from "@/assets/icons/graduation-cap.svg";
import BurstIcon from "@/assets/icons/burst.svg";
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
        links={
          <>
            <Link href="https://ivis-project-lscheibel.vercel.app/">Visit</Link>
            <Link href="https://github.com/lscheibel/ivis-project-1">
              Source
            </Link>
          </>
        }
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
      >
        <Text>
          A collection of mini games developed for a student service
          organisation as part of their anniversary.
        </Text>
      </TimelineItem>
      <TimelineItem
        type="web"
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
        part of the GMTK Game Jam 2022. Play online at itch.io.
      </TimelineItem>
      <TimelineItem
        type="web"
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
        type="web"
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
        <Link href="https://www.oberflaechentechnik-kempen.de/">OTK</Link>.
      </TimelineItem>
      <TimelineItem
        type="web"
        date="Sep, 2019—"
        title="Veterinarian Website"
        links={
          <>
            <Link href="https://kleintierpraxis-cremlingen.de/">Visit</Link>
          </>
        }
      >
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
  type: keyof typeof timelineItemType;
  title: React.ReactNode;
  links?: React.ReactNode;
  children?: React.ReactNode;
}

const TimelineItem = ({
  type,
  date,
  title,
  links,
  children,
}: TimelineItemProps) => {
  const { label, color } = timelineItemType[type] || {};

  return (
    <Grid columns="subgrid" gridColumn="1 / -1">
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
          direction="column"
          gap="6"
          gridColumn={{ initial: "2", lg: "3" }}
          gridRow={{ initial: "2", lg: "2" }}
        >
          <Button
            variant="ghost"
            color={color}
            className="w-full justify-start text-left text-accent-12"
          >
            <Heading size="3">{title}</Heading>
            <Badge className="ml-auto" color={color}>
              {label}
            </Badge>
          </Button>
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
          <Flex gridColumn="1" gridRow="1" align="center" justify="center">
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
