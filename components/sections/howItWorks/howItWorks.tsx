import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import BlueButton from "../../../widgets/blueButton/BlueButton";
import Heading1 from "../../../widgets/text_tags/heading1/Heading1";
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
    <section className={Styles.how_it_works} data-aos="fade-up">
      <div className={Styles.video} data-aos="fade-up">
        <div className={Styles.bg}></div>
        <video autoPlay loop controls muted>
          <source src="https://d1ifbi2yr6p9bt.cloudfront.net/2156151/1671741749025-a996177b450592691c273565a9cbc2ad.mp4?v=1671722380000" />
        </video>
      </div>
      <div className={Styles.content} data-aos="fade-up">
        <Heading1>How it all works?</Heading1>
        <br />
        <p>
          This is exactly how you may increase your chances of getting hired by
          80%.
        </p>
        <br />
        <div className={Styles.video_mob}>
          <video autoPlay loop controls muted>
            <source src="https://d1ifbi2yr6p9bt.cloudfront.net/2156151/1671741749025-a996177b450592691c273565a9cbc2ad.mp4?v=1671722380000" />
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
