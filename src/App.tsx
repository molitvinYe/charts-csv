import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PieChartPage from "./pages/PieChartPage";
import LineChartPage from "./pages/LineChartPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="pie-chart" />} />
      <Route path="pie-chart" element={<PieChartPage />} />
      <Route path="line-chart" element={<LineChartPage />} />
      <Route path="*" element={<Navigate to="pie-chart" />} />
    </Routes>
  );
}

export default App;
