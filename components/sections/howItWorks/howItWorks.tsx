import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import BlueButton from "../../../widgets/blueButton/BlueButton";
import Styles from "./howItWorks.module.scss";
// import hiw from "../../../assets/videos/howItWorks/hiw.mp4";

function HowItWorks() {
  const steps = [
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
    "Lorem ipsum dolor sit amet.",
  ];

  interface IStepCard {
    step: string;
    index: number;
  }
  const StepsCard = ({ step, index }: IStepCard) => {
    return (
      <div className={`${Styles.card} ${Styles[`card${index}`]}`}>
        <p>{step}</p>
      </div>
    );
  };

  useEffect(() => {}, []);

  return (
    <section className={Styles.how_it_works}>
      <div className={Styles.video}>
        <div className={Styles.bg}></div>
        <video autoPlay loop style={{ width: "500px", height: "500px" }}>
          <source src="/assets/videos/owItWorks/hiw.mp4" />
        </video>
      </div>
      <div className={Styles.content}>
        <h1>How It All Works?</h1>
        <br />
        <p>
          This is exactly how you will be able to increase your chances of
          getting hired by 80%.
        </p>
        <br />
        <div className={Styles.video_mob}>
          <video autoPlay loop>
            <source src="/assets/videos/owItWorks/hiw.mp4" />
          </video>
        </div>
        <br />
        {steps.map((ele, index) => (
          <StepsCard key={index} index={index} step={ele} />
        ))}
        <br />
        <BlueButton title={"Read More"} link={"#"} />
      </div>
    </section>
  );
}

export default HowItWorks;
