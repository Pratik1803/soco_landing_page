import Link from "next/link";
import React from "react";
import Wrapper from "../components/wrapper/wrapper";
import Styles from "../styles/Memes.module.scss";
import Heading1 from "../widgets/text_tags/heading1/Heading1";
import Heading3 from "../widgets/text_tags/heading3/Heading3";

function Memes() {
  //   const MemeCard = () => {
  //     return <Link>
  //     </Link>
  //   };

  const links = [
    "https://www.instagram.com/reel/CmJO6NQudP5/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/reel/CmEZb4oj_4e/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/reel/Cl3qcG2jpW6/?utm_source=ig_web_copy_link",
    "https://www.instagram.com/reel/Cl01AERDRu8/?utm_source=ig_web_copy_link",
  ];

  return (
    <Wrapper>
      <section className={Styles.memes}>
        <div className={Styles.head}>
          <Heading1>Welcome to our Meme page!</Heading1>
          <br />
          <Heading3>The youth inside us that keeps us going.</Heading3>
        </div>
        <div className={Styles.meme_wrapper}>
          {links.map((link, index) => {
            return <iframe key={index} src={link}></iframe>;
          })}
        </div>
      </section>
    </Wrapper>
  );
}

export default Memes;
