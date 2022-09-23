import React from "react";
import Header from "../header/Header";
import Container from "@mui/material/Container";

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />

      <main>
        <Container maxWidth="lg">{children}</Container>
      </main>
    </div>
  );
};

export default PageLayout;
