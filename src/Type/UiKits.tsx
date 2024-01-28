import { Dispatch, SetStateAction } from "react";
//There is not Valid Type for Placement

export interface CommonBreadcrumbProps {
  parent: string;
  pageTitle: string;
}

export interface CommonHeaderProps {
  heading: string;
  subHeading?: {
    text?: string;
    code?: string;
    strong?: string;
  }[];
}

export interface HeaderClass {
  title: string;
  children?: String;
}

export interface CommonDropdownProps {
  item: string[];
}

export interface SplitButtonDropdownProps {
  item: {
    buttonText: string;
    items: string[];
    buttonColor: string;
  };
}

export interface RoundedDropdownProps {
  item: {
    buttonText: string;
    items: string[];
    buttonColor: string;
  };
}

export interface CommonPopover {
  item: {
    id: number;
    placement?: any;
    buttonText?: string;
    buttonColor: string;
    popoverHeader?: string;
    popoverBody: string | JSX.Element;
    offset?: number | string;
    trigger?: undefined | string;
  };
}

export interface ToolTipProps {
  item: {
    tooltip: string;
    id: number | string;
    placement?: any;
  };
}

export interface HTMLTooltipProps {
  item: {
    id: number;
    buttonText: string;
    placement?: any;
    tooltip?: JSX.Element;
  };
}

export interface OffsetTooltipProps {
  item: {
    buttonText: string;
    placement?: any;
    id: number;
    offset: number[];
  };
}

export interface CommonModelType {
  isOpen: boolean;
  toggler: () => void;
  size?: string;
  title: string;
  bodyClass?: string;
  children?: string | any;
}

export interface ModalButtonType {
  btnText: string;
  defaultVal: string;
}

export interface FormModelType {
  modal: boolean;
  NewMessage: string;
  toggle: () => void;
  defaultVal: string;
}

export interface CommonTabNavProps {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}

export interface CommonAlertProps {
  btnText?: string;
  item: {
    icon?: React.JSX.Element;
    alertColor?: string;
    id?: number;
    divClass?: string;
    alertText: any;
    buttonClose?: string;
    span?: boolean;
  };
}
