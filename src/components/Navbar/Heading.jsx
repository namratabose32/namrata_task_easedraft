import React, { useState } from "react";
import "./styles.css";
import DropdownComponent from "./DropdownComponent1";
import DropdownComponent2 from "./DropdownComponent2";
import DropdownComponent3 from "./DropdownComponent3";

const Heading = () => {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  return (
    <div>
      <div className="flex">
        <div
          data-animation="default"
          className="navbar_component w-nav grid flex"
          data-easing2="ease"
          fs-scrolldisable-element="smart-nav"
          data-easing="ease"
          data-collapse="medium"
          data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc58"
          role="banner"
          data-duration="400">
          <div className="nav_bg" style={{ display: "none", opacity: 0 }}></div>
          <div className="navbar_container grid">
            <a
              href="/"
              aria-current="page"
              className="navbar_logo-link w-nav-brand w--current"
              aria-label="home">
              <img
                src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/649e4c3d5f0708ca6cd80bba_logoHorizonalLight.svg"
                loading="lazy"
                width="83"
                alt="logo-horizontal-light"
                className="navbar_logo"
              />
            </a>

            {/* Regular navigation for large screens */}
            <nav
              role="navigation"
              className="navbar_menu shadows_3_pc_none w-nav-menu flex">
              <DropdownComponent2 />
              <DropdownComponent />
              <DropdownComponent3 />
              <a href="/pricing" className="navbar_link w-nav-link">
                Pricing
              </a>
            </nav>
            <div
              className="navbar_button-wrapper"
              id="w-node-ce73bc21-47e3-718d-4aed-ec1abf19dc92-bf19dc58">
              <a
                href="https://am8evw00qys.typeform.com/enterprisecall"
                target="_blank"
                className="navbar_link_nocolor w-nav-link">
                Contact Sales
              </a>
              <a
                href="https://app.heygen.com/login"
                target="_blank"
                className="button_primary_nav shadows_3 w-button">
                Get started
              </a>
            </div>
            {/* Mobile navigation button */}
            <div
              className={`navbar_menu-button w-nav-button ${
                isDropdownOpen1 ? "open" : ""
              }`}
              onClick={toggleDropdown1}>
              <div className="menu-icon">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            {/* Mobile dropdown */}
            <nav
              role="navigation"
              className={`navbar_menu mobile-menu ${
                isDropdownOpen1 ? "open" : ""
              }`}>
              <DropdownComponent2 />
              <DropdownComponent />
              <DropdownComponent3 />
              <a href="/pricing" className="navbar_link w-nav-link">
                Pricing
              </a>
            </nav>
          </div>
        </div>
        <div
          className="w-nav-overlay"
          data-wf-ignore=""
          id="w-nav-overlay-0"></div>
      </div>
    </div>
  );
};

export default Heading;
