import React from "react";
import List from "@mui/material/List";
import { useAppSelector } from "../../hooks/redux";
import styles from "./List.module.css";
import DateRangeItem from "./DateRangeItem";

const DateRangeList = ({categoriesInDate}) => {
  const {dateRange} = useAppSelector((state) => state.dataReducer);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Date range</span>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        className={styles.list}
      >
        {dateRange.filter.map((value) => (
          <DateRangeItem key={value} value={value} list = {categoriesInDate[value]}/>
        ))}
      </List>
    </div>
  );
};

export default DateRangeList;
