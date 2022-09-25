import React from "react";
import PageLayout from "../components/layouts/PageLayout";
import DateRangeList from "../components/lists/DateRangeList";
import LineChart from "../components/charts/LineChart";

const LineChartPage = () => {
  return (
    <PageLayout>
      <DateRangeList />
      <LineChart />
    </PageLayout>
  );
};

export default LineChartPage;
