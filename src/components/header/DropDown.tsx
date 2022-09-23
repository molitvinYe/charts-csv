import React from "react";
import { CHART_PARAMETERS } from "../../store/constants";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const DropDown = () => {
  const [parameter, setParameter] = React.useState(CHART_PARAMETERS[0]);

  const handleChange = (event: SelectChangeEvent) => {
    setParameter(event.target.value);
  };

  return (
    <div>
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
