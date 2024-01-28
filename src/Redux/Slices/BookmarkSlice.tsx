import { BookmarkData } from "@/Data/Header";
import { createSlice } from "@reduxjs/toolkit";

let state = {
  bookmarkData: [...BookmarkData],
};

const BookmarkSlice = createSlice({
  name: "bookmarkSlice",
  initialState: state,
  reducers: {

  },
});

export default BookmarkSlice.reducer

