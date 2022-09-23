import React from "react";
import Button from "@mui/material/Button";

const ResetButton = () => {
  const resetFilters = () => {
    console.log("reset");
  };

  return (
    <Button variant="contained" onClick={resetFilters}>
      Reset
    </Button>
  );
};

export default ResetButton;
