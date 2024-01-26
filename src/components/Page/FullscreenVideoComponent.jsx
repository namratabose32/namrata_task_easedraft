import React, { useState } from "react";
import "./styles.css";

const FullscreenVideoComponent = () => {
  const [isPlaybackRatePanelVisible, setPlaybackRatePanelVisibility] =
    useState(false);

  const togglePlaybackRatePanel = () => {
    setPlaybackRatePanelVisibility(!isPlaybackRatePanelVisible);
  };

  return (
    <div id="fullscreen-video-container" className="fullscreen-video-container">
      <div id="close-video" className="full-screen-close-btn w-embed">
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18 6L6 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
          <path
            d="M6 6L18 18"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
        </svg>
      </div>
      <div className="w-embed">
        <style>
          {`
            .fullscreen_video_wrapper {
              aspect-ratio: 16/9;
            }
          `}
        </style>
      </div>
      <div className="fullscreen_video_wrapper">
        <div
          id="PlayBackRatePanelYPSC"
          className="PlayBackRatePanelYPSC"
          style={{
            display: isPlaybackRatePanelVisible ? "block" : "none",
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
          <video
            id="fullscreen-video"
            style={{
              width: "100%",
              height: "auto",
              maxHeight: "90vh",
              aspectRatio: "16/9",
              objectFit: "cover",
            }}
            controls></video>
        </div>
      </div>
    </div>
  );
};

export default FullscreenVideoComponent;
