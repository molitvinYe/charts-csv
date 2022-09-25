import React, { useState, useEffect } from "react";
import List from "@mui/material/List";
import { useAppSelector } from "../../hooks/redux";
import styles from "./List.module.css";
import DateRangeItem from "./DateRangeItem";

const DateRangeList = () => {
  const { data, dateRange, parameter, categories } = useAppSelector(
    (state) => state.dataReducer
  );

  const [categoriesInDate, setCategoriesInDate] = useState(null);

  useEffect(() => {
    if (data.length === 0 && dateRange.length === 0) return;

    const dateRangeObj = dateRange.filter.reduce((result, date) => {
      result[date] = {}
      return result
    }, {})

    data.forEach((row) => {
      if (row.category_desc === undefined || row[parameter] === undefined) return
      if (!categories.filter.includes(row.category_desc)) return
      
      const currentDateObj = dateRangeObj[row.week_ref]
      if (currentDateObj === undefined) return

      if (currentDateObj[row.category_desc] === undefined) {
        currentDateObj[row.category_desc] = row[parameter]
      } else {
        currentDateObj[row.category_desc] = Number((+currentDateObj[row.category_desc] + +row[parameter]).toFixed(2))
      }
    })

    setCategoriesInDate(dateRangeObj)
  }, [data, dateRange, parameter, categories.filter])

  return (
    <div className={styles.container}>
      <span className={styles.title}>Date range</span>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        className={styles.list}
      >
        {categoriesInDate && dateRange.filter.map((value) => (
          <DateRangeItem key={value} value={value} list = {categoriesInDate[value]}/>
        ))}
      </List>
    </div>
  );
};

export default DateRangeList;
