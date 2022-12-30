import "../styles/globals.css";
import type { AppProps } from "next/app";
import React, { useEffect, useState, createContext } from "react";
import AOS from "aos";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
    });
  }, []);
  return <Component {...pageProps} />;
}
