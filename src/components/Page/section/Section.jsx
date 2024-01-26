import React from "react";
import SectionPart1 from "./SectionPart1";
import SectionPart2 from "./SectionPart2";
import VedioScript from "./VedioScript";
import HeroVedio1 from "./HeroVedio1";
import HeroVedio2 from "./HeroVedio2";

export default function Section() {
  return (
    <section>
      <div className="hero_padding">
        <div className="w-layout-blockcontainer heygen_container w-container">
          <div className="vertical-center-div">
            <div className="max-w-740">
              <SectionPart1 />
              <SectionPart2 />
            </div>
            <div className="hero_video_wrap">
              <VedioScript />
              <HeroVedio1 />
              <HeroVedio2 />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
