import Image from "next/image";
import React from "react";
import Styles from "./hero.module.scss";
import portfolio from "../../../assets/images/hero/portfolio.png";
import growth from "../../../assets/images/hero/growth.png";
import boi from "../../../assets/images/hero/boi.png";
import girl from "../../../assets/images/hero/girl.png";
import { Button, Stack } from "@mui/material";

interface IStudentCard {
  src: string;
  name: string;
}

const students: IStudentCard[] = [
  {
    src: "",
    name: "Akshat Mehta",
  },
  {
    src: "",
    name: "Anish Patel",
  },
  {
    src: "",
    name: "Kanika Sharma",
  },
];

function Hero() {
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
    <div className={Styles.hero}>
      <div className={Styles.portfolio}>
        <Image src={portfolio} alt="" width={150} height={150} />
      </div>
      <div className={Styles.growth}>
        <Image src={growth} alt="" width={150} height={150} />
      </div>
      <div className={Styles.boi}>
        <Image src={boi} alt="" width={350} height={350} />
      </div>
      <div className={Styles.girl}>
        <Image src={girl} alt="" width={280} height={350} />
      </div>
      <div className={Styles.content}>
        <h1>
          Increase your chances of getting hired by 80% through Proof Of Work.
        </h1>

        <p>
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
          <Button className={Styles.learn_more}>Learn More</Button>
        </Stack>
        <br />
        <div className={Styles.students}>
          {students.map((ele, index) => (
            <StudentCard key={index} src={ele.src} name={ele.name} />
          ))}
          <p>+35000 Students</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
