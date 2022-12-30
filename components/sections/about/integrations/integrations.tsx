import React from "react";
import Styles from "./integrations.module.scss";
import icons from "../../../../assets/images/about/integrations/icons.png";
import Image from "next/image";
import Heading1 from "../../../../widgets/text_tags/heading1/Heading1";

function Integrations() {
  return (
    <section className={Styles.integrations} data-aos="fade-up">
      <Heading1>Integrations</Heading1>
      <br />
      <p>Share and upload your portfolio seamlessly on all your job portal.</p>
      <br />
      <div className={Styles.image}>
        <Image src={icons} height={404} width={445} alt={""} />
      </div>
    </section>
  );
}

export default Integrations;
