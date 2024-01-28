import { Apply, UnlimitedColor } from "@/Constant";
import ConfigDB from "@/Config/ThemeConfig";
import { Fragment, useEffect, useState } from "react";
import { Button, Input, ListGroup } from "reactstrap";

const ColorsComponent = () => {
  const addColor = (default_color: string, secondary_color: string) => {
    ConfigDB.data.color.primary_color = default_color;
    ConfigDB.data.color.secondary_color = secondary_color;
  };
  const default_color = ConfigDB.data.color.primary_color;
  const secondary_color = ConfigDB.data.color.secondary_color;

  const [colorBackground1, setColorBackground1] = useState(default_color);
  const [colorBackground2, setColorBackground2] = useState(secondary_color);

  useEffect(() => {
    document.documentElement.style.setProperty("--theme-default", colorBackground1);
    document.documentElement.style.setProperty("--theme-secondary", colorBackground2);
    ConfigDB.data.color.primary_color = default_color;
    ConfigDB.data.color.secondary_color = secondary_color;
  }, [setColorBackground1, setColorBackground2]);

  const handleUnlimatedColor1Change = (e: any) => {
    const { value } = e.target;
    setColorBackground1(value);
   
  };
  const handleUnlimatedColor2Change = (e: any) => {
    const { value } = e.target;
    setColorBackground2(value);
  };
  const OnUnlimatedColorClick = () => {
    addColor(colorBackground1, colorBackground2);
    ConfigDB.data.color.primary_color = colorBackground1;
    ConfigDB.data.color.secondary_color = colorBackground2;

    document.documentElement.style.setProperty("--theme-default", colorBackground1);
    document.documentElement.style.setProperty("--theme-secondary", colorBackground2);
  };

  return (
    <Fragment>
      <h6>{UnlimitedColor}</h6>
      <ListGroup className=" flex-row layout-grid unlimited-color-layout">
        <Input type="color" name="Color-Background1" value={colorBackground1} onChange={(e) => handleUnlimatedColor1Change(e)} />
        <Input type="color" name="Color-Background2" value={colorBackground2} onChange={(e) => handleUnlimatedColor2Change(e)} />
        <Button color="primary" className="color-apply-btn color-apply-btn" onClick={OnUnlimatedColorClick}>
          {Apply}
        </Button>
      </ListGroup>
    </Fragment>
  );
};

export default ColorsComponent;
