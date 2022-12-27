import React, { useState } from "react";
import Styles from "./getStarted.module.scss";
import CreateAnAccount from "./steps/createAnAccount";
import Publish from "./steps/publish";
import Select from "./steps/select";
import Upload from "./steps/upload";

function HowToGetStarted() {
  const [active, setActive] = useState("sec2");

  interface ISwitch {
    currentTab: string;
  }
  const Switch = ({ currentTab }: ISwitch) => {
    switch (currentTab) {
      case "sec1":
        return <CreateAnAccount />;
        break;
      case "sec2":
        return <Upload />;
        break;
      case "sec3":
        return <Select />;
        break;
      case "sec4":
        return <Publish />;
        break;
      default:
        return <></>;
        break;
    }
  };

  return (
    <section className={Styles.get_started}>
      <h1>How to get Started?</h1>
      <br />
      <p>
        Now your projects, works, experiences and even your small contributions
        never go unnoticed!
      </p>
      <div className={Styles.wrapper}>
        <div className={Styles.nav}>
          <div
            className={`${Styles.nav_item} ${
              active == "sec1" ? Styles.active : ""
            }`}
            onClick={() => {
              setActive("sec1");
            }}
          >
            <p>Create an Account</p>
          </div>
          <div
            className={`${Styles.nav_item} ${
              active == "sec2" ? Styles.active : ""
            }`}
            onClick={() => {
              setActive("sec2");
            }}
          >
            <p>Upload</p>
          </div>
          <div
            className={`${Styles.nav_item} ${
              active == "sec3" ? Styles.active : ""
            }`}
            onClick={() => {
              setActive("sec3");
            }}
          >
            <p>Select a Custom Theme</p>
          </div>
          <div
            className={`${Styles.nav_item} ${
              active == "sec4" ? Styles.active : ""
            }`}
            onClick={() => {
              setActive("sec4");
            }}
          >
            <p>Publish and Share</p>
          </div>
        </div>
        <div className={Styles.container}>
          <Switch currentTab={active} />
        </div>
      </div>
    </section>
  );
}

export default HowToGetStarted;
