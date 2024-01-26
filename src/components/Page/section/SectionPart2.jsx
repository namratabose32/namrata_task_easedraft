import React from "react";
import "./styles.css";

const SectionPart2 = () => {
  return (
    <div className="logos_padding">
      <div className="w-embed">
        <style>
          {`
            .logos_row {
              will-change: transform;
              animation: brand-horizontal 150s linear infinite;
            }

            @keyframes brand-horizontal {
              from { transform: translateX(0); }
              to { transform: translateX(calc(-100% - 46px)); }
            }

            @media screen and (min-width: 1440px) {
              @keyframes brand-horizontal {
                from { transform: translateX(0); }
                to { transform: translateX(calc(-100% - 72px)); }
              }
            }
          `}
        </style>
      </div>
      <div className="logos">
        <div className="logos_row">
          <a
            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c03-8c4e74c2"
            href="https://www.accenture.com/us-en"
            target="_blank"
            className="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788726e54fd474715a07e_logo01.webp"
              loading="lazy"
              alt=""
              className="logos_img"
            />
          </a>
          <a
            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c05-8c4e74c2"
            href="https://www.amazon.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c07-8c4e74c2"
            href="https://www.aljazeera.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788732d026f4cc9df4da9_logo03.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a href="https://kpmg.com" target="_blank" class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c0b-8c4e74c2"
            href="https://kw.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c0d-8c4e74c2"
            href="https://www.nvidia.com/en-us/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c11-8c4e74c2"
            href="https://pattern.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c13-8c4e74c2"
            href="https://www.salesforce.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788738924578962e7faf2_logo08.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_0ab14d0e-8fad-82e0-ff07-2597876d4c17-8c4e74c2"
            href="https://www.volvo.com/en/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877c7f2428b8355f0dc_logo10.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
        </div>
        <div class="logos_row">
          <a
            id="w-node-_069f9897-76a0-0b51-0358-ff116630c3fe-8c4e74c2"
            href="https://www.accenture.com/us-en"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788726e54fd474715a07e_logo01.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_069f9897-76a0-0b51-0358-ff116630c400-8c4e74c2"
            href="https://www.amazon.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_069f9897-76a0-0b51-0358-ff116630c402-8c4e74c2"
            href="https://www.aljazeera.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788732d026f4cc9df4da9_logo03.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a href="https://kpmg.com" target="_blank" class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_069f9897-76a0-0b51-0358-ff116630c406-8c4e74c2"
            href="https://kw.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_069f9897-76a0-0b51-0358-ff116630c408-8c4e74c2"
            href="https://www.nvidia.com/en-us/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_069f9897-76a0-0b51-0358-ff116630c40c-8c4e74c2"
            href="https://pattern.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_069f9897-76a0-0b51-0358-ff116630c40e-8c4e74c2"
            href="https://www.salesforce.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788738924578962e7faf2_logo08.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_069f9897-76a0-0b51-0358-ff116630c410-8c4e74c2"
            href="https://www.volvo.com/en/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877c7f2428b8355f0dc_logo10.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
        </div>
        <div class="logos_row">
          <a
            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dbb-8c4e74c2"
            href="https://www.accenture.com/us-en"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788726e54fd474715a07e_logo01.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dbd-8c4e74c2"
            href="https://www.amazon.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873deec7d7e37bdeea1_logo02.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dbf-8c4e74c2"
            href="https://www.aljazeera.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788732d026f4cc9df4da9_logo03.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a href="https://kpmg.com" target="_blank" class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877e4cf298e0b0fde90_logo11.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dc3-8c4e74c2"
            href="https://kw.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678873c24df339f07d9349_logo04.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dc5-8c4e74c2"
            href="https://www.nvidia.com/en-us/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788737283d01b95257cfe_logo05.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dc9-8c4e74c2"
            href="https://pattern.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/6567887342c8b40c4b7cc7b7_logo07.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dcb-8c4e74c2"
            href="https://www.salesforce.com/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/656788738924578962e7faf2_logo08.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
          <a
            id="w-node-_12d3a43a-c2c4-bd7c-4e38-7d1ddd532dcd-8c4e74c2"
            href="https://www.volvo.com/en/"
            target="_blank"
            class="w-inline-block">
            <img
              src="https://assets-global.website-files.com/63fdcbe48aa020c0a5493507/65678877c7f2428b8355f0dc_logo10.webp"
              loading="lazy"
              alt=""
              class="logos_img"
            />
          </a>
        </div>
      </div>
      <div class="logos-shadows right"></div>
      <div class="logos-shadows"></div>
    </div>
  );
};

export default SectionPart2;
