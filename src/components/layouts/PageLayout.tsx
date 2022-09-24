import React from "react";
import Header from "../header/Header";
import Container from "@mui/material/Container";
import styles from "./PageLayout.module.css";

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.main}>
        <Container maxWidth="lg">{children}</Container>
      </main>
    </div>
  );
};

export default PageLayout;
