import React from "react";
import "./styles.css";

const HeroVedio1 = () => {
  return (
    <div id="hero-video-1" className="hero_video_tabcontent">
      <div
        id="PlayBackRatePanelYPSC"
        className="PlayBackRatePanelYPSC"
        style={{
          display: "none",
          top: "2px",
          right: "-44px",
          bottom: "initial",
          left: "initial",
        }}>
        <button id="SpeedUpYPSC" className="btnYPSC btnYPSC-right">
          &gt;&gt;
        </button>
        <button id="PlayBackRateYPSC" className="btnYPSC">
          1.00
        </button>
        <button id="SpeedDownYPSC" className="btnYPSC btnYPSC-left">
          &lt;&lt;
        </button>
        <button id="SettingYPSC" className="btnYPSC"></button>
      </div>
      <div className="w-embed">
        <style>
          {`
            .hero-video::-webkit-media-controls,
            .ai_voice_video::-webkit-media-controls,
            .muted-video::-webkit-media-controls,
            .muted-video::-webkit-media-controls {
                display: none !important;
            }

            .hero-video::-moz-media-controls,
            .ai_voice_video::-moz-media-controls,
            .muted-video::-moz-media-controls,
            .muted-video::-moz-media-controls {
                display: none !important;
            }

            .hero-video::-ms-media-controls,
            .ai_voice_video::-ms-media-controls,
            .translator_video::-ms-media-controls,
            .muted-video::-ms-media-controls {
                display: none !important;
            }

            .video-preview {
                aspect-ratio: 16/9;
                height: auto; 
                width: 100%; 
                margin-right:auto;
                margin-left:auto;
                object-fit: cover; 
                position: relative; 
                z-index: 2;
            }

            .hero-video{
                aspect-ratio: 16/9;
                transform: scale(1.01);
                height: auto; 
                width: 100%; 
                margin-right:auto;
                margin-left:auto;
                object-fit: cover; 
                display: flex; 
                position: relative; 
            }

            .hero_video_tabcontent{
                aspect-ratio: 16/9;
            }

            .muted-video{
                aspect-ratio: 16/9;
                transform: scale(1.01);
                height: auto; 
                width: 100%; 
                margin-right:auto;
                margin-left:auto;
                object-fit: cover; 
                display: flex; 
                position: relative; 
            }

            @media screen and (max-width: 478px) { 
                .hero-video, .muted-video, .ai_voice_video, .translator_video, .footer_cta_video {
                    display: none;
                }
                .video-preview {
                    height: 100%;
                    display: block;
                }
            }
          `}
        </style>

        <video
          className="hero-video"
          src="https://resource.heygencdn.com/homepage/header_video_josh2.mp4"
          type="video/mp4"
          muted
          autoPlay
          loop></video>
      </div>
      <img
        src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1.webp"
        loading="lazy"
        sizes="(max-width: 479px) 87vw, 100vw"
        srcSet="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1-p-500.webp 500w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1-p-800.webp 800w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1-p-1080.webp 1080w, https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656c976063564c91d4930236_hero-video-1.webp 1440w"
        alt=""
        className="video-preview"
      />
      <div className="video_purple_blur"></div>
      <div className="video_btn_wrap is-hero">
        <div className="video_btn">
          <div className="btn_play_icon w-embed">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.78189 1.56626C4.00971 1.44188 4.28727 1.45183 4.50561 1.59219L14.4396 7.9783C14.6427 8.10886 14.7654 8.33373 14.7654 8.57517C14.7654 8.81661 14.6427 9.04149 14.4396 9.17205L4.50561 15.5582C4.28727 15.6985 4.00971 15.7085 3.78189 15.5841C3.55407 15.4597 3.41234 15.2208 3.41234 14.9613V2.18906C3.41234 1.9295 3.55407 1.69064 3.78189 1.56626ZM4.83147 3.48875V13.6616L12.7437 8.57517L4.83147 3.48875Z"
                fill="white"></path>
            </svg>
          </div>
          <div>Demo</div>
        </div>
      </div>
    </div>
  );
};

export default HeroVedio1;
