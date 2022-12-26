import Head from "next/head";
import Image from "next/image";
import Hero from "../components/sections/hero/hero";
import Wrapper from "../components/wrapper/wrapper";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
}
