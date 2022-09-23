import React from "react";
import Button from "@mui/material/Button";
import { dataSlice } from "../../store/reducers/DataSlice";
import { useAppDispatch } from "../../hooks/redux";

const ResetButton = () => {
  const dispatch = useAppDispatch();

  const resetFilters = () => {
    dispatch(dataSlice.actions.resetFilters());
  };

  return (
    <Button variant="contained" onClick={resetFilters}>
      Reset
    </Button>
  );
};

export default ResetButton;
