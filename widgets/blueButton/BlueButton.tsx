import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import Styles from "./BlueButton.module.scss";

interface IProps {
  title: string;
  link: string;
  inverted?: boolean;
}

function BlueButton({ title, link, inverted }: IProps) {
  return (
    <Link href={link} passHref className={Styles.link}>
      <Button className={inverted ? Styles.inverted : ""}>
        <p>{title}</p>
      </Button>
    </Link>
  );
}

export default BlueButton;
