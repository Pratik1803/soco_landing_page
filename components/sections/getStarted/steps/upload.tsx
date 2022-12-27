import Image from "next/image";
import React, { useEffect, useState } from "react";
import Styles from "./steps.module.scss";
import s2 from "../../../../assets/images/htgs/s2.png";
import s2_5 from "../../../../assets/images/htgs/s2_5.png";
import BlueButton from "../../../../widgets/blueButton/BlueButton";
import { Stack } from "@mui/material";

function Upload() {
  const [active1, setActive1] = useState(true);
  let interval: string | number | NodeJS.Timer | undefined;

  useEffect(() => {
    interval = setInterval(() => {
      setActive1((prev) => !prev);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className={Styles.upload}>
      <div className={Styles.content}>
        <h1>
          {active1
            ? "Upload your work from following categories and show your talent to world."
            : "Publish your work in a variety of formats to your Portfolio."}
        </h1>
        <br />
        <ul>
          <li>Be a Blogger and upload Blogs and Articles.</li>
          <li>Be an Artist and upload your Artwork and Skill Video.</li>
          <li>Be an Enthusiast and upload your Presentations.</li>
        </ul>
        <BlueButton title="Create Your Profile" link="#" />
      </div>
      <div className={Styles.image_upload}>
        <Image
          src={s2}
          width={770}
          height={440}
          alt={""}
          style={{ opacity: active1 ? "1" : "0" }}
        />
        <Image
          src={s2_5}
          width={770}
          height={440}
          alt={""}
          style={{ opacity: !active1 ? "1" : "0" }}
        />
        <Stack direction={"row"} spacing={2} className={Styles.dot_wrapper}>
          <div
            className={`${Styles.dot1} ${active1 ? Styles.active : ""}`}
          ></div>
          <div
            className={`${Styles.dot2} ${!active1 ? Styles.active : ""}`}
          ></div>
        </Stack>
      </div>
    </section>
  );
}

export default Upload;
