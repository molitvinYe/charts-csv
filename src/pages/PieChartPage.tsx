import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import CategoriesList from "../components/lists/CategoriesList";
import PieChart from "../components/charts/PieChart";

const PieChartPage = () => {
  return (
    <PageLayout>
      <CategoriesList />
      <PieChart />
    </PageLayout>
  );
};

export default PieChartPage;
