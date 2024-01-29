import { createSlice, nanoid } from "@reduxjs/toolkit";
const initialState = {
  apiButtonClicked: false,
};
export const addApiSlice = createSlice({
  name: "addapi",
  initialState,
  reducers: {
    updateApiButtonClicked: (state, action) => {
      state.apiButtonClicked = action.payload;
    },
  },
});

export const { updateApiButtonClicked } = addApiSlice.actions;
export default addApiSlice.reducer;
