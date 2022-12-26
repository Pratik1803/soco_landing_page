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
