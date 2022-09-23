import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <NavLink to="/pie-chart" className={styles.link}>
        Pie chart
      </NavLink>
      <NavLink to="/line-chart" className={styles.link}>
        Line chart
      </NavLink>
    </nav>
  );
};

export default Navigation;
