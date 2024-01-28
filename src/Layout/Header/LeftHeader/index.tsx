import React from "react";
import {SearchBar} from "./SearchBar";
import {ToggleIcon} from "./ToggleIcon";

const LeftHeader = () => {
  return (
    <>
      <ToggleIcon />
      <SearchBar />
    </>
  );
};

export default LeftHeader;
