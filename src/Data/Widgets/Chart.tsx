//@ts-nocheck
import { ApexOptions } from "apexcharts";
import { ImagePath } from "@/Constant";
const primary = "#6362e7";
const secondary = "#ffc500";

export const SaleChartData = {
  lineSmooth: { divisor: 2 },
  series: [
    {
      data: [4, 2, 7, 8, 10, 12, 14],
    },
  ],
};

export const SalesChartOptions: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    height: 170,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: ["2023-09-19T00:00:00", "2023-09-19T01:30:00", "2023-09-19T02:30:00", "2023-09-19T03:30:00", "2023-09-19T04:30:00", "2023-09-19T05:30:00", "2023-09-19T06:30:00"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  grid: {
    show: false,
    padding: {
      left: -10,
      right: 0,
      bottom: -20,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
  colors: [primary],
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

export const ProjectChartData = {
  series: [
    {
      name: "series1",
      data: [2, 4, 6, 8, 6, 12, 14],
    },
  ],
};

export const ProjectChartOptions: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    height: 170,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: ["2023-09-19T00:00:00", "2023-09-19T01:30:00", "2023-09-19T02:30:00", "2023-09-19T03:30:00", "2023-09-19T04:30:00", "2023-09-19T05:30:00", "2023-09-19T06:30:00"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },

  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
      bottom: -40,
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.2,
      stops: [0, 100],
    },
  },
  colors: [secondary],
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

export const ProductsChartData = {
  series: [
    {
      data: [16, 14, 10, 12, 8, 4, 2],
    },
  ],
};

export const ProductsChartOptions: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    height: 170,
    type: "area",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
    categories: ["2023-09-19T00:00:00", "2023-09-19T01:30:00", "2023-09-19T02:30:00", "2023-09-19T03:30:00", "2023-09-19T04:30:00", "2023-09-19T05:30:00", "2023-09-19T06:30:00"],
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },

  grid: {
    show: false,
    padding: {
      left: -10,
      right: 0,
      bottom: -20,
    },
  },
  fill: {
    colors: ["#7dc006"],
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.8,
      opacityTo: 0.1,
      stops: [0, 100],
    },
  },
  colors: ["#7dc006"],
  tooltip: {
    x: {
      format: "dd/MM/yy HH:mm",
    },
  },
};

export const MarketingExpenseChartData = {
  series: [{ data: [44, 55, 57, 56, 61, 58, 63, 60, 66] }, { data: [76, 85, 101, 98, 87, 105, 91, 114, 94] }],
};

export const MarketingExpenseChartOptions: ApexOptions = {
  legend: {
    show: false,
  },
  chart: {
    type: "bar",
    height: 380,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "55%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    colors: ["transparent"],
    curve: "smooth",
    lineCap: "butt",
  },
  grid: {
    show: false,
    padding: {
      left: 0,
      right: 0,
    },
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          height: 300,
        },
        xaxis: {
          offsetY: 20,
        },
      },
    },
  ],
  xaxis: {
    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  fill: {
    colors: [primary, secondary, "#51bb25"],
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.9,
      stops: [0, 100],
    },
  },

  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

export const EarningChartOptions: ApexOptions = {
  chart: {
    height: 350,
    type: "radialBar",
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%",
        image: `${ImagePath}/email-template/success.png`,
        imageWidth: 60,
        imageHeight: 60,
        imageClipped: false,
      },
      dataLabels: {
        name: {
          show: false,
          color: "#fff",
        },
        value: {
          show: true,
          color: "#333",
          offsetY: 70,
          fontSize: "22px",
        },
      },
    },
  },
  fill: {
    type: "image",
    image: {
      src: `${ImagePath}/dashboard-2/rectangle-29.png`,
    },
  },
  stroke: {
    lineCap: "round",
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          height: 300,
        },
      },
    },
  ],
  labels: ["Volatility"],
};

export const EarningChartData = {
  series: [70],
};

export const TotalEarningChartData = [
  {
    number: "12%",
    time: "Year",
  },
  {
    number: "15%",
    time: "Month",
  },
  {
    number: "34%",
    time: "Today",
  },
];

export const SkillStatusChartData = {
  series: [71, 63],
  labels: ["Device 1", "Device 2"],
};

