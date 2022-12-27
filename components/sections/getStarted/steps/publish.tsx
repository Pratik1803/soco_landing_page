import Image from "next/image";
import React from "react";
import BlueButton from "../../../../widgets/blueButton/BlueButton";
import Styles from "./steps.module.scss";
import s4 from "../../../../assets/images/htgs/s4.png";

function Publish() {
  return (
    <section className={Styles.createAnAccount}>
      <div className={Styles.content}>
        <h1>Share your Work With Recruiters and Companies.</h1>
        <br />
        <p>
          Publish your portfolio on your favourite platform with just a single
          link and increase your chances of getting hired.
        </p>
        <br />
        <p>
          Also, you can download your portfolio as Resume in Three different
          themes.
        </p>
        <br />
        <BlueButton title="Create Your Profile" link="#" />
      </div>
      <div className={Styles.image_publish}>
        <Image src={s4} width={730} height={520} alt={""} />
      </div>
    </section>
  );
}

export default Publish;
