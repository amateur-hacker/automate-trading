import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  webHookLogData: {
    s_No: "",
    request_ID: "",
    sub_ID: "",
    broker_Name: "",
    broker_Type: "",
    content_Data: "",
    error_Logs: "",
    success_Logs: "",
    infO_Logs: "",
    date_Intime: "",
    date_Outtime: "",
  },
  webHookLogs: [], // new state to store the array of logs
};
export const webHookSlice = createSlice({
  name: "addapi",
  initialState,
  reducers: {
    updateWebHookLogData: (state, action) => {
      // Assuming action.payload contains the updated data
      state.webHookLogData = { ...state.webHookLogData, ...action.payload };
    },
    setWebHookLogs: (state, action) => {
      state.webHookLogs = action.payload;
    },
  },
});

export const { setWebHookLogs } = webHookSlice.actions;
export default webHookSlice.reducer;
// export const { updateApiButtonClicked } = addApiSlice.actions;
// export default addApiSlice.reducer;