export const SkillStatusChartOptions: ApexOptions = {
  chart: {
    width: 450,
    height: 350,
    type: "radialBar",
    animations: {
      enabled: true,
      easing: "linear",
      dynamicAnimation: {
        speed: 1000,
      },
    },
    offsetY: -20,
    offsetX: 0,
  },
  legend: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 360,
      options: {
        chart: {
          height: 300,
        },
      },
    },
  ],
  fill: {
    type: "gradient",
    gradient: {
      shade: "light",
      type: "horizontal",
      shadeIntensity: 0.5,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  colors: [primary, secondary],
  //colors: ['#0db1d7', '#237895'],
  plotOptions: {
    radialBar: {
      inverseOrder: false,
      hollow: {
        margin: 5,
        size: "48%",
        background: "transparent",
      },
      track: {
        show: true,
        background: "#f2f2f2",
        strokeWidth: "10%",
        opacity: 1,
        margin: 3,
      },
    },
  },
};

export const Progress1ChartData = {
  series: [
    {
      name: "Process 1",
      data: [44],
    },
  ],
  labels: ["Device 1", "Device 2"],
};
export const Progress1ChartOptions: ApexOptions = {
  chart: {
    width: 990,
    height: 70,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 0,
  },
  fill: {
    opacity: 1,
    colors: [primary],
    type: "gradient",
    gradient: {
      gradientToColors: [primary],
    },
  },
  legend: {
    show: true,
  },
  colors: [primary],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "20%",
      colors: {
        backgroundBarColors: ["#f2f2f2"],
      },
    },
  },
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "Process 1",
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "44%",
    style: {
      fontSize: "16px",
    },
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: ["Process 1"],
  },
  yaxis: {
    max: 100,
  },
};

export const Progress2ChartData = {
  series: [
    {
      name: "Process 2",
      data: [80],
    },
  ],
  labels: ["Device 1", "Device 2"],
};

export const Progress2ChartOptions: ApexOptions = {
  chart: {
    width: 990,
    height: 70,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 0,
  },
  fill: {
    colors: ["#ffc500"],
    type: "gradient",
    gradient: {
      gradientToColors: ["#ffc500"],
    },
  },
  legend: {
    show: true,
  },
  colors: ["#ffc500"],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "20%",
      colors: {
        backgroundBarColors: ["#f2f2f2"],
      },
    },
  },
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "Process 2",
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "80%",
    style: {
      fontSize: "16px",
    },
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: ["Process 2"],
  },
  yaxis: {
    max: 100,
  },
};

export const Progress3ChartData = {
  series: [
    {
      name: "Process 3",
      data: [71],
    },
  ],
  labels: ["Device 1", "Device 2"],
};

export const Progress3ChartOptions: ApexOptions = {
  chart: {
    width: 990,
    height: 70,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 0,
  },
  fill: {
    colors: ["#7dc006"],
    type: "gradient",
    gradient: {
      gradientToColors: ["#7dc006"],
    },
  },
  legend: {
    show: true,
  },
  colors: ["#7dc006"],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "20%",
      colors: {
        backgroundBarColors: ["#f2f2f2"],
      },
    },
  },
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "Process 1",
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "71%",
    style: {
      fontSize: "16px",
    },
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: ["Process 3"],
  },
  yaxis: {
    max: 100,
  },
};

export const Progress4ChartData = {
  series: [
    {
      name: "Process 4",
      data: [62],
    },
  ],
  labels: ["Device 1", "Device 2"],
};

export const Progress4ChartOptions: ApexOptions = {
  chart: {
    width: 990,
    height: 70,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 0,
  },
  fill: {
    colors: [primary],
    type: "gradient",
    gradient: {
      gradientToColors: [primary],
    },
  },
  legend: {
    show: true,
  },
  colors: [primary],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "20%",
      colors: {
        backgroundBarColors: ["#f2f2f2"],
      },
    },
  },
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "Process 4",
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "62%",
    style: {
      fontSize: "16px",
    },
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: ["Process 4"],
  },
  yaxis: {
    max: 100,
  },
};

export const Progress5ChartData = {
  series: [
    {
      name: "Process 5",
      data: [34],
    },
  ],
  labels: ["Device 1", "Device 2"],
};

