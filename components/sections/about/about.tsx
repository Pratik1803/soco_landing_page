import React, { useState } from "react";
import Styles from "./about.module.scss";
import decoration from "../../../assets/images/about/decoration.png";
import Image from "next/image";
import OneForAll from "./one-for-all/oneForAll";
import Integrations from "./integrations/integrations";
import Heading1 from "../../../widgets/text_tags/heading1/Heading1";

function About() {
  const [clamped, setClamped] = useState(false);

  function toggleClamped() {
    setClamped((prev) => !prev);
  }

  return (
    <section className={Styles.about} data-aos="fade-up">
      <div className={Styles.header} data-aos="fade-up">
        <div className={Styles.about_head}>
          <div className={Styles.h1_wrapper}>
            <h1>About</h1>
          </div>
          <div className={Styles.image}>
            <Image src={decoration} height={161} width={270} alt={""} />
          </div>
        </div>
        <div className={Styles.content} data-aos="fade-up">
          <Heading1>
            We are a small and young team from India passionate about the
            future.
          </Heading1>
          <br />
          <span>
            <p className={clamped ? "" : Styles.clamped}>
              Our mission is to help individuals land opportunities with their
              proof of work.
              <br />
              Proof of work is changing the way we build our personal brand,
              collaborate with others, or land opportunities in our careers and
              life. We makes it super easy.
            </p>
            <h4 onClick={toggleClamped}>Read {clamped ? "less" : "more"}</h4>
          </span>
        </div>
      </div>
      <OneForAll />
      <Integrations />
    </section>
  );
}

export default About;
