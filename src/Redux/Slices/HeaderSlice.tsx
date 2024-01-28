import { createSlice } from "@reduxjs/toolkit";

const headerSlice = createSlice({
  name: "headerStates",
  initialState: {
    sidebarToggle: "",
    backgroundChange: false,
    bookmarkToggle: "",
    sidebarWrapper: "compact-wrapper",
  },
  reducers: {
    setBackground: (state, action) => {
      state.backgroundChange = action.payload;
    },
    sidebarToggle: (state, action) => {
      state.sidebarToggle = action.payload;
    },
    bookmarkToggle: (state, action) => {
      state.bookmarkToggle = action.payload;
    },
    setSidebarWrapper: (state, action) => {
      state.sidebarWrapper = action.payload;
    },
  },
});

export default headerSlice.reducer;
export const { setBackground, sidebarToggle, bookmarkToggle, setSidebarWrapper } = headerSlice.actions;
