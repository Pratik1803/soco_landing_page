import Image from "next/image";
import React from "react";
import BlueButton from "../../../../widgets/blueButton/BlueButton";
import Styles from "./steps.module.scss";
import s1 from "../../../../assets/images/htgs/s1.png";

function CreateAnAccount() {
  return (
    <section className={Styles.createAnAccount}>
      <div className={Styles.content}>
        <h1>Create or Log into your account</h1>
        <br />
        <p>
          The first step is to create or log into your account using valid
          credentials.
        </p>
        <ul>
          <li>Go to Login/Signup Portal</li>
          <li>Fill the necessary details</li>
          <li>Accept the Terms & Service and hit Create button</li>
        </ul>
        <BlueButton title="Create Your Profile" link="#" />
      </div>
      <div className={Styles.image}>
        <Image src={s1} width={770} height={440} alt={""} />
      </div>
    </section>
  );
}

export default CreateAnAccount;
