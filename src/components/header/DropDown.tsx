import React from "react";
import { CHART_PARAMETERS } from "../../store/constants";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import styles from "./DropDown.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { dataSlice } from "../../store/reducers/DataSlice";

const DropDown = () => {
  const dispatch = useAppDispatch();
  const { parameter } = useAppSelector((state) => state.dataReducer);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(dataSlice.actions.setParameter(event.target.value));
  };

  return (
    <div className={styles.dropDown}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">
          Parameter
        </InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={parameter}
          onChange={handleChange}
          label="Age"
        >
          {CHART_PARAMETERS.map((par) => (
            <MenuItem key={par} value={par}>
              {par}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default DropDown;
