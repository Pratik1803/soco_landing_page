import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Styles from "./header.module.scss";
import "aos/dist/aos.css";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import BlueButton from "../../widgets/blueButton/BlueButton";

interface IProps {
  openHam: boolean;
  setOpenHam: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ openHam, setOpenHam }: IProps) {
  function toggle() {
    if (window.innerWidth <= 850) {
      setOpenHam((prev) => !prev);
    }
  }

  return (
    <header className={Styles.header}>
      <nav>
        <Link href={"#"} passHref className={Styles.logo}>
          <Image src={logo} width={211} height={50} alt={""} />
        </Link>
        <div
          className={`${Styles.hamburger} ${openHam ? Styles.open : ""}`}
          onClick={toggle}
        >
          <div className={`${Styles.line} ${Styles.line1}`}></div>
          <div className={`${Styles.line} ${Styles.line2}`}></div>
          <div className={`${Styles.line} ${Styles.line3}`}></div>
        </div>
        <ul style={{ height: openHam ? "340px" : "0px" }}>
          <div className={Styles.link_wrapper}>
            <Link href={"#"} passHref onClick={toggle}>
              <li>About</li>
            </Link>
            <Link href={"#"} passHref onClick={toggle}>
              <li>How it works?</li>
            </Link>
            <Link href={"#"} passHref onClick={toggle}>
              <li>Premium</li>
            </Link>
            <Link href={"#"} passHref onClick={toggle}>
              <li>Virtual Portfolio</li>
            </Link>
            <Link
              href={"https://medium.com/@thesocialcomment"}
              passHref
              onClick={toggle}
            >
              <li>Blog</li>
            </Link>
            <div className={Styles.loginSignupMob}>
              <Button>Login</Button>
            </div>
          </div>
        </ul>
      </nav>
      <div className={Styles.loginSignup}>
        <Button>Login</Button>
      </div>
    </header>
  );
}

export default Header;
