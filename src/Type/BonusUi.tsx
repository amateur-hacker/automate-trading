export interface DropzoneType {
  getUploadParams?: () => {
    url: string;
  };
  handleChangeStatus?: () => void;
  handleSubmit?: () => void;
}

export interface SlickSliderProps {
  slides: number;
  title: string;
  rtl?: boolean;
  lazyLoad?: any;
  autoplay?: boolean;
  focusOnSelect?: boolean;
}

export interface PostReactType {
  h6: string;
}

export interface RemoveItemTreeViewType {
  id: number;
  text: string;
  isLeaf: boolean;
  children?: RemoveItemTreeViewType[];
}

export interface CopyDragAndDropOptionsType {
  copy: boolean;
  copySortSource: boolean;
  removeOnSpill: boolean;
  mirrorContainer: any;
  accepts: (target: Element | undefined) => boolean;
  copies: (el: Element | undefined) => boolean;
  copyItem: (sibling: HTMLElement | null) => boolean;
}

export interface StickyDataProps {
  id: number;
  isDeleted: boolean;
}

export interface PostHeaderProps {
  heading: string;
}
