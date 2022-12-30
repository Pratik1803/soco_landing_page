import { Button } from "@mui/material";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import Styles from "./testimonials.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import apoorvaR from "../../../assets/images/testimonials/ApoorvaR.jpg";
import defneyPW from "../../../assets/images/testimonials/DefneyPW.jpg";
import ibnuS from "../../../assets/images/testimonials/IbnuS.jpg";
import kanikaS from "../../../assets/images/testimonials/KanikaS.jpg";
import nikhilS from "../../../assets/images/testimonials/NikhilS.jpg";
import nirikshaS from "../../../assets/images/testimonials/NirikshaS.jpg";
import nischayaS from "../../../assets/images/testimonials/NischayaS.jpg";
import sameehaF from "../../../assets/images/testimonials/SameehaF.jpg";
import siddharthS from "../../../assets/images/testimonials/SiddarthS.jpg";
import varunC from "../../../assets/images/testimonials/VarunC.jpg";
import yashikaM from "../../../assets/images/testimonials/YashikaM.jpg";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import star from "../../../assets/images/testimonials/star.png";
import Heading1 from "../../../widgets/text_tags/heading1/Heading1";

function Testimonials() {
  let sliderInterval: string | number | NodeJS.Timer | undefined;
  interface ITCard {
    name: string;
    college: string;
    desc: string;
    img: StaticImageData;
    stars: number[];
  }

  const colors = ["blue", "red", "green", "orange", "violet", "yellow"];

  const [testimonials, setTestimonials] = useState<ITCard[]>([
    {
      name: "Siddarth Saxena",
      college: "Freelancer",
      desc: "As working in media industry, it was previously extremely difficult for me to represent my talent through various media channels; however, thanks to this tool, I was able to build my virtual portfolio, and it is now extremely simple for me to showcase my talent to such large media firms. All thanks to the thesocialcomment.",
      img: siddharthS,
      stars: [1, 2, 3],
    },
    {
      name: "Nikhil Singh",
      college: "MAHE Manipal",
      desc: "The creation of my Virtual Portfolio helped kick-start my career and aided me in finding prospective employers and new opportunities. Putting my newly acquired skills to use will enable me to be a better performer in whatever I do next, as well as serve as a solid foundation for future skills that I will acquire.",
      img: nikhilS,
      stars: [1, 2, 3],
    },
    {
      name: "Nischaya Sharma",
      college: "NMIMS, Mumbai",
      desc: "Easy to use and Easy to Manage!",
      img: nischayaS,
      stars: [1, 2, 3, 4],
    },
    {
      name: "Yashika Mehra",
      college: "Delhi University",
      desc: "My experience was pretty good. I uploaded all my skills, made my virtual portfolio. Thank you for your unique and innovative platform!",
      img: yashikaM,
      stars: [1, 2, 3],
    },
    {
      name: "Sameeha Fatima",
      college: "Delhi University",
      desc: "As an aspiring Content writer who requires sending samples to her recruiters, I needed a one place directory where I can have all my work together. By making a virtual portfolio on this platform I could send one link to the recruiters and let them know my work and potential! It has also helped me in connecting with the work of other fellow content writers and not only just reading and engaging with their content but also has helped me grow as a content writer.",
      img: sameehaF,
      stars: [1, 2, 3, 4],
    },
    {
      name: "Kanika Sharma",
      college: "GWECA",
      desc: "A mandatory platform for every aspiring student.",
      img: kanikaS,
      stars: [1, 2, 3, 4],
    },
    {
      name: "Apoorva Razdaan",
      college: "UPES, Dehradun",
      desc: "I believe it is a professional platform where I can post what I have studied or post related to my hobbies and interests. It is better to spend time on this platform rather than spending it on social media. Making a portfolio is such an easy task. Normally this thing takes hours and hours to make it right, but here, it is easy to use and manage.",
      img: apoorvaR,
      stars: [1, 2, 3],
    },
    {
      name: "Defney Prathika Williams",
      college: "MAHE Manipal",
      desc: "This platform has facilitated me in navigating through its simple interface, as well as regularly updating my virtual portfolio. It encouraged me to add content with a simple drag-and-drop, and it motivated me and my peers to create and capture the virtual world. This also aided me in discovering a learning path and improving my ability to perceive and monitor my milestones.",
      img: defneyPW,
      stars: [1, 2, 3, 4],
    },
    {
      name: "Ibnu Syed",
      college: "Manipal University",
      desc: "Creating my portfolio and sharing my work here helped me maintain a virtual portfolio shared with my potential clients and employers. As a content creator and someone who have to share my works with the clients who approach me, It is indeed a lot of work to transfer each file to my client, But the smooth and easy to use UI of it presents my content and materials in the best presentable way possible with all my content under one roof!. I have improved my productivity and efficiency in the presentability of my work and making my life as a content creator a lot easier.",
      img: ibnuS,
      stars: [1, 2, 3, 4],
    },
    {
      name: "Varun Chowhan",
      college: "Aryan College",
      desc: "It is extremely helpful in promoting my work. I had a fantastic time working on it. This platform has useful tools and a user-friendly interface. Now I can get in touch with all of my work with a single click.",
      img: varunC,
      stars: [1, 2, 3],
    },
    {
      name: "Niriksha Sharma",
      college: "Poornima University",
      desc: "This platform will keep you engaged throughout the year and inspire you to do more. The best part is that you can now connect with other students who share your interests.",
      img: nirikshaS,
      stars: [1, 2, 3],
    },
  ]);

  interface Props {
    data: ITCard;
    index: number;
  }

  const TCard = ({ data, index }: Props) => {
    const [openDetails, setOpenDetails] = useState(false);
    function toggleDetails() {
      setOpenDetails((prev) => !prev);
    }

    return (
      <div
        className={openDetails ? Styles.t_card_expanded : Styles.t_card}
        style={{
          backgroundColor: `var(--light-${colors[index % colors.length]})`,
        }}
      >
        <div className={Styles.image}>
          <Image src={data.img} width={80} height={80} alt={""} />
          <div className={Styles.stud_detail}>
            <h3>{data.name}</h3>
            <p>{data.college}</p>
            <div className={Styles.stars}>
              {data.stars.map((ele, index) => (
                <Image key={index} src={star} width={50} height={50} alt={""} />
              ))}
            </div>
          </div>
        </div>
        <br />
        <div className={Styles.card_content}>
          <span>
            <p className={!openDetails ? Styles.clamped : ""}>
              &quot;{data.desc}&quot;
            </p>
            {data.desc.length > 107 ? (
              <h4 onClick={toggleDetails}>
                Read {openDetails ? "less" : "more"}
              </h4>
            ) : (
              ""
            )}
          </span>
        </div>
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className={Styles.testimonials} data-aos="fade-up">
        <span>
          <h1 className={Styles.quotes}>“</h1>
          <Heading1>Testimonials</Heading1>
        </span>
        <p>What our users say about us? </p>
        <br />
        <div className={Styles.swiper}>
          <Slider
            prevArrow={
              <Button>
                <ArrowBackIosIcon />
              </Button>
            }
            nextArrow={
              <Button>
                <ArrowForwardIosIcon />
              </Button>
            }
            {...settings}
          >
            {testimonials.map((t, ind) => {
              return <TCard key={ind} data={t} index={ind + 1} />;
            })}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
