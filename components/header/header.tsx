import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Styles from "./header.module.scss";
import "aos/dist/aos.css";
import Image from "next/image";
import logo from "../../assets/images/logo.png";
import BlueButton from "../../widgets/blueButton/BlueButton";

function Header() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((prev) => !prev);
  }

  return (
    <header className={Styles.header}>
      <nav>
        <Link href={"#"} passHref className={Styles.logo}>
          {/* <h3>thesocialcomment</h3> */}
          <Image src={logo} width={211} height={25} alt={""} />
        </Link>
        <div
          className={`${Styles.hamburger} ${open ? Styles.open : ""}`}
          onClick={toggle}
        >
          <div className={`${Styles.line} ${Styles.line1}`}></div>
          <div className={`${Styles.line} ${Styles.line2}`}></div>
          <div className={`${Styles.line} ${Styles.line3}`}></div>
        </div>
        <ul style={{ height: open ? "340px" : "0px" }}>
          <div className={Styles.link_wrapper}>
            <Link href={"#"} passHref>
              <li>About</li>
            </Link>
            <Link href={"#"} passHref>
              <li>How it works?</li>
            </Link>
            <Link href={"#"} passHref>
              <li>Premium</li>
            </Link>
            <Link href={"#"} passHref>
              <li>Virtual Portfolio</li>
            </Link>
            <Link href={"https://medium.com/@thesocialcomment"} passHref>
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
