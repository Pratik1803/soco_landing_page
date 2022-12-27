import React from "react";
import Styles from "./about.module.scss";
import decoration from "../../../assets/images/about/decoration.png";
import Image from "next/image";
import OneForAll from "./one-for-all/oneForAll";
import Integrations from "./integrations/integrations";

function About() {
  return (
    <section className={Styles.about}>
      <div className={Styles.header}>
        <div className={Styles.about_head}>
          <div className={Styles.h1_wrapper}>
            <h1>About</h1>
          </div>
          <div className={Styles.image}>
            <Image src={decoration} height={161} width={270} alt={""} />
          </div>
        </div>
        <div className={Styles.content}>
          <h1>
            We are a small and young team from India passionate about the
            future.
          </h1>
          <br />
          <p>
            Our mission is to help individuals land opportunities with their
            proof of work.
            <br />
            <br />
            Proof of work is changing the way we build our personal brand,
            collaborate with others, or land opportunities in our careers and
            life. We makes it super easy.
          </p>
        </div>
      </div>
      <OneForAll />
      <Integrations />
    </section>
  );
}

export default About;
