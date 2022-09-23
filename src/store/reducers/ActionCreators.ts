import { AppDispatch } from "../store";
import dataUrl from "../data.csv";
import {dataSlice} from "./DataSlice";
import Papa from 'papaparse';
import { IData } from "../../modules/IData";

export const fetchData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(dataSlice.actions.dataFetching())

    Papa.parse(dataUrl, {
      delimiter: ",",
      header: true,
      download: true,
      complete: (result: {data: IData[]}) => {
        dispatch(dataSlice.actions.dataFetchingSuccess(result.data))
      }
   });
} catch (err) {
  dispatch(dataSlice.actions.dataFetchingError("error"))
}
}