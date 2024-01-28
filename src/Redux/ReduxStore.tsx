import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { BookMarkReducer } from "./Slices/BookMarkReducer";
import BookmarkSlice from "./Slices/BookmarkSlice";
import ChatReducer from "./Slices/ChatSlice";
import { ContactReducer } from "./Slices/ContactReducer";
import EcommerceSlice from "./Slices/ECommerceSlice";
import FilterSlice from "./Slices/FilterSlice";
import HeaderSlice from "./Slices/HeaderSlice";
import KnowledgeBaseSlice from "./Slices/KnowledgeBaseSlice";
import ProjectSlice from "./Slices/ProjectSlice";
import SidebarSlice from "./Slices/SidebarSlice";
import { TaskReducer } from "./Slices/TaskReducer";
import themeSlice from "./Slices/ThemeCostomizer";
import { TodoReducer } from "./Slices/TodoReducer";
import TypeaheadSlice from "./Slices/TypeaheadSlice";
import langSlice from "./Slices/language";

const Store = configureStore({
  reducer: {
    headerSlice: HeaderSlice,
    knowledgeBaseSlice: KnowledgeBaseSlice,
    projectSlice: ProjectSlice,
    typeAheadSlice: TypeaheadSlice,
    TodoReducer,
    ContactReducer,
    TaskReducer,
    ChatReducer,
    sidebarSlice: SidebarSlice,
    EcommerceSlice,
    FilterSlice,
    BookmarkSlice,
    themeSlice,
    BookMarkReducer,
    langSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
