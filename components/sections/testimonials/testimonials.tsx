import React from "react";
import Styles from "./testimonials.module.scss";

function Testimonials() {
  return (
    <section className={Styles.testimonials}>
      <span>
        <h1 className={Styles.quotes}>“</h1>
        <h1>Testimonials</h1>
      </span>
      <p>What our users say about us? </p>
    </section>
  );
}

export default Testimonials;
