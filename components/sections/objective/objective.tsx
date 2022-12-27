import Image, { StaticImageData } from "next/image";
import React from "react";
import BlueButton from "../../../widgets/blueButton/BlueButton";
import Styles from "./objective.module.scss";
import boi1 from "../../../assets/images/objective/boi1.png";
import boi2 from "../../../assets/images/objective/boi2.png";
import boi3 from "../../../assets/images/objective/boi3.png";
import boi4 from "../../../assets/images/objective/boi4.png";

function Objective() {
  interface IObjCardProps {
    img: StaticImageData;
    desc: string;
  }

  const cardData = [
    {
      img: boi1,
      desc: "A platform to represent yourself through your work",
    },
    {
      img: boi2,
      desc: "Get career advice from industry professionals and mentors.",
    },
    {
      img: boi3,
      desc: "Create a brand image in recruiter’s mind.",
    },
    {
      img: boi4,
      desc: "Capture the Imagination of Recruiter through Proof of work.",
    },
  ];

  function ObjCard({ img, desc }: IObjCardProps) {
    return (
      <div className={Styles.obj_card}>
        <div className={Styles.image}>
          <Image src={img} height={3000} width={4000} alt={""} />
        </div>
        <p>{desc}</p>
      </div>
    );
  }

  return (
    <section className={Styles.objective}>
      <div className={Styles.content}>
        <h4>Objective</h4>
        <h1>
          Multiple Problems,
          <br /> Single Solution.
        </h1>
        <br />
        <p>
          thesocialcomment is all about providing convenience to your greatness.
        </p>
        <br />
        <p>Seek, Learn & Create to become industry-ready.</p>
        <div className={Styles.btn}>
          <BlueButton title="Get Started" link={"#"} />
        </div>
      </div>
      <div className={Styles.images}>
        <div className={Styles.img_bg}></div>
        <div className={Styles.imgs}>
          <div className={Styles.row1}>
            <ObjCard img={cardData[0].img} desc={cardData[0].desc} />
            <ObjCard img={cardData[1].img} desc={cardData[1].desc} />
          </div>
          <div className={Styles.row2}>
            <ObjCard img={cardData[2].img} desc={cardData[2].desc} />
            <ObjCard img={cardData[3].img} desc={cardData[3].desc} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Objective;
