export interface CommonDashboardDropDownProps {
  items: string[];
}

export interface CountdownProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export interface NoDataFoundProps {
  title: string;
}
