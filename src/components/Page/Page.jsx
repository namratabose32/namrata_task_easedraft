import React from "react";
import FullscreenVideoComponent from "./FullscreenVideoComponent";
import "./styles.css";
import Section from "./section/Section";
import SectionMid from "./SectionMid";
import SectionDown from "./SectionDown";
import SectionDark from "./SectionDark/SectionDark";
export default function Page() {
  return (
    <div className="page_wrapper">
      <FullscreenVideoComponent />
      <Section />
      <div class="background_section">
        <img
          src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c4edf1c49ad5ab27cd37b_blur-purple.svg"
          loading="eager"
          alt=""
          class="blur_bg_purple"
        />
      </div>
      <SectionMid />
      <div class="background_section is-under">
        <div class="blur_bg_black"></div>
      </div>
      <SectionDown />
      <SectionDark />
    </div>
  );
}
