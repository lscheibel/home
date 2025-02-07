import { ImageResponse } from "next/og";

// https://vercel.com/guides/using-custom-font
async function loadGoogleFont(font: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font}`;
  const css = await (await fetch(url)).text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  );

  if (resource) {
    const response = await fetch(resource[1]);
    if (response.status == 200) {
      return await response.arrayBuffer();
    }
  }

  throw new Error("failed to load font data");
}

// Image metadata
export const alt = "Hey there, it's me! Lennard Scheibel";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

// Image generation
export default async function Image() {
  // Font loading, process.cwd() is Next.js project directory
  // const interSemiBold = await readFile(
  //   join(process.cwd(), "assets/Inter-SemiBold.ttf"),
  // );

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
          letterSpacing: "-.02em",
          fontWeight: 700,
          backgroundImage: "linear-gradient(-45deg, #FFF, #FFFAFA)",
          fontFamily: "Inter, serif",
          padding: "96px 102px",
        }}
      >
        <span
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            padding: "0px",
            letterSpacing: "-.02em",
            fontSize: 150,
            fontFamily: "Inter, serif",
            width: "auto",
            maxWidth: 800,
            textAlign: "left",
            lineHeight: 0.95,
            color: "#1C2024",
            fontWeight: 700,
          }}
        >
          Hey there, it’s me!
        </span>
        <span
          style={{
            fontSize: 52,
            color: "#60646C",
            fontWeight: 400,
            fontFamily: "Inter, serif",
            marginTop: "auto",
            marginLeft: "auto",
            textAlign: "right",
            letterSpacing: "-.015em",
          }}
        >
          Lennard Scheibel
        </span>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Inter",
          data: await loadGoogleFont("Inter:wght@700"),
          style: "normal",
          weight: 700,
        },
        {
          name: "Inter",
          data: await loadGoogleFont("Inter:wght@400"),
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
