import React, { useState } from "react";

const DropdownComponent2 = () => {
  const [isDropdownOpen1, setDropdownOpen1] = useState(false);

  const toggleDropdown1 = () => {
    setDropdownOpen1(!isDropdownOpen1);
  };

  return (
    <div
      data-hover="true"
      data-delay="200"
      data-w-id="ce73bc21-47e3-718d-4aed-ec1abf19dc5e"
      className="navbar_menu-dropdown w-dropdown"
      onMouseEnter={toggleDropdown1}
      onMouseLeave={toggleDropdown1}>
      {/* Use Cases Dropdown */}
      <div
        className={`navbar_dropdwn-toggle w-dropdown-toggle ${
          isDropdownOpen1 ? "w--open" : ""
        }`}
        id="w-dropdown-toggle-0"
        aria-controls="w-dropdown-list-0"
        aria-haspopup="menu"
        aria-expanded={isDropdownOpen1 ? "true" : "false"}
        role="button"
        tabIndex="0">
        <div className="dropbtn">Use Cases</div>
        <div className="dropdown-chevron w-embed ">
          <svg
            width=" 2%"
            height=" 2%"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.55806 6.29544C2.46043 6.19781 2.46043 6.03952 2.55806 5.94189L3.44195 5.058C3.53958 4.96037 3.69787 4.96037 3.7955 5.058L8.00001 9.26251L12.2045 5.058C12.3021 4.96037 12.4604 4.96037 12.5581 5.058L13.4419 5.94189C13.5396 6.03952 13.5396 6.19781 13.4419 6.29544L8.17678 11.5606C8.07915 11.6582 7.92086 11.6582 7.82323 11.5606L2.55806 6.29544Z"
              fill="currentColor"></path>
          </svg>
        </div>
      </div>
      <nav
        className={`navbar_dropdown-list w-dropdown-list ${
          isDropdownOpen1 ? "w--open" : ""
        }`}
        style={{
          display: isDropdownOpen1 ? "block" : "none",
          position: "absolute",
          backgroundColor: "#fff", // Add your desired background color
          boxShadow: "0px 8px 16px rgba(0,0,0,0.1)", // Add your desired box shadow
          zIndex: 1,
          width: "150%", // Make sure the width is 100% for a full-width dropdown
          textAlign: "left", // Align links to the left
        }}
        id="w-dropdown-list-0"
        aria-labelledby="w-dropdown-toggle-0">
        {/* Add your Use Cases links here */}
        {isDropdownOpen1 && (
          <>
            <a
              href="/personalized-video-3"
              className="navbar_dropdown-link w-dropdown-link"
              tabIndex="0"
              style={{ display: "block", padding: "10px" }}>
              Sales Outreach
            </a>
            <a
              href="/explainer-video-maker"
              className="navbar_dropdown-link w-dropdown-link"
              tabIndex="0"
              style={{ display: "block", padding: "10px" }}>
              Product Marketing
            </a>
            {/* Add more Use Cases links as needed */}
            <a
              href="/marketing-videos"
              className="navbar_dropdown-link w-dropdown-link"
              tabIndex="0"
              style={{ display: "block", padding: "10px" }}>
              Content Marketing{" "}
            </a>
            <a
              href="/learning-development"
              className="navbar_dropdown-link w-dropdown-link"
              tabIndex="0"
              style={{ display: "block", padding: "10px" }}>
              Learning &amp; Development
            </a>
          </>
        )}
      </nav>
    </div>
  );
};

export default DropdownComponent2;
