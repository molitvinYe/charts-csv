import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const DateRangeItem: React.FC<{ value: string; list: any }> = ({
  value,
  list,
}) => {
  const [isShow, setIsShow] = useState(false);
  const labelId = `checkbox-list-label-${value}`;

  const handleToggle = (value: string) => () => {
    isShow ? setIsShow(false) : setIsShow(true);
  };

  return (
    <ListItem style={{ flexDirection: "column" }}>
      <ListItemButton
        role={undefined}
        onClick={handleToggle(value)}
        dense
        style={{ width: "100%" }}
      >
        <ListItemText id={labelId} primary={`${value}`} />
        {isShow ? <div>/\</div> : <div>\/</div>}
      </ListItemButton>
      {isShow && (
        <List>
          {Object.entries(list).map(([category, value]) => (
            <ListItem
              key={category}
              divider
            >{`${category}: ${value}`}</ListItem>
          ))}
        </List>
      )}
    </ListItem>
  );
};
//
export default DateRangeItem;
