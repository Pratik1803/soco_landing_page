import React from "react";
import Styles from "./integrations.module.scss";
import icons from "../../../../assets/images/about/integrations/icons.png";
import Image from "next/image";

function Integrations() {
  return (
    <section className={Styles.integrations}>
      <h1>Integrations</h1>
      <br />
      <p>
        Integrations Share and Upload your portfolio seamlessly on all your job
        portals
      </p>
      <br />
      <div className={Styles.image}>
        <Image src={icons} height={404} width={445} alt={""} />
      </div>
    </section>
  );
}

export default Integrations;
