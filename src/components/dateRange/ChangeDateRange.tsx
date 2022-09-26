import React, { useState, useEffect } from "react";
import { dataSlice } from "../../store/reducers/DataSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import styles from "./ChangeDateRange.module.css";

const ChangeDateRange = () => {
  const { dateRange } = useAppSelector((state) => state.dataReducer);
  const dispatch = useAppDispatch();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  useEffect(() => {
    const firstDate = dateRange.all.at(0);
    const lastDate = dateRange.all.at(-1);

    if (firstDate === undefined || lastDate === undefined) return;

    if (
      +startDate >= +firstDate &&
      +startDate <= +lastDate &&
      +endDate >= +firstDate &&
      +endDate <= +lastDate &&
      +startDate < +endDate &&
      +endDate - +startDate >= 2
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [startDate, endDate, dateRange.all]);

  const handleClose = () => {
    dispatch(dataSlice.actions.setDataRange([startDate, endDate]));
    setOpen(false);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="contained"
        style={{ marginLeft: "10px" }}
      >
        Change date range
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.box}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Change date range
          </Typography>

          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Available date range from {dateRange.all.at(0)} to{" "}
            {dateRange.all.at(-1)}
          </Typography>

          <TextField
            id="standard-basic"
            label="Start"
            variant="standard"
            type="number"
            style={{ marginBottom: "10px" }}
            onChange={(event) => setStartDate(event.target.value)}
          />

          <TextField
            id="standard-basic"
            label="End"
            variant="standard"
            type="number"
            onChange={(event) => setEndDate(event.target.value)}
          />

          <Button
            onClick={handleClose}
            variant="contained"
            style={{ marginTop: "40px" }}
            disabled={isDisabled}
          >
            Change
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default ChangeDateRange;
