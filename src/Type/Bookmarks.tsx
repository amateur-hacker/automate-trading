export interface bookMarkType {
  id: number;
  fillstar: boolean;
  image: string;
  title: string;
  website_url: string;
  desc: string;
  collection: string;
}
interface BookMarkReducerType {
  gridView?: boolean;
  bookmark: [] | bookMarkType[];
  activeTabss: string;
  mybookmarkData: [] | bookMarkType[];
  editRow: bookMarkType;
  editModal: boolean;
  editimgurl: string;
  bookMarkClass: boolean;
  IsOpen: boolean;
}
export interface RootState {
  BookMarkReducer: BookMarkReducerType;
}

export interface CommonBookmarkTabCardProps {
  tabId: string;
  tittle: string;
}

export interface DescriptionDataProps {
  data: bookMarkType;
  OnHandleClick: (book: bookMarkType) => void;
  RemoveFromBookmark: (bookmarkId: number, fillstar: boolean) => void;
}

export interface FavDescriptionDataProps {
  myBookData: bookMarkType;
  editBookmarkData: (data: bookMarkType) => void;
  Remove_from_my_bookmark: (mybookmarkId: number) => void;
}

export interface BookmarkModalProps {
  value: boolean;
  addToggle: () => void;
}

export interface ModalTagProps {
  tagToggle: () => void;
  value: boolean;
}
