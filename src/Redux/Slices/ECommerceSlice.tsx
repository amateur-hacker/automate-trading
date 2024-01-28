import { EccomInitialStateProps } from "@/Type/ECommerce";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductData :any = createAsyncThunk("fetch/product", async () => {
  const res = await fetch("/api/eCommerceApi");
  const result = await res.json();
  return result;
});

const initialState: EccomInitialStateProps = {
  Data: [],
  cartData: [],
  filterValue: {
    brand: ["Diesel", "Hudson", "Lee"],
    color: "pink",
    value: { min: 100, max: 950 },
    sortBy: "",
    searchBy: "",
    category: ["Women Skirt", "Wonder Woman", "Man's Jacket", "Roadster", "Woman T-shirt"],
  },
};

const EcommerceSlice = createSlice({
  name: "headerStates",
  initialState,
  reducers: {
    addCartData: (state, action) => {
      let flag = true;
      state.cartData?.map((item: any, index) => {
        if (item.id === action.payload.id) {
          state.cartData[index] = { ...action.payload.item, quantity: state.cartData[index].quantity + action.payload.increment };
          flag = false;
        }
      });

      if (flag == true) {
        state.cartData.push({ ...action.payload.item, quantity: action.payload.increment });
      }
    },
    decrementCart: (state: any, action) => {
      if (state.cartData[action.payload].quantity == 1) {
        return;
      }
      state.cartData[action.payload].quantity -= 1;
    },
    incrementCart: (state: any, action) => {
      state.cartData[action.payload].quantity += 1;
    },
    filterCategoryState: (state, action) => {
      if (!state.filterValue.category.includes(action.payload.CategoryChecked)) {
        state.filterValue.category.push(action.payload.CategoryChecked);
      }
    },
    deleteCategoryState: (state, action) => {
      state.filterValue.category = state.filterValue.category.filter((item) => {
        return item !== action.payload.CategoryUnChecked;
      });
    },
    filterBrandState: (state, action) => {
      if (!state.filterValue.brand.includes(action.payload.brandChecked)) {
        state.filterValue.brand.push(action.payload.brandChecked);
      }
    },
    deleteBrandState: (state, action) => {
      state.filterValue.brand = state.filterValue.brand.filter((item) => {
        return item !== action.payload.brandUnChecked;
      });
    },
    setColorState: (state, action) => {
      state.filterValue.color = action.payload;
    },
    setPrizeRange: (state, action) => {
      state.filterValue.value = { min: action.payload[0], max: action.payload[1] };
    },
    setSearchInput: (state, action) => {
      state.filterValue.searchBy = action.payload;
    },
    SortBy: (state, action) => {
      state.filterValue.sortBy = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProductData.fulfilled, (state, action) => {
      state.Data = action.payload;
    });
  },
});

export default EcommerceSlice.reducer;
export const { SortBy, setSearchInput, deleteBrandState, setPrizeRange, setColorState, filterBrandState, deleteCategoryState, filterCategoryState, addCartData, decrementCart, incrementCart } = EcommerceSlice.actions;
