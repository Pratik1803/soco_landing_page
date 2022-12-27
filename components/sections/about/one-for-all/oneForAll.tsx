import Image, { StaticImageData } from "next/image";
import React from "react";
import Styles from "./oneForAll.module.scss";
import p1 from "../../../../assets/images/about/floaters/portraits/p1.png";

function OneForAll() {
  const imgsArr = [p1, p1, p1, p1, p1, p1, p1, p1];
  const titleArr = [
    "Student",
    "Student",
    "Student",
    "Student",
    "Student",
    "Student",
    "Student",
    "Student",
    "Students",
  ];

  interface IPortraitProps {
    src: StaticImageData;
    index: number;
  }

  const Portrait = ({ src, index }: IPortraitProps) => {
    return (
      <div
        className={`${Styles.floaters} ${Styles.por} ${
          Styles[`por${index + 1}`]
        }`}
      >
        <Image src={src} height={400} width={210} alt="" />
      </div>
    );
  };

  interface IStudentCardProps {
    title: string;
    index: number;
  }

  const StudentCard = ({ title, index }: IStudentCardProps) => {
    return (
      <div
        className={`${Styles.floaters} ${Styles.card} ${
          Styles[`stud_card${index + 1}`]
        }`}
      >
        <p>{title}</p>
      </div>
    );
  };

  return (
    <section className={Styles.one_for_all}>
      {imgsArr.map((ele, index) => (
        <Portrait key={index} index={index} src={ele} />
      ))}

      {titleArr.map((ele, index) => {
        return <StudentCard key={index} title={ele} index={index} />;
      })}

      <div className={Styles.bg1}></div>
      <div className={Styles.bg2}></div>
      <div className={Styles.center}>
        <h1>SOCO</h1>
        <p>One For All</p>
      </div>
    </section>
  );
}

export default OneForAll;
