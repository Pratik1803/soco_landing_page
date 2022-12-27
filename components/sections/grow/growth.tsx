import Image from "next/image";
import React from "react";
import Styles from "./growth.module.scss";
import students from "../../../assets/images/grow-sec2/students.png";

function Growth() {
  return (
    <section className={Styles.growth}>
      <div className={Styles.image}>
        <Image src={students} height={2000} width={3000} alt="" />
      </div>
      <div className={Styles.content}>
        <h1>We Help You Grow!</h1>
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