export const Progress5ChartOptions: ApexOptions = {
  chart: {
    width: 990,
    height: 70,
    type: "bar",
    stacked: true,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 0,
  },
  fill: {
    colors: ["#ff8819"],
    type: "gradient",
    gradient: {
      gradientToColors: ["#ff8819"],
    },
  },
  legend: {
    show: true,
  },
  colors: ["#ff8819"],
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "20%",
      colors: {
        backgroundBarColors: ["#f2f2f2"],
      },
    },
  },
  title: {
    floating: true,
    offsetX: -10,
    offsetY: 5,
    text: "Process 5",
  },
  subtitle: {
    floating: true,
    align: "right",
    offsetY: 0,
    text: "34%",
    style: {
      fontSize: "16px",
    },
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    categories: ["Process 5"],
  },
  yaxis: {
    max: 100,
  },
};

export const OrderStatusChartData = [
  {
    id: "progress1",
    chartData: Progress1ChartData,
    chartOptions: Progress1ChartOptions,
  },
  {
    id: "progress2",
    chartData: Progress2ChartData,
    chartOptions: Progress2ChartOptions,
  },
  {
    id: "progress3",
    chartData: Progress3ChartData,
    chartOptions: Progress3ChartOptions,
  },
  {
    id: "progress4",
    chartData: Progress4ChartData,
    chartOptions: Progress4ChartOptions,
  },
  {
    id: "progress5",
    chartData: Progress5ChartData,
    chartOptions: Progress5ChartOptions,
  },
];

export const ProductChartData = {
  labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09 ", "10", "11", "12"],
  series: [
    {
      name: "TEAM A",
      type: "area",
      data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
    },
    {
      name: "TEAM B",
      type: "line",
      data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
    },
  ],
};

export const ProductChartOptions: ApexOptions = {
  chart: {
    width: 855,
    height: 320,
    type: "line",
  },
  colors: [primary, secondary],
  //colors: ['#06aed5', '#3494ae'],
  stroke: {
    curve: "smooth",
  },

  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Series A",
      },
    },
    {
      opposite: true,
      title: {
        text: "Series B",
      },
    },
  ],
  fill: {
    colors: [primary, secondary],
    //colors: ['#06aed5', '#06aed5'],
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.9,
      opacityTo: 0.8,
      stops: [0, 100],
    },
  },
  tooltip: {
    intersect: false,
    shared: false,
  },
};

const series = {
  monthDataSeries1: {
    prices: [8107.85, 8128.0, 8122.9, 8165.5, 8340.7, 8423.7, 8423.5, 8514.3, 8481.85, 8487.7, 8506.9, 8626.2, 8668.95, 8602.3, 8607.55, 8512.9, 8496.25, 8600.65, 8881.1, 9340.85],
    dates: ["13 Nov 2023", "14 Nov 2023", "15 Nov 2023", "16 Nov 2023", "17 Nov 2023", "20 Nov 2023", "21 Nov 2023", "22 Nov 2023", "23 Nov 2023", "24 Nov 2023", "27 Nov 2023", "28 Nov 2023", "29 Nov 2023", "30 Nov 2023", "01 Dec 2023", "04 Dec 2023", "05 Dec 2023", "06 Dec 2023", "07 Dec 2023", "08 Dec 2023"],
  },
};

export const TurnOverData = {
  series: [
    {
      name: "STOCK ABC",
      data: series.monthDataSeries1.prices,
    },
  ],
};

export const TurnOverOptions: ApexOptions = {
  chart: {
    height: 320,
    type: "area",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "straight",
  },
  fill: {
    colors: [primary],
    type: "gradient",
    gradient: {
      shade: "light",
      type: "vertical",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 0.9,
      opacityTo: 0.8,
      stops: [0, 100],
    },
  },
  title: {
    text: "Fundamental Analysis of Stocks",
    align: "left",
  },
  colors: [primary],
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: "datetime",
  },
  yaxis: {
    opposite: false,
  },
  legend: {
    horizontalAlign: "left",
  },
};

export const MonthlySaleData = {
  series: [
    {
      name: "Series 1",
      data: [80, 50, 30, 40, 100, 20],
    },
    {
      name: "Series 2",
      data: [20, 30, 40, 80, 20, 80],
    },
    {
      name: "Series 3",
      data: [44, 76, 78, 13, 43, 10],
    },
  ],
};

