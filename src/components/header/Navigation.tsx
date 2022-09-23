import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/pie-chart">Pie chart</NavLink>
      <NavLink to="/line-chart">Line chart</NavLink>
    </div>
  );
};

export default Navigation;
