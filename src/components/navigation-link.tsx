"use client";

import React from "react";
import { Link, LinkProps } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

export interface NavigationLinkProps extends LinkProps {
  direction?: "forward" | "back";
}

const NavigationLink = ({
  direction = "back",
  ...props
}: NavigationLinkProps) => {
  const router = useRouter();
  return (
    <Link
      {...props}
      href="/"
      onClick={(e) => {
        e.preventDefault();
        if (direction === "back") router.back();
        if (direction === "forward") router.forward();
      }}
    ></Link>
  );
};

export default NavigationLink;
