import { BookmarkData } from "@/Data/Header";
import { SidebarSliceType, bookmarkedDataType } from "@/Type/Sidebar";
import { createSlice } from "@reduxjs/toolkit";

let state: SidebarSliceType = {
  linkItemsArray: [],
  bookmarkedData: [...BookmarkData],
};
const sidebarSlice = createSlice({
  name: "sidebarSlice",
  initialState: state,
  reducers: {
    getLinkItemsArray: (state, action) => {
      state.linkItemsArray = action.payload;
    },
    handleBookmarkChange: (state, action) => {
      if (!action.payload.bookmarked) {
        state.bookmarkedData.push({ ...action.payload });
      } else {
        const tempt: bookmarkedDataType[] = [];
        state.bookmarkedData.forEach((ele) => {
          if (ele.id !== action.payload.id) {
            tempt.push(ele);
          }
        });
        state.bookmarkedData = tempt;
      }
      const temp = [...state.linkItemsArray];
      temp.splice(action.payload.id-1, 1, { ...action.payload, bookmarked: !action.payload.bookmarked });
      state.linkItemsArray = temp;
    },
  },
});

export default sidebarSlice.reducer;
export const { handleBookmarkChange, getLinkItemsArray } = sidebarSlice.actions;
