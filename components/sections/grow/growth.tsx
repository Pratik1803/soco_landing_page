import Image from "next/image";
import React from "react";
import Styles from "./growth.module.scss";
import students from "../../../assets/images/grow-sec2/students.png";
import Heading1 from "../../../widgets/text_tags/heading1/Heading1";

function Growth() {
  return (
    <section className={Styles.growth}>
      <div className={Styles.image} data-aos="fade-up">
        <Image src={students} height={2000} width={3000} alt="" />
      </div>
      <div className={Styles.content} data-aos="fade-up">
        <Heading1>We help you grow!</Heading1>
        {/* <h1>We help you grow!</h1> */}
        <br />
        <p>
          We provide you with the best tools to get started and grow as you
          progress.
        </p>
        <br />
        <p>
          Post projects, assignments, work & experience to demonstrate your
          abilities and skills.
        </p>
      </div>
    </section>
  );
}

export default Growth;
