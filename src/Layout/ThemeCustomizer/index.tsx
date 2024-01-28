import { useState } from "react";
import TabCustomizer from "./CustomizerTabs";
import NavCustomizer from "./NavCustomizer";

const ThemeCustomizer = () => {
  const [selected, setSelected] = useState("check-layout");
  const [openCus, setOpenCus] = useState(false);

  const callbackNav = (select: any, open: any) => {
    setSelected(select);
    setOpenCus(open);
  };

  return (
    <div className={`customizer-links ${openCus ? "open" : ""}`}>
      <NavCustomizer callbackNav={callbackNav} selected={selected} />
      <div className={`customizer-contain ${openCus ? "open" : ""}`}>
        <TabCustomizer selected={selected} callbackNav={callbackNav} />
      </div>
    </div>
  );
};

export default ThemeCustomizer;
