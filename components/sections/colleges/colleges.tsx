import Image from "next/image";
import React from "react";
import Styles from "./colleges.module.scss";
import decoration from "../../../assets/images/colleges/decoration.png";
import c1 from "../../../assets/images/colleges/c1.png";
import c2 from "../../../assets/images/colleges/c2.png";
import c3 from "../../../assets/images/colleges/c3.png";
import c4 from "../../../assets/images/colleges/c4.png";
import c5 from "../../../assets/images/colleges/c5.png";
import c6 from "../../../assets/images/colleges/c6.png";
import c7 from "../../../assets/images/colleges/c7.png";
import c8 from "../../../assets/images/colleges/c8.png";
import c9 from "../../../assets/images/colleges/c9.png";
import c10 from "../../../assets/images/colleges/c10.png";

function Colleges() {
  const imgArr = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];
  return (
    <section className={Styles.colleges}>
      <div className={Styles.image}>
        <Image src={decoration} width={650} height={75} alt={""} />
      </div>
      <br />
      <h1>Trusted by 35000+ Students Over 150+ Colleges </h1>
      <br />
      <div className={Styles.img_wrapper}>
        {imgArr.map((img, index) => {
          return (
            <div key={index} className={Styles.img_card}>
              <Image src={img} width={175} height={50} alt={""} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Colleges;
