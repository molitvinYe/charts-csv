import React, {useState, useEffect} from "react";
import PageLayout from "../components/layouts/PageLayout";
import DateRangeList from "../components/lists/DateRangeList";
import LineChart from "../components/charts/LineChart";
import { useAppSelector } from "../hooks/redux";

const LineChartPage = () => {
  const { data, dateRange, parameter, categories } = useAppSelector(
    (state) => state.dataReducer
  );

  const [categoriesInDate, setCategoriesInDate] = useState(null);

  useEffect(() => {
    if (data.length === 0 && dateRange.length === 0) return;

    const dateRangeObj = dateRange.filter.reduce((result, date) => {
      result[date] = {};
      return result;
    }, {});

    data.forEach((row) => {
      if (row.category_desc === undefined || row[parameter] === undefined)
        return;
      if (!categories.filter.includes(row.category_desc)) return;

      const currentDateObj = dateRangeObj[row.week_ref];
      if (currentDateObj === undefined) return;

      if (currentDateObj[row.category_desc] === undefined) {
        currentDateObj[row.category_desc] = row[parameter];
      } else {
        currentDateObj[row.category_desc] = Number(
          (+currentDateObj[row.category_desc] + +row[parameter]).toFixed(2)
        );
      }
    });

    setCategoriesInDate(dateRangeObj);
  }, [data, dateRange, parameter, categories.filter]);

  return (
    <PageLayout>
      {categoriesInDate && <>
        <DateRangeList categoriesInDate = {categoriesInDate}/>
        <LineChart categoriesInDate = {categoriesInDate}/>
      </>}
    </PageLayout>
  );
};

export default LineChartPage;