export const MonthlySaleOptions: ApexOptions = {
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "Reflected",
      shadeIntensity: 0.1,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.8,
      stops: [0, 100],
    },
  },
  colors: [primary, secondary, "#544fff"],
  chart: {
    height: 300,
    type: "radar",
    dropShadow: {
      enabled: true,
      blur: 1,
      left: 1,
      top: 1,
    },
  },
  title: {
    text: "Radar Chart - Multi Series",
  },
  stroke: {
    width: 0,
  },
  markers: {
    size: 0,
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
};

function generateData(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
}

export const UsesChartData = {
  series: [
    {
      name: "Bubble1",
      data: generateData(new Date("11 Feb 2023 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Bubble2",
      data: generateData(new Date("11 Feb 2023 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Bubble3",
      data: generateData(new Date("11 Feb 2023 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: "Bubble4",
      data: generateData(new Date("11 Feb 2023 GMT").getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
};

export const UsesChartOptions: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.4,
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 0.7,
      stops: [0, 100],
    },
  },
  colors: [primary, secondary, "#51bb25", "#544fff"],
  title: {
    text: "Simple Bubble Chart",
  },
  xaxis: {
    labels: {
      show: false,
    },
    tickAmount: 12,
    type: "category",
    axisBorder: {
      show: false,
    },
  },
  yaxis: {
    max: 70,
  },
};

export const BrowserUsesChartData = {
  series: [
    {
      data: [
        { x: new Date(1538778600000), y: [6629.81, 6650.5, 6623.04, 6633.33] },
        { x: new Date(1538780400000), y: [6632.01, 6643.59, 6620, 6630.11] },
        { x: new Date(1538782200000), y: [6630.71, 6648.95, 6623.34, 6635.65] },
        { x: new Date(1538784000000), y: [6635.65, 6651, 6629.67, 6638.24] },
        { x: new Date(1538785800000), y: [6638.24, 6640, 6620, 6624.47] },
        { x: new Date(1538787600000), y: [6624.53, 6636.03, 6621.68, 6624.31] },
        { x: new Date(1538789400000), y: [6624.61, 6632.2, 6617, 6626.02] },
        { x: new Date(1538791200000), y: [6627, 6627.62, 6584.22, 6603.02] },
        { x: new Date(1538793000000), y: [6605, 6608.03, 6598.95, 6604.01] },
        { x: new Date(1538794800000), y: [6604.5, 6614.4, 6602.26, 6608.02] },
        { x: new Date(1538796600000), y: [6608.02, 6610.68, 6601.99, 6608.91] },
        { x: new Date(1538798400000), y: [6608.91, 6618.99, 6608.01, 6612] },
        { x: new Date(1538800200000), y: [6612, 6615.13, 6605.09, 6612] },
        { x: new Date(1538802000000), y: [6612, 6624.12, 6608.43, 6622.95] },
        { x: new Date(1538803800000), y: [6623.91, 6623.91, 6615, 6615.67] },
        { x: new Date(1538805600000), y: [6618.69, 6618.74, 6610, 6610.4] },
        { x: new Date(1538807400000), y: [6611, 6622.78, 6610.4, 6614.9] },
        { x: new Date(1538809200000), y: [6614.9, 6626.2, 6613.33, 6623.45] },
        { x: new Date(1538811000000), y: [6623.48, 6627, 6618.38, 6620.35] },
        { x: new Date(1538812800000), y: [6619.43, 6620.35, 6610.05, 6615.53] },
        { x: new Date(1538814600000), y: [6615.53, 6617.93, 6610, 6615.19] },
        { x: new Date(1538816400000), y: [6615.19, 6621.6, 6608.2, 6620] },
        { x: new Date(1538818200000), y: [6619.54, 6625.17, 6614.15, 6620] },
        { x: new Date(1538820000000), y: [6620.33, 6634.15, 6617.24, 6624.61] },
        { x: new Date(1538821800000), y: [6625.95, 6626, 6611.66, 6617.58] },
        { x: new Date(1538823600000), y: [6619, 6625.97, 6595.27, 6598.86] },
        { x: new Date(1538825400000), y: [6598.86, 6598.88, 6570, 6587.16] },
        { x: new Date(1538827200000), y: [6588.86, 6600, 6580, 6593.4] },
        { x: new Date(1538829000000), y: [6593.99, 6598.89, 6585, 6587.81] },
        { x: new Date(1538830800000), y: [6587.81, 6592.73, 6567.14, 6578] },
        { x: new Date(1538832600000), y: [6578.35, 6581.72, 6567.39, 6579] },
        { x: new Date(1538834400000), y: [6579.38, 6580.92, 6566.77, 6575.96] },
        { x: new Date(1538836200000), y: [6575.96, 6589, 6571.77, 6588.92] },
        { x: new Date(1538838000000), y: [6588.92, 6594, 6577.55, 6589.22] },
        { x: new Date(1538839800000), y: [6589.3, 6598.89, 6589.1, 6596.08] },
        { x: new Date(1538841600000), y: [6597.5, 6600, 6588.39, 6596.25] },
        { x: new Date(1538843400000), y: [6598.03, 6600, 6588.73, 6595.97] },
        { x: new Date(1538845200000), y: [6595.97, 6602.01, 6588.17, 6602] },
        { x: new Date(1538847000000), y: [6602, 6607, 6596.51, 6599.95] },
        { x: new Date(1538848800000), y: [6600.63, 6601.21, 6590.39, 6591.02] },
        { x: new Date(1538850600000), y: [6591.02, 6603.08, 6591, 6591] },
        { x: new Date(1538852400000), y: [6591, 6601.32, 6585, 6592] },
        { x: new Date(1538854200000), y: [6593.13, 6596.01, 6590, 6593.34] },
        { x: new Date(1538856000000), y: [6593.34, 6604.76, 6582.63, 6593.86] },
        { x: new Date(1538857800000), y: [6593.86, 6604.28, 6586.57, 6600.01] },
        { x: new Date(1538859600000), y: [6601.81, 6603.21, 6592.78, 6596.25] },
        { x: new Date(1538861400000), y: [6596.25, 6604.2, 6590, 6602.99] },
        { x: new Date(1538863200000), y: [6602.99, 6606, 6584.99, 6587.81] },
        { x: new Date(1538865000000), y: [6587.81, 6595, 6583.27, 6591.96] },
        { x: new Date(1538866800000), y: [6591.97, 6596.07, 6585, 6588.39] },
        { x: new Date(1538868600000), y: [6587.6, 6598.21, 6587.6, 6594.27] },
        { x: new Date(1538870400000), y: [6596.44, 6601, 6590, 6596.55] },
        { x: new Date(1538872200000), y: [6598.91, 6605, 6596.61, 6600.02] },
        { x: new Date(1538874000000), y: [6600.55, 6605, 6589.14, 6593.01] },
        { x: new Date(1538875800000), y: [6593.15, 6605, 6592, 6603.06] },
        { x: new Date(1538877600000), y: [6603.07, 6604.5, 6599.09, 6603.89] },
        { x: new Date(1538879400000), y: [6604.44, 6604.44, 6600, 6603.5] },
        { x: new Date(1538881200000), y: [6603.5, 6603.99, 6597.5, 6603.86] },
        { x: new Date(1538883000000), y: [6603.85, 6605, 6600, 6604.07] },
        { x: new Date(1538884800000), y: [6604.98, 6606, 6604.07, 6606] },
      ],
    },
  ],
};

export const BrowserUsesChartOptions: ApexOptions = {
  chart: {
    width: 1530,
    height: 500,
    type: "candlestick",
    toolbar: { show: false },
  },
  plotOptions: { candlestick: { colors: { upward: primary, downward: secondary } } },
  colors: ["#fb740d"],
  title: { text: "CandleStick Chart", align: "left" },
  xaxis: { type: "datetime" },
  yaxis: { tooltip: { enabled: true } },
};


function getRangeRandom(yrange) {
  return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
}
var trioStrength = 3;
function generateMinuteWiseTimeSeries(baseval, count, yrange) {
  var i = 0;
  var series = [];
  while (i < count) {
      var x = baseval;
      var y = ((Math.sin(i / trioStrength) * (i / trioStrength) + i / trioStrength + 1) * (trioStrength * 2));

      series.push([x, y]);
      baseval += 300000;
      i++;
  }
  return series;
}

export const FinanceChartData = {
 
  series: [{
      name: 'Load Average',
      data: generateMinuteWiseTimeSeries(new Date('12/12/2016 00:20:00').getTime(), 12, {
          min: 10,
          max: 110
      })
  }],
};

export const FinanceChartOptions:ApexOptions = {
    chart: {
        height: 350,
        type: 'bar',
        animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
                speed: 1000
            }
        },
        events: {
            animationEnd: function (chartCtx) {
                const newData = chartCtx.w.config.series[0].data.slice();
                newData.shift();
                window.setTimeout(function () {
                    chartCtx.updateOptions({
                        series: [{
                            data: newData
                        }],
                        xaxis: {
                            min: chartCtx.minX,
                            max: chartCtx.maxX
                        },
                        subtitle: {
                            text: parseInt(getRangeRandom({ min: 1, max: 20 })).toString() + '%',
                        }
                    }, false, false);
                }, 300);
            }
        },
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },
    legend: {
        show: true
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        bar: {
           
            horizontal: false,
            columnWidth: '80%',
         
        }
    },
    stroke: {
        width: 0,
    },
    xaxis: {
        type: 'datetime',
        range: 2700000,
    },
    yaxis:{
        decimalsInFloat: 1
    },
    title: {
        text: 'Load Average',
        align: 'left',
        style: {
            fontSize: '12px'
        }
    },
    subtitle: {
        text: '20%',
        floating: true,
        align: 'right',
        offsetY: 0,
        style: {
            fontSize: '22px'
        }
    },
    fill: {
        colors: [primary],
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.4,
            inverseColors: false,
            opacityFrom: 1,
            opacityTo: 0.9,
            stops: [0, 100]
        }
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return '$ ' + val + ' thousands';
            }
        }
    },
    grid: {
        show: true,
        padding: {
            left: 4,
            right: 0
        }
    }
}

var iteration = 11;
function getRandom() {
    var i = iteration;
    return (Math.sin(i / trioStrength) * (i / trioStrength) + i / trioStrength + 1) * (trioStrength * 2);
}
export const OrderStatus2Options:ApexOptions = {
   
        chart: {
            height: 350,
            type: 'line',
            stacked: true,
            animations: {
                enabled: true,
                easing: 'linear',
                dynamicAnimation: {
                    speed: 1000
                }
            },
            events: {
                animationEnd: function (chartCtx) {
                    const newData1 = chartCtx.w.config.series[0].data.slice();
                    newData1.shift();
                    const newData2 = chartCtx.w.config.series[1].data.slice();
                    newData2.shift();
                    window.setTimeout(function () {
                        chartCtx.updateOptions({
                            series: [{
                                data: newData1
                            }, {
                                data: newData2
                            }],
                            subtitle: {
                                text: parseInt(getRandom() * Math.random()).toString(),
                            }
                        }, false, false);
                    }, 300);
                }
            },
            toolbar: {
                show: false
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'straight',
            width: 5,
        },
        grid: {
            padding: {
                left: 6,
                right: 0
            }
        },
        fill: {
            opacity: 0.9
        },
        colors: [primary, secondary],
        markers: {
            size: 0,
            hover: {
                size: 0
            }
        },
        xaxis: {
            type: 'datetime',
            range: 2700000,
        },
        yaxis:{
            decimalsInFloat: 1
        },
        title: {
            text: 'Processes',
            align: 'left',
            style: {
                fontSize: '12px'
            }
        },
        subtitle: {
            text: '20',
            floating: true,
            align: 'right',
            offsetY: 0,
            style: {
                fontSize: '22px'
            }
        },
        legend: {
            show: true,
            floating: true,
            horizontalAlign: 'left',
            onItemClick: {
                toggleDataSeries: false
            },
            position: 'top',
            offsetY: -30,
            offsetX: 60
        },
    }

export const OrderStatus2Data = {
    series: [{
        name: 'Running',
        data: generateMinuteWiseTimeSeries(new Date('12/12/2016 00:20:00').getTime(), 12, {
            min: 30,
            max: 110
        })
    }, {
        name: 'Waiting',
        data: generateMinuteWiseTimeSeries(new Date('12/12/2016 00:20:00').getTime(), 12, {
            min: 30,
            max: 110
        })
    }],
};
