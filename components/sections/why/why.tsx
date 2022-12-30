import React from "react";
import Styles from "./why.module.scss";
import p1 from "../../../assets/images/why/p1.png";
import p2 from "../../../assets/images/why/p2.png";
import p3 from "../../../assets/images/why/p3.png";
import Image, { StaticImageData } from "next/image";
import YouTube from "react-youtube";
import Heading1 from "../../../widgets/text_tags/heading1/Heading1";
import Heading3 from "../../../widgets/text_tags/heading3/Heading3";

function Why() {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  function onReady(event: { target: { pauseVideo: () => void } }) {
    event.target.pauseVideo();
  }

  interface IWhyCard {
    title: string;
    desc: string;
    src: StaticImageData;
  }

  const cardArr: IWhyCard[] = [
    {
      title: "Proof of work, fullstop.",
      desc: "Let your work speak for itself.",
      src: p1,
    },
    {
      title: "Virtual Portfolio.",
      desc: "Show your Multiversitude Attitude.",
      src: p2,
    },
    {
      title: "Proof of work, fullstop.",
      desc: "Manage your work and time through a single window.",
      src: p3,
    },
  ];

  const WhyCard = ({ src, title, desc }: IWhyCard) => {
    return (
      <div className={Styles.img_card} data-aos="fade-up">
        <div className={Styles.image}>
          <Image src={src} width={112} height={124} alt={""} />
        </div>
        <div className={Styles.card_content}>
          <Heading3>{title}</Heading3>
          <p>{desc}</p>
        </div>
      </div>
    );
  };

  return (
    <section className={Styles.why} data-aos="fade-up">
      <div className={Styles.video} data-aos="fade-up">
        <div className={Styles.video_bg}></div>
        <div className={Styles.video_wrapper}>
          <YouTube
            className={Styles.youtube}
            videoId="VLC7GYM-dGM"
            opts={opts}
            onReady={onReady}
            style={{ borderRadius: "20px" }}
          />
        </div>
      </div>
      <div className={Styles.content} data-aos="fade-up">
        <Heading1>Why us?</Heading1>
        <br />
        <p>
          SOCO is a fresh new approach to how we attract opportunities for
          ourselves through our proof of work and collaboration. We are a small
          and young team from India passionate about the future.
        </p>
        <br />
        <div className={Styles.why_card_container}>
          {cardArr.map((ele, index) => {
            return (
              <WhyCard
                key={index}
                title={ele.title}
                desc={ele.desc}
                src={ele.src}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Why;
