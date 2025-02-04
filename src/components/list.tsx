import React from "react";

export interface ListProps
  extends React.HTMLProps<HTMLUListElement | HTMLOListElement> {
  variant?: "unordered" | "ordered";
}

export const List = ({ variant = "unordered", ...props }: ListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = variant === "unordered" ? "ul" : "ol";
  return (
    <Component className="my-rx-4 ml-6 list-disc [&>li]:mt-1" {...props} />
  );
};

export default List;

export interface ListItemProps extends React.HTMLProps<HTMLLIElement> {}

export const ListItem = (props: ListItemProps) => {
  return <li {...props} />;
};
