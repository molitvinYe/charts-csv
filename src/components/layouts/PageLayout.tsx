import React from "react";
import Header from "../header/Header";

const PageLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default PageLayout;
