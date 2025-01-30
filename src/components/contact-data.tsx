import { DataList, Link } from "@radix-ui/themes";
import React from "react";

export interface ContactDataProps {
  align: "center" | "start" | "end";
}

const ContactData = ({ align }: ContactDataProps) => {
  return (
    <DataList.Root orientation="vertical">
      <DataList.Item align={align}>
        <DataList.Label minWidth="9">Name</DataList.Label>
        <DataList.Value>Lennard Scheibel</DataList.Value>
      </DataList.Item>
      <DataList.Item align={align}>
        <DataList.Label minWidth="9">Email</DataList.Label>
        <DataList.Value>
          <Link href="mailto:contact@lennardscheibel.de">
            contact@lennardscheibel.de
          </Link>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item align={align}>
        <DataList.Label minWidth="9">GitHub</DataList.Label>
        <DataList.Value>
          <Link href="https://github.com/lscheibel">@lscheibel</Link>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item align={align}>
        <DataList.Label minWidth="9">Social Media</DataList.Label>
        <DataList.Value>
          <Link href="https://mas.to/@ls">mas.to/@ls</Link>
        </DataList.Value>
      </DataList.Item>
      <DataList.Item align={align}>
        <DataList.Label minWidth="9">itch.io</DataList.Label>
        <DataList.Value>
          <Link href="https://tjsol.itch.io/">tjsol</Link>
        </DataList.Value>
      </DataList.Item>
    </DataList.Root>
  );
};

export default ContactData;
