import React from "react";
import Styles from "../text_tags.module.scss";

interface Props {
  children: React.ReactNode;
}

function Heading1({ children }: Props) {
  return <p className={Styles.heading1}>{children}</p>;
}

export default Heading1;
