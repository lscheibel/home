import React from "react";

export interface FigureProps extends React.HTMLProps<HTMLDivElement> {
  caption?: React.ReactNode;
  children: React.ReactNode;
}

const Figure = ({ caption, children, ...props }: FigureProps) => {
  return (
    <figure {...props}>
      {children}
      {caption && <figcaption className="mt-1">{caption}</figcaption>}
    </figure>
  );
};

export default Figure;
