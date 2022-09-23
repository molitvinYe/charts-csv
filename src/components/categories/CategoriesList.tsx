import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { dataSlice } from "../../store/reducers/DataSlice";
import Typography from "@mui/material/Typography";
import styles from "./CategoriesList.module.css";

const CategoriesList = () => {
  const dispatch = useAppDispatch();
  const { categories } = useAppSelector((state) => state.dataReducer);

  const handleToggle = (value: string) => () => {
    const checked = [...categories.filter];

    if (checked.includes(value)) {
      checked.splice(checked.indexOf(value), 1);
    } else {
      checked.push(value);
    }

    dispatch(dataSlice.actions.setCategories(checked));
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
                    checked={categories.filter.includes(value)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={`${value}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default CategoriesList;
