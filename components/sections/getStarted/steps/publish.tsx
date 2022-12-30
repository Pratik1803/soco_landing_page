import Image from "next/image";
import React from "react";
import BlueButton from "../../../../widgets/blueButton/BlueButton";
import Styles from "./steps.module.scss";
import s4 from "../../../../assets/images/htgs/s4.png";
import Heading1 from "../../../../widgets/text_tags/heading1/Heading1";

function Publish() {
  return (
    <section className={Styles.createAnAccount}>
      <div className={Styles.content}>
        <Heading1>Share your magic.</Heading1>
        <br />
        <p>
          Share your work with recruiters and companies and create your brand
          image in their mind.
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
