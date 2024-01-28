import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    layoutType: "",
    sideBarType: "compact-wrapper",
  },
  reducers: {
    handleLayoutType: (state, action) => {
      state.layoutType = action.payload;
    },
    handleSidebarType: (state, action) => {
      state.sideBarType = action.payload;
    },
  },
});

export default themeSlice.reducer;
export const { handleSidebarType, handleLayoutType } = themeSlice.actions;
