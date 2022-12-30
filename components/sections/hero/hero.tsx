import Image, { StaticImageData } from "next/image";
import React from "react";
import Styles from "./hero.module.scss";
import portfolio from "../../../assets/images/hero/portfolio.png";
import growth from "../../../assets/images/hero/growth.png";
import boi from "../../../assets/images/hero/boi.png";
import girl from "../../../assets/images/hero/girl.png";
import { Button, Stack } from "@mui/material";
import am from "../../../assets/images/testimonials/NikhilS.jpg";
import ap from "../../../assets/images/testimonials/SiddarthS.jpg";
import ks from "../../../assets/images/testimonials/KanikaS.jpg";
import YouTube from "react-youtube";
import Heading1 from "../../../widgets/text_tags/heading1/Heading1";
import mob_bg from "../../../assets/images/hero/mob_bg.png";

interface IStudentCard {
  src: StaticImageData;
  name: string;
}

const students: IStudentCard[] = [
  {
    src: am,
    name: "Akshat Mehta",
  },
  {
    src: ap,
    name: "Anish Patel",
  },
  {
    src: ks,
    name: "Kanika Sharma",
  },
];

function Hero() {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  function onReady(event: { target: { pauseVideo: () => void } }) {
    event.target.pauseVideo();
  }

  const StudentCard = ({ src, name }: IStudentCard) => {
    return (
      <div className={Styles.student_card}>
        <div className={Styles.student_img}>
          <Image src={src} width={40} height={40} alt={""} />
        </div>
        <p>{name}</p>
      </div>
    );
  };

  return (
    <div className={Styles.hero} data-aos="fade-up">
      <div className={Styles.portfolio} data-aos="fade-up">
        <Image src={portfolio} alt="" width={150} height={150} />
      </div>
      <div className={Styles.growth} data-aos="fade-up">
        <Image src={growth} alt="" width={150} height={150} />
      </div>
      <div className={Styles.boi} data-aos="fade-up">
        <Image src={boi} alt="" width={350} height={350} />
      </div>
      <div className={Styles.girl} data-aos="fade-up">
        <Image src={girl} alt="" width={280} height={350} />
      </div>
      <div className={Styles.content} data-aos="fade-up">
        {/* <Image src={mob_bg} width={500} height={350} alt={""} /> */}
        <span>
          <Heading1>
            Increase your chances of getting hired by 80% through proof of work
          </Heading1>
        </span>
        <p className={Styles.desc_hero}>
          Showcase your skills and work using our virtual portfolios to increase
          your chances of getting hired..
        </p>

        <Stack
          direction={"row"}
          spacing={3}
          width={"100%"}
          justifyContent={"center"}
          marginY={2}
        >
          <Button className={Styles.get_started}>Get Started</Button>
          {/* <Button className={Styles.learn_more}>Learn More</Button> */}
        </Stack>

        <br />
        <div className={Styles.students}>
          {students.map((ele, index) => (
            <StudentCard key={index} src={ele.src} name={ele.name} />
          ))}
          <p>+35000 Students</p>
        </div>
      </div>
      <div className={Styles.video} data-aos="fade-up">
        <div className={Styles.video_bg}></div>
        <div className={Styles.video_wrapper}>
          <YouTube
            className={Styles.youtube}
            videoId="VLC7GYM-dGM"
            opts={opts}
            onReady={onReady}
            style={{ borderRadius: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
