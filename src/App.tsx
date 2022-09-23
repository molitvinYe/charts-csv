import React, { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PieChartPage from "./pages/PieChartPage";
import LineChartPage from "./pages/LineChartPage";
import { useAppDispatch } from "./hooks/redux";
import { fetchData } from "./store/reducers/ActionCreators";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
