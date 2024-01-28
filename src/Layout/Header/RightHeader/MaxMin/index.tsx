import React, { useState } from "react";
import { MaxMinSvg } from "@/svgIcons";
import { Href } from "@/Constant";

const MaximizeScreen = () => {
  const [fullScreen, setFullScreen] = useState(false);
  const fullScreenHandler = (isFullScreen: boolean) => {
    setFullScreen(isFullScreen);
    if (isFullScreen) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <li>
      <a className="text-dark" onClick={() => fullScreenHandler(!fullScreen)} href={Href}>
        <MaxMinSvg />
      </a>
    </li>
  );
};

export default MaximizeScreen;
