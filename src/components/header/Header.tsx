import React from "react";
import Container from "@mui/material/Container";
import DropDown from "./DropDown";
import ResetButton from "./ResetButton";
import Navigation from "./Navigation";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <Container maxWidth="lg">
        <div className={styles.body}>
          <DropDown />
          <ResetButton />
          <Navigation />
        </div>
      </Container>
    </header>
  );
};

export default Header;
