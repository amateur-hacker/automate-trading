import { AsyncThunk, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchTypeaheadData:any = createAsyncThunk("fetchType", async () => {
  try {
    const res = await fetch("/api/typeAheadApi");
    const result = await res.json();
    return result;
  } catch (error) {
    return error;
  }
});

const typeAheadSlice = createSlice({
  name: "typeaheadStates",
  initialState: {
    data: [],
  },
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchTypeaheadData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default typeAheadSlice.reducer;
export const {} = typeAheadSlice.actions;
