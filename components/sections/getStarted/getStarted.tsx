import React, { useEffect, useState } from "react";
import Styles from "./getStarted.module.scss";
import CreateAnAccount from "./steps/createAnAccount";
import Publish from "./steps/publish";
import Select from "./steps/select";
import Upload from "./steps/upload";
import AddIcon from "@mui/icons-material/Add";
import Heading1 from "../../../widgets/text_tags/heading1/Heading1";
import { useRouter } from "next/router";

function HowToGetStarted() {
  const router = useRouter();
  const [active, setActive] = useState("sec1");

  function toggleActive(newActive: string) {
    if (active == newActive && window.innerWidth <= 850) {
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

  useEffect(() => {
    if (window.innerWidth <= 850) {
      setActive("");
    } else {
      setActive("sec1");
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 850) {
        setActive("");
      } else {
        setActive("sec1");
      }
    });

    return window.removeEventListener("resize", () => {});
  }, []);

  return (
    <section
      className={Styles.get_started}
      data-aos="fade-up"
      id="howtogetstarted"
    >
      <Heading1>How to get started?</Heading1>
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
          >
            <div
              className={Styles.nav_item_head}
              onClick={() => {
                toggleActive("sec1");
              }}
            >
              <p>Create an account</p>
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
          >
            <div
              className={Styles.nav_item_head}
              onClick={() => {
                toggleActive("sec2");
              }}
            >
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
          >
            <div
              className={Styles.nav_item_head}
              onClick={() => {
                toggleActive("sec3");
              }}
            >
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
          >
            <div
              className={Styles.nav_item_head}
              onClick={() => {
                toggleActive("sec4");
              }}
            >
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
