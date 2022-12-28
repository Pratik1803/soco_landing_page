import Image, { StaticImageData } from "next/image";
import React from "react";
import Styles from "./oneForAll.module.scss";
import p1 from "../../../../assets/images/about/floaters/portraits/p1.png";
import p2 from "../../../../assets/images/about/floaters/portraits/p2.png";
import p3 from "../../../../assets/images/about/floaters/portraits/p3.png";
import p4 from "../../../../assets/images/about/floaters/portraits/p4.png";
import p5 from "../../../../assets/images/about/floaters/portraits/p5.png";
import p6 from "../../../../assets/images/about/floaters/portraits/p6.png";
import p7 from "../../../../assets/images/about/floaters/portraits/p7.png";
import p8 from "../../../../assets/images/about/floaters/portraits/p8.png";

function OneForAll() {
  const imgsArr = [p1, p2, p3, p4, p5, p6, p7, p8];
  const titleArr = [
    "Students",
    "Recruiters",
    "Artists",
    "Analysts",
    "Marketing",
    "Content Writers",
    "Graphic Designers",
    "Researcher",
    "Editors",
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
