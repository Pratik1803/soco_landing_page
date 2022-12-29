import { Stack } from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import Styles from "./footer.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AddIcon from "@mui/icons-material/Add";

function Footer() {
  const [open, setOpen] = useState("");

  function toggleOpen(newOpen: string) {
    if (open == newOpen) return setOpen("");
    setOpen(newOpen);
  }

  return (
    <footer className={Styles.footer}>
      <section className={Styles.sec1}>
        <h2>thesocialcomment</h2>
        <br />
        <p>
          thesocialcomment is a platform which helps students to increase their
          exposure and chances of getting hired
        </p>
        <br />
        <p>© 2023 thesocialcomment. All rights reserved</p>
      </section>
      <section
        className={`${Styles.sec2} ${open == "startup" ? Styles.active : ""}`}
      >
        <span
          onClick={() => {
            toggleOpen("startup");
          }}
        >
          <strong>Startup</strong>
          <AddIcon />
        </span>
        <nav>
          <ul>
            <Link href="#" passHref>
              <p>About</p>
            </Link>
            <Link href="#" passHref>
              <p>How it works</p>
            </Link>
            <Link href="#" passHref>
              <p>FAQ&apos;s</p>
            </Link>
            <Link href="#" passHref>
              <p>Careers</p>
            </Link>

            <Link href="#" passHref>
              <p>Founder&apos;s Story</p>
            </Link>
            <Link href="#" passHref>
              <p>Mobile App</p>
            </Link>
          </ul>
        </nav>
      </section>
      <section
        className={`${Styles.sec3} ${open == "policies" ? Styles.active : ""}`}
      >
        <span
          onClick={() => {
            toggleOpen("policies");
          }}
        >
          <strong>Policies</strong>
          <AddIcon />
        </span>
        <nav>
          <ul>
            <Link href="#" passHref>
              <p>Privacy Policy</p>
            </Link>
            <Link href="#" passHref>
              <p>Recruiter Policy</p>
            </Link>
            <Link href="#" passHref>
              <p>Referral Policy</p>
            </Link>
            <Link href="#" passHref>
              <p>Cookie Policy</p>
            </Link>
            <Link href="#" passHref>
              <p>Community Guidelines</p>
            </Link>
            <Link href="#" passHref>
              <p>Terms Of Service</p>
            </Link>
            <Link href="#" passHref>
              <p>Recruiter Guidelines</p>
            </Link>

            <Link href="#" passHref>
              <p>Monetization Policy</p>
            </Link>
          </ul>
        </nav>
      </section>
      <section
        className={`${Styles.sec4} ${open == "more" ? Styles.active : ""}`}
      >
        <span
          onClick={() => {
            toggleOpen("more");
          }}
        >
          <strong>More</strong>
          <AddIcon />
        </span>
        <nav>
          <ul>
            <Link href="#" passHref>
              <p>Student Internship</p>
            </Link>
            <Link href="#" passHref>
              <p>Affiliates</p>
            </Link>
            <Link href="#" passHref>
              <p>Premium</p>
            </Link>
            <Link href="#" passHref>
              <p>Support</p>
            </Link>
            <Link href="#" passHref>
              <p>Report a bug</p>
            </Link>
          </ul>
        </nav>
      </section>
      <section className={Styles.sec5}>
        <strong>Social Links</strong>
        <nav>
          <ul>
            <Link href="#" passHref>
              <Stack direction={"row"} spacing={1}>
                <InstagramIcon />
                <p>Instagram</p>
              </Stack>
            </Link>
            <Link href="#" passHref>
              <Stack direction={"row"} spacing={1}>
                <FacebookIcon />
                <p>Facebook</p>
              </Stack>
            </Link>
            <Link href="#" passHref>
              <Stack direction={"row"} spacing={1}>
                <LinkedInIcon />
                <p>LinkedIn</p>
              </Stack>
            </Link>
            <Link href="#" passHref>
              <Stack direction={"row"} spacing={1}>
                <TwitterIcon />
                <p>Twitter</p>
              </Stack>
            </Link>
            <Link href="#" passHref>
              <Stack direction={"row"} spacing={1}>
                <YouTubeIcon />
                <p>Youtube</p>
              </Stack>
            </Link>
          </ul>
        </nav>
      </section>
    </footer>
  );
}

export default Footer;
