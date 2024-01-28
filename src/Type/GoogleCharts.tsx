export interface GoogleComboChartTypes {
  width: string;
  height: string;
  chartType: "ComboChart";
  data: Array<Array<string | number>>;
  options: {
    title: string;
    vAxis: {
      title: string;
    };
    hAxis: {
      title: string;
    };
    seriesType: "bars";
    colors: string[];
    series: {
      [key: number]: {
        type: "line";
      };
    };
    backgroundColor: string;
  };
  rootProps: {
    "data-testid": string;
  };
}

export interface ComboChartProps {
  data: GoogleComboChartTypes;
}

export interface RotatingPieChart1Props {
  data: RotatingPieChart1Type;
  pieStartAngle: number;
  pieSliceText: string;
}

export interface RotatingPieChart1Type {
  width: string;
  height: string;
  chartType: "PieChart";
  data: (string | number)[][];
  option: {
    legend: "none";
    pieSliceText: "label";
    title: string;
    colors: string[];
    pieStartAngle: number;
  };
  rootProps: {
    "data-testid": string;
  };
}

export interface RotatingPieChart2Type {
  width: string;
  height: string;
  chartType: "PieChart";
  data: (string | number)[][];
  option: {
    title: string;
    legend: "none";
    pieSliceText: "label";
    colors: string[];
    slices: {
      [key: number]: {
        offset: number;
      };
    };
  };
  rootProps: {
    "data-testid": string;
  };
}

export interface RotatingPieChart2Props {
  data: RotatingPieChart2Type;
}

export interface GanttChartType {
  width: string;
  height: string;
  chartType: "Gantt";
  data: (
    | (string | number | null)[]
    | {
        type: string;
        label: string;
      }[]
  )[];
  option: {
    gantt: {
      criticalPathEnabled: boolean;
      arrow: {
        angle: number;
        width: number;
        color: string;
        radius: number;
      };
      palette: Array<{
        color: string;
        dark: string;
        light: string;
      }>;
    };
    backgroundColor: string;
  };
  rootProps: {
    "data-testid": string;
  };
}

export interface GanttChartProps {
  data: GanttChartType;
}

export interface GooglePieChart1Type {
  width: string;
  height: string;
  chartType: "PieChart";
  data: Array<[string, string | number]>;
  option: {
    title: string;
    colors: string[];
  };
  rootProps: {
    "data-testid": string;
  };
}

export interface GooglePieChart2Type {
  width: string;
  height: string;
  chartType: "PieChart";
  data: Array<[string, string | number]>;
  option: {
    title: string;
    colors: string[];
  };
  rootProps: {
    "data-testid": string;
  };
}

export interface DonutChartType {
  width: string;
  height: string;
  chartType: string;
  data: Array<[string, number | string]>;
  option: {
    title: string;
    colors: string[];
  };
}

export interface SliceChartType {
  width: string;
  height: string;
  chartType: "PieChart";
  data: Array<[string, string | number]>;
  option: {
    title: string;
    colors: string[];
    sliceVisibilityThreshold: number;
  };
  rootProps: {
    "data-testid": string;
  };
}

export interface AreaChartType {
  width: string;
  height: string;
  chartType: string;
  data: (string | number)[][];
  option: {
    title: string;
    hAxis: {
      title: string;
      titleTextStyle: {
        color: string;
      };
    };
    vAxis: {
      minValue: number;
    };
    colors: string[];
    chartArea: {
      width: string;
      height: string;
    };
  };
  rootProps: {
    "data-testid": string;
  };
}

export interface StackingChartType {
  width: string;
  height: string;
  chartType: "AreaChart";
  data: Array<Array<string | number>>;
  option: {
    isStacked: boolean;
    height: number;
    legend: {
      position: string;
      maxLines: number;
    };
    vAxis: {
      minValue: number;
    };
    colors: string[];
  };
  rootProps: {
    "data-testid": string;
  };
}

export interface LineChartType {
  width: string;
  height: string;
  chartType: "LineChart";
  data: Array<Array<string | number>>;
  option: {
    chart: {
      title: string;
      subtitle: string;
    };
    colors: string[];
    height: number;
    width?: string;
    backgroundColor: string;
    chartArea: {
      left: number;
      top: number;
      bottom: number;
    };
  };
  rootProps: {
    "data-testid": string;
  };
}

export interface BasicBarChartType {
  width: string;
  height: string;
  chartType: "BarChart";
  data: Array<Array<string | number>>;
  option: {
    title: string;
    chartArea: {
      width: string;
    };
    colors: string[];
    backgroundColor: string;
    hAxis: {
      title: string;
      minValue: number;
    };
    vAxis: {
      title: string;
    };
  };
  rootProps: {
    "data-testid": string;
  };
}

export interface MaterialDesignChartType {
  width: string;
  height: string;
  chartType: "Bar";
  data: Array<Array<string | number>>;
  option: {
    colors: string[];
    chart: {
      title: string;
      subtitle: string;
    };
  };
  rootProps: {
    "data-testid": string;
  };
}

export interface BarChart2Type {
  width: string;
  height: string;
  chartType: "BarChart";
  data: (
    | (string | number)[]
    | (
        | string
        | {
            role: string;
          }
        | {
            sourceColumn: number;
            role: string;
            type: string;
            calc: string;
          }
      )[]
  )[];
  option: {
    title: string;
    height: number;
    bar: {
      groupWidth: string;
    };
    backgroundColor: string;
    legend: {
      position: string;
    };
  };
}

export interface GoogleChartType {
  width?: string;
  height?: string;
  chartType?: "PieChart" | "AreaChart" | "LineChart" | "BarChart" | "Bar";
  data: Array<Array<string | number | { role: string; sourceColumn?: number; type?: string; calc?: string }>>;
  option: {
    chart?: {
      title: string;
      subtitle: string;
    };
    title?: string;
    legend?: string | { position: string; maxLines?: number };
    pieSliceText?: string;
    colors?: string[];
    pieStartAngle?: number;
    sliceVisibilityThreshold?: number;
    isStacked?: boolean;
    height?: number;
    width?: any;
    bar?: {
      groupWidth: string;
    };
    backgroundColor?: string;
    hAxis?: {
      title?: string;
      titleTextStyle?: {
        color: string;
      };
      minValue?: number;
    };
    vAxis?: {
      minValue?: number;
      title?: string;
    };
    chartArea?: {
      width?: any;
      height?: string;
      left?: number;
      top?: number;
      right?: string;
      bottom?: number;
    };
    criticalPathEnabled?: boolean;
    arrow?: {
      angle?: number;
      width?: number;
      color?: string;
      radius?: number;
    };
    palette?: Array<{
      color: string;
      dark: string;
      light: string;
    }>;
    seriesType?: string;
    slices?: {
      [key: string]: {
        offset: number;
      };
    };
  };
  rootProps?: {
    "data-testid": string;
  };
}

export interface CommonPieChartProps {
  data: GoogleChartType;
  title: string;
  colClass?: string;
  digit?: string;
}
