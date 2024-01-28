export interface CommonMultipleSubHeadingProps {
  heading: string;
  subHeading?: {
    spanData: {
      text: string;
      code?: string;
      strong?: string;
    }[];
  }[];
}

export interface HtmlColumnsInterface {
  name: string;
  position: string;
  salary: string;
  office: string;
  email: string;
  color: string;
  badge: string;
  id: number;
}

export interface zeroConfigurationTableColumnsType {
  id: number;
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: string;
  salary: string;
  action: any;
}

export interface stateSavingTableDataType {
  id: number;
  name: string;
  position: string;
  color: string;
  office: string;
  age: string;
  startDate: string;
  salary: string;
  action: any;
}

export interface scrollVerticalType {
  name: any;
  position: string;
  office: string;
  age: string;
  startDate: string;
  salary: string;
  action: any;
}

export interface stockResultTableData {
  name: string;
  symbol: string;
  price: string;
  difference: any;
  last: any;
}

export interface rowCreateCallBackData {
  name?: string;
  email: string;
  experience: string;
  sex: string;
  contactNumber: string;
  salary: any;
}

export interface customCellInterFace {
  value: number;
}

export interface addRowsTable {
  column1: number;
  column2: number;
  column3: number;
  column4: number;
  column5: number;
}

export interface deleteRowData {
  name: string;
  id: number;
  job: string;
  companyName: string;
  invoiceNumber: string;
  credit: any;
  date: string;
  priority: any;
  budget: string;
}

export interface FilterData {
  name: any;
  position: string;
  office: string;
  age: number;
  startDate: any;
  salary: string;
}

export interface htmlColumnsInterface {
  name: string;
  position: string;
  salary: string;
  office: string;
  email: any;
  color: string;
  badge: string;
  id: number;
}
export interface ajaxSourcedColumnsInterface {
  name: string;
  position: string;
  office: string;
  date: string;
  extends: string;
  salary: string;
}
export interface serverSideProcessingColumnsInterface {
  name: string;
  position: string;
  office: string;
  lastName: string;
  date: string;
  salary: string;
}
export interface ExpandedComponentProps {
  data: {
    id: number;
    name: string;
  };
}
