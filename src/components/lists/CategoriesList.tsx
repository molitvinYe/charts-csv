import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { dataSlice } from "../../store/reducers/DataSlice";
import { COLORS } from "../../store/constants";
import styles from "./List.module.css";

const CategoriesList = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.dataReducer);

  const handleToggle = (value: string) => () => {
    dispatch(dataSlice.actions.setCategories(value));
  };

  return (
    <div className={styles.container}>
      <span className={styles.title}>Categories</span>
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        className={styles.list}
      >
        {categories.all.map((value) => {
          const labelId = `checkbox-list-label-${value}`;
          const isChecked = categories.filter.includes(value);

          return (
            <ListItem key={value} disablePadding>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
              >
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={isChecked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value}`} />
                <div
                  style={{
                    height: "10px",
                    width: "10px",
                    backgroundColor: `${
                      COLORS[categories.all.indexOf(value) % COLORS.length]
                    }`,
                    filter: `grayscale(${isChecked ? "0" : "100%"})`,
                  }}
                ></div>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default CategoriesList;
