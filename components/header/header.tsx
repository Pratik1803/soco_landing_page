import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import Styles from "./header.module.scss";

function Header() {
  return (
    <header className={Styles.header}>
      <nav>
        <h3>thesocialcomment</h3>
        <ul>
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
