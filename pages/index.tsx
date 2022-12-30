import React, { useState, createContext } from "react";

import About from "../components/sections/about/about";
import Colleges from "../components/sections/colleges/colleges";
import HowToGetStarted from "../components/sections/getStarted/getStarted";
import Growth from "../components/sections/grow/growth";
import Hero from "../components/sections/hero/hero";
import HowItWorks from "../components/sections/howItWorks/howItWorks";
import Objective from "../components/sections/objective/objective";
import Pricing from "../components/sections/pricing/pricing";
import Testimonials from "../components/sections/testimonials/testimonials";
import Why from "../components/sections/why/why";
import Wrapper from "../components/wrapper/wrapper";
import Styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <Growth />
      <Objective />
      <About />
      <HowItWorks />
      <Testimonials />
      <Colleges />
      <Why />
      <HowToGetStarted />
      <Pricing />
    </Wrapper>
  );
}
