import { knowledgeBaseSliceType, knowledgeDataPropsType } from "@/Type/Knowledgebase";
import { knowledgeData } from "@/app/apiData/knowledgeBase";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchContent: any = createAsyncThunk("fetch/knowledge", async () => {
  const res = await fetch("/api/knowledgeApi");
  const result = await res.json();
  return result;
});
const initialState: knowledgeBaseSliceType = {
  data: [],
  inputValue: "",
};
const knowledgeBaseSlice = createSlice({
  name: "headerStates",
  initialState,
  reducers: {
    setKnowledgeData: (state, action) => {
      state.data = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    filterKnowledgeData: (state, action) => {
      const copiedData = [...knowledgeData];
      const searchedData = copiedData.filter((item: knowledgeDataPropsType) => {
        return item.title.toLowerCase().includes(action.payload.toLowerCase());
      });
      state.data = searchedData;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default knowledgeBaseSlice.reducer;
export const { setKnowledgeData, setInputValue, filterKnowledgeData } = knowledgeBaseSlice.actions;
