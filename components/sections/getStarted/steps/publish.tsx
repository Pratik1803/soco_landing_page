import Image from "next/image";
import React from "react";
import BlueButton from "../../../../widgets/blueButton/BlueButton";
import Styles from "./steps.module.scss";
import s4 from "../../../../assets/images/htgs/s4.png";

function Publish() {
  return (
    <section className={Styles.createAnAccount}>
      <div className={Styles.content}>
        <h1>Share your magic.</h1>
        <br />
        <p>
          Share your work with eecruiters and companies and create your brand
          image in their mind
        </p>

        <ul>
          <li>Show your work as a brand</li>
          <li>Make your work more recognizable</li>
          <li>Ease of realtime updates</li>
        </ul>
        {/* <p>
          Also, you can download your portfolio as Resume in Three different
          themes.
        </p> */}

        <BlueButton title="Create Your Profile" link="#" />
      </div>
      <div className={Styles.image_publish}>
        <div className={Styles.circles}></div>
        <Image src={s4} width={730} height={520} alt={""} />
      </div>
    </section>
  );
}

export default Publish;
