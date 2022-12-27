import Image from "next/image";
import React from "react";
import BlueButton from "../../../../widgets/blueButton/BlueButton";
import Styles from "./steps.module.scss";
import s3 from "../../../../assets/images/htgs/s3.png";

function Select() {
  return (
    <section className={Styles.createAnAccount}>
      <div className={Styles.content}>
        <h1>Show your Poof Of Work through Elegant Portfolio Themes.</h1>
        <br />
        <p>
          Select any Portfolio theme among 15+ Portfolio designs and capture the
          imagination of Recruiter.
        </p>
        <br />
        <BlueButton title="Create Your Profile" link="#" />
      </div>
      <div className={Styles.image_select}>
        <Image src={s3} width={850} height={560} alt={""} />
      </div>
    </section>
  );
}

export default Select;
