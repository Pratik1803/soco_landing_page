import Image from "next/image";
import React from "react";
import BlueButton from "../../../../widgets/blueButton/BlueButton";
import Styles from "./steps.module.scss";
import s3 from "../../../../assets/images/htgs/s3.png";

function Select() {
  return (
    <section className={Styles.createAnAccount}>
      <div className={Styles.content}>
        <h1>15+ Portfolio themes</h1>
        <br />
        <p>
          Show your proof of work through these elegant portfolio designs and
          capture the imagination of recruiter.
        </p>

        <ul>
          <li>Select any portfolio theme</li>
          <li>Add proof of work to the portfolio </li>
          <li>And share with potential recruiters & clients</li>
        </ul>

        <BlueButton title="Create Your Profile" link="#" />
      </div>
      <div className={Styles.image_select}>
        <Image src={s3} width={850} height={560} alt={""} />
      </div>
    </section>
  );
}

export default Select;
