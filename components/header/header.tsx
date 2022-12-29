import { Button } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Styles from "./header.module.scss";
import "aos/dist/aos.css";

function Header() {
  const [open, setOpen] = useState(false);

  function toggle() {
    setOpen((prev) => !prev);
  }

  return (
    <header className={Styles.header} data-aos="fade-up">
      <nav>
        <Link href={"#"} passHref className={Styles.logo}>
          <h3>thesocialcomment</h3>
        </Link>
        <div
          className={`${Styles.hamburger} ${open ? Styles.open : ""}`}
          onClick={toggle}
        >
          <div className={`${Styles.line} ${Styles.line1}`}></div>
          <div className={`${Styles.line} ${Styles.line2}`}></div>
          <div className={`${Styles.line} ${Styles.line3}`}></div>
        </div>
        <ul style={{ height: open ? "400px" : "0px" }}>
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
            <Link href={"#"} passHref>
              <li>Blog</li>
            </Link>
            <div className={Styles.loginSignupMob}>
              <Button>Login</Button>
              <hr />
              <Button>Sign Up</Button>
            </div>
          </div>
        </ul>
      </nav>
      <div className={Styles.loginSignup}>
        <Button>Login</Button>
        <hr />
        <Button>Sign Up</Button>
      </div>
    </header>
  );
}

export default Header;
