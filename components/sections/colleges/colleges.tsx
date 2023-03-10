import Image from "next/image";
import React, { useState } from "react";
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
import Heading1 from "../../../widgets/text_tags/heading1/Heading1";

function Colleges() {
  const imgArr = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];
  const [clamped, setClamped] = useState(false);

  function toggleClamped() {
    setClamped((prev) => !prev);
  }

  return (
    <section className={Styles.colleges} data-aos="fade-up">
      <div className={Styles.image}>
        <Image src={decoration} width={650} height={75} alt={""} />
      </div>
      <br />
      <Heading1>Trusted by 15000+ students over 50+ colleges </Heading1>
      <br />
      <div
        className={!clamped ? Styles.img_wrapper_clamped : Styles.img_wrapper}
      >
        {imgArr.map((img, index) => {
          return (
            <div key={index} className={Styles.img_card}>
              <Image src={img} width={175} height={50} alt={""} />
            </div>
          );
        })}
      </div>
      <h4 onClick={toggleClamped}>View {clamped ? "less" : "more"}</h4>
    </section>
  );
}

export default Colleges;
