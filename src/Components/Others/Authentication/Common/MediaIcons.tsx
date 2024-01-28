import { FaceBookSVG, GoogleSVG, InstagramSVG, TwitterSVG } from "@/svgIcons";
import React from "react";

const MediaIcons = () => {
  return (
    <ul className="simple-list login-social flex-row">
      <li>
        <a href="https://www.google.com/">
          <GoogleSVG />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/">
          <TwitterSVG />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/">
          <InstagramSVG />
        </a>
      </li>
      <li>
        <a href="https://www.facebook.com/">
          <FaceBookSVG />
        </a>
      </li>
    </ul>
  );
};

export default MediaIcons;
