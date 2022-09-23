import React from "react";
import DropDown from "./DropDown";
import ResetButton from "./ResetButton";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header>
      <DropDown />
      <ResetButton />
      <Navigation />
    </header>
  );
};

export default Header;
