import React, { useState } from "react";
import Styles from "./getStarted.module.scss";
import CreateAnAccount from "./steps/createAnAccount";
import Publish from "./steps/publish";
import Select from "./steps/select";
import Upload from "./steps/upload";
import AddIcon from "@mui/icons-material/Add";

function HowToGetStarted() {
  const [active, setActive] = useState("sec1");

  function toggleActive(newActive: string) {
    if (active == newActive) {
      return setActive("");
    }
    setActive(newActive);
  }

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
    <section className={Styles.get_started} data-aos="fade-up">
      <h1>How to get started?</h1>
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
              toggleActive("sec1");
            }}
          >
            <div className={Styles.nav_item_head}>
              <p>Create an Account</p>
              <AddIcon />
            </div>
            <div className={Styles.mob_ver}>
              <CreateAnAccount />
            </div>
          </div>
          <div
            className={`${Styles.nav_item} ${
              active == "sec2" ? Styles.active : ""
            }`}
            onClick={() => {
              toggleActive("sec2");
            }}
          >
            <div className={Styles.nav_item_head}>
              <p>Upload</p>
              <AddIcon />
            </div>
            <div className={Styles.mob_ver}>
              <Upload />
            </div>
          </div>
          <div
            className={`${Styles.nav_item} ${
              active == "sec3" ? Styles.active : ""
            }`}
            onClick={() => {
              toggleActive("sec3");
            }}
          >
            <div className={Styles.nav_item_head}>
              <p>Select a custom theme</p>
              <AddIcon />
            </div>
            <div className={Styles.mob_ver}>
              <Select />
            </div>
          </div>
          <div
            className={`${Styles.nav_item} ${
              active == "sec4" ? Styles.active : ""
            }`}
            onClick={() => {
              toggleActive("sec4");
            }}
          >
            <div className={Styles.nav_item_head}>
              <p>Publish and share</p>
              <AddIcon />
            </div>
            <div className={Styles.mob_ver}>
              <Publish />
            </div>
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
