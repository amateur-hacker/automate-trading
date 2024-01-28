import { ApexOptions } from "apexcharts";
const primary = "#6362e7";
const secondary = "#ffc500";
export const SaleChart = {
  series: [
    {
      name: "Desktops",
      data: [18, 30, 25, 51, 34, 40, 34],
    },
  ],
};

export const SalesChartOptions: ApexOptions = {
  chart: {
    height: 142,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      // bottom: 2,
      left: 10,
      blur: 6,
      color: "#000",
      opacity: 0.35,
    },
  },
  colors: ["#fff"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      left: -10,
      right: 0,
      bottom: -30,
      top: -30,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

export const InvoiceChart = {
  series: [
    {
      name: "Revenue",
      data: [19, 28, 31, 25, 35, 18, 23],
    },
    {
      name: "Free Cash Flow",
      data: [25, 31, 35, 29, 39, 22, 28],
    },
  ],
};

export const InvoiceChartOptions: ApexOptions = {
  chart: {
    type: "bar",
    height: 263,
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "20%",
      // endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  colors: [primary, secondary],
  stroke: {
    show: true,
    width: 1,
    colors: ["transparent"],
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  xaxis: {
    categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    labels: {
      offsetX: 0,
      offsetY: -6,
      style: {
        colors: "#8E97B2",
        fontWeight: 400,
        fontSize: "10px",
        fontFamily: "roboto",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      offsetX: 14,
      offsetY: -5,
    },
    tooltip: {
      enabled: true,
    },
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

export const HotSellingData = [
  {
    id: 1,
    image: 26,
    title: "Dominoes Coffee Table Game",
    sales: "60k Sales",
    prize: "$50",
  },
  {
    id: 2,
    image: 27,
    title: "Photive Wireless speakers",
    sales: "35k Sales",
    prize: "$25",
  },
  {
    id: 3,
    image: 28,
    title: "Urbanears Lotsen Speaker",
    sales: "53k Sales",
    prize: "$30",
  },
  {
    id: 4,
    image: 29,
    title: "Plattan 2 Headphones",
    sales: "35k Sales",
    prize: "$45",
  },
];

export const DashboardDropdown1 = ["Done", "Pending", "Rejected", "In Progress"];
export const DashboardDropdown3 = ["Today", "Yesterday", "Tomorrow"];
export const DashboardDropdown2 = ["Latest", "Earliest"];

export const RecentOrderTableHead = ["Product Name", "Customer", "Price", "Quantity", "Status"];

export const RecentOrdersTableData = [
  {
    id: 1,
    image: "running-shoe",
    name: "Nike Sports NK",
    team: "UK Design Team",
    date: "12 May 2023",
    time: "In 6 Days",
    title: "Free delivery",
    price: "$7,800",
    class: "badge badge-light-primary",
    status: "Done",
    quantity: "78",
  },
  {
    id: 2,
    image: "hand-bag",
    name: "Women Bag",
    team: " UX Ninjas",
    date: "06 May 2023",
    time: "Overdue",
    title: "₹83.65 delivery",
    price: "$670",
    class: "badge badge-light-secondary",
    status: "Pending",
    quantity: "25",
  },
  {
    id: 3,
    image: "sun-glasses",
    name: "Sunglasses",
    team: " SF Dev Team",
    date: "28 Sep 2023",
    time: "in 4 Months",
    title: "Free delivery",
    price: "$7,889",
    class: "badge badge-light-danger",
    status: "Rejected",
    quantity: "36",
  },
  {
    id: 4,
    image: "shirt",
    name: "Cotton T-shirt",
    team: " UK Design Team",
    date: "12 May 2023",
    time: "In 6 Days",
    title: "₹83.65 delivery",
    price: "Toyota",
    class: "badge badge-light-info",
    status: "In Progress",
    quantity: "85",
  },
];

export const OurActivityData = [
  {
    id: 1,
    divClass: "round-light icon-secondary",
    Icons: "fa fa-trophy font-primary",
    title: "Win best seller of the year award",
    place: "Company,San Francisco",
    time: "1 day ago",
  },
  {
    id: 2,
    divClass: "round-light icon-primary",
    Icons: "fa fa-check-circle font-secondary",
    title: "Approved our product in checking",
    place: "Elisse Joson,San Francisco",
    time: "2 weeks ago",
  },
  {
    id: 3,
    divClass: "round-light icon-success",
    Icons: "fa fa-bookmark font-success",
    title: "Win best seller of the year award",
    place: "Company,San Francisco",
    time: "3 day ago",
  },
  {
    id: 4,
    divClass: "round-light icon-warning",
    Icons: "fa fa-shopping-basket font-warning",
    title: "Approved our product in checking",
    place: "35k Sales",
    time: "2 hour ago",
  },
];

export const RevenueByCategoryChart = {
  series: [44, 55, 41, 17, 15],
};

export const RevenueByCategoryChartOptions: ApexOptions = {
  labels: ["Men", "Women", "Accessories", "Children", "Apperal"],
  chart: {
    type: "donut",
    height: 320,
  },
  legend: {
    position: "bottom",
  },
  dataLabels: {
    enabled: false,
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  stroke: {
    width: 0,
  },
  responsive: [
    {
      breakpoint: 1661,
      options: {
        chart: {
          height: 310,
        },
      },
    },
    {
      breakpoint: 481,
      options: {
        chart: {
          height: 280,
        },
      },
    },
  ],
  colors: [primary, secondary, "#a2d24c", "#5eb5ff", "#fd7e14"],
};

export const TotalSalesCharts = {
  series: [
    {
      name: "Desktops",
      data: [25, 12, 9, 16, 10, 21, 55, 104, 64, 70, 25],
    },
  ],
};

export const TotalSalesChartOptions: ApexOptions = {
  chart: {
    height: 95,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 6,
      blur: 4,
      color: "#6362e7",
      opacity: 0.2,
    },
  },
  colors: [primary],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
    lineCap: "butt",
  },

  tooltip: {
    enabled: false,
  },

  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      left: -10,
      right: 0,
      bottom: 0,
      top: -30,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  responsive: [
    {
      breakpoint: 421,
      options: {
        chart: {
          height: 60,
        },
      },
    },
  ],
};


export const SmallChartOptions: ApexOptions = {
  chart: {
    height: 182,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#4181f8"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      left: -10,
      right: 0,
      bottom: -30,
      top: -30,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

export const SmallChartData = {
 series: [
  {
    name: "Desktops",
    data: [25, 33, 28, 40, 27, 30, 45],
  },
],
};


export const SmallChart2Options: ApexOptions = {
  chart: {
    height: 182,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#ebe836"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      left: -10,
      right: 0,
      bottom: -30,
      top: -30,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

export const SmallChart3Options: ApexOptions = {
  chart: {
    height: 182,
    type: "line",
    zoom: {
      enabled: false,
    },
    toolbar: {
      show: false,
    },
  },
  colors: ["#7a9ee2"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  tooltip: {
    enabled: false,
  },
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      left: -10,
      right: 0,
      bottom: -30,
      top: -30,
    },
  },
  xaxis: {
    labels: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
};

export const SmallChartsData = [
  {
    chartOptions:SmallChartOptions,
    className:'sales-small-1',
    heading:'300',
    subHeading: 'Watch Sale'
  },
  {
    chartOptions:SmallChart2Options,
    className:'sales-small-2',
    heading:'1120',
    subHeading: 'Phone Sale'
  },
  {
    chartOptions:SmallChart3Options,
    className:'sales-small-3',
    heading:'530',
    subHeading: 'Tablet Sale'
  }
]