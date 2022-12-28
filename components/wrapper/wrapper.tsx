import Head from "next/head";
import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Styles from "./wrapper.module.scss";

type Props = {
  children: React.ReactNode;
};

function Wrapper({ children }: Props) {
  return (
    <>
      <Head>
        <title>thesocialcomment</title>
        {/* <title>{props.pageHead} | thesocialcomment</title> */}
        <meta name="title" content="Home | thesocialcomment" />
        <meta
          name="description"
          content="thesocialcomment is students network that focuses on project based learning."
        />
        <meta property="og:title" content="Home | thesocialcomment" />
        <meta
          property="og:description"
          content="thesocialcomment is students network that focuses on project based learning."
        />
        <meta property="og:image" content="og_image.png" />
        <meta property="og:url" content="https://thesocialcomment.com" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Home | thesocialcomment" />
        <meta
          name="twitter:description"
          content="thesocialcomment is students network that focuses on project based learning."
        />
        <meta name="twitter:image" content="og_image.png" />
        <meta name="twitter:site" content="@Social__Comment" />
        <meta name="twitter:creator" content="@Social__Comment" />
        <meta name="twitter:domain" content="thesocialcomment.com" />
        <meta name="twitter:app:name:iphone" content="thesocialcomment" />
        <meta name="twitter:app:name:ipad" content="thesocialcomment" />
        <meta name="twitter:app:name:googleplay" content="thesocialcomment" />
        <meta name="twitter:app:id:iphone" content="thesocialcomment" />
        <meta name="twitter:app:id:ipad" content="thesocialcomment" />
        <meta name="twitter:app:id:googleplay" content="thesocialcomment" />
        <meta name="twitter:app:url:iphone" content="thesocialcomment" />
        <meta name="twitter:app:url:ipad" content="thesocialcomment" />
        <meta name="twitter:app:url:googleplay" content="thesocialcomment" />
        <meta name="twitter:app:country" content="in" />
        <meta name="twitter:app:country:ipad" content="in" />
        <meta name="twitter:app:country:googleplay" content="in" />
        <meta name="twitter:app:country:iphone" content="in" />
        <meta name="twitter:app:country:googleplay" content="in" />
        <link
          rel="alternate"
          hrefLang="en-us"
          href="https://thesocialcomment.com"
        />
        <link
          rel="alternate"
          hrefLang="en-uk"
          href="https://thesocialcomment.com"
        />
        <link
          rel="alternate"
          hrefLang="en-in"
          href="https://thesocialcomment.com"
        />
        {/* All meta tags req for seo will come here */}
      </Head>
      <Header />
      <div className={Styles.container}>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}

export default Wrapper;
