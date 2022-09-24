import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import CategoriesList from "../components/categories/CategoriesList";
import PieChart from "../components/pieChart/PieChart";
import Row from "../components/ui/Row";

const PieChartPage = () => {
  return (
    <PageLayout>
      <Row>
        <CategoriesList />
        <PieChart />
      </Row>
    </PageLayout>
  );
};

export default PieChartPage;
