import React from "react";
import Styles from "../text_tags.module.scss";

interface Props {
  children: React.ReactNode;
}

function Heading3({ children }: Props) {
  return <p className={Styles.heading3}>{children}</p>;
}

export default Heading3;
