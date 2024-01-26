import React from "react";

export default function HeroVedio3() {
  return (
    <div id="hero-video-3" class="hero_video_tabcontent is-hidden">
      <div
        id="PlayBackRatePanelYPSC"
        class="PlayBackRatePanelYPSC"
        style={{
          display: "none",
          top: "2px",
          right: "-44px",
          bottom: "initial",
          left: "initial",
        }}>
        <button id="SpeedUpYPSC" class="btnYPSC btnYPSC-right">
          &gt;&gt;
        </button>
        <button id="PlayBackRateYPSC" class="btnYPSC">
          1.00
        </button>
        <button id="SpeedDownYPSC" class="btnYPSC btnYPSC-left">
          &lt;&lt;
        </button>
        <button id="SettingYPSC" class="btnYPSC"></button>
      </div>
      <div class="w-embed">
        <video
          class="hero-video"
          src="https://resource.heygencdn.com/homepage/header_video_instant_avatar2.mp4"
          type="video/mp4"
          muted
          autoPlay
          loop></video>
      </div>
      <img
        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3.webp"
        loading="lazy"
        sizes="100vw"
        srcset="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3-p-500.webp 500w,
 https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c9757fdbce489e173fffd_hero-video-3.webp 1440w"
        alt=""
        class="video-preview"
      />
      <div class="video_purple_blur"></div>
      <div class="video_btn_wrap is-hero">
        <div class="video_btn">
          <div class="btn_play_icon w-embed">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                fill="white"></path>
            </svg>
          </div>
          <div>Demo</div>
        </div>
      </div>
    </div>
  );
}
