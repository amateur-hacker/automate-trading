//@ts-nocheck
import { ApexOptions } from "apexcharts";
const primary = "#6362e7";
const secondary = "#ffc500";


export const TotalEarningOptions: ApexOptions = {
  chart: {
    height: 145,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: [primary],
  stroke: {
    curve: "smooth",
    colors: [primary],
    lineCap: "round",
    width: 3,
  },
  annotations: {
    points: [
      {
        x: new Date("31 January 2012").getTime(),
        y: 20,
        marker: {
          size: 6,
          fillColor: "#fff",
          strokeColor: primary,
          radius: 3,
          strokeWidth: 3,
        },
      },
    ],
  },
  fill: {
    type: "gradient",
    opacity: 0.1,
    gradient: {
      type: "vertical",
      opacityFrom: 0.65,
      opacityTo: 0.3,
      stops: [0, 100],
    },
  },
  yaxis: {
    labels: {
      show: false,
    },
  },
  xaxis: {
    type: "datetime",
    show: false,
    labels: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    axisBorder: {
      show: false,
    },
    crosshairs: {
      show: false,
    },
  },
  legend: {
    show: false,
  },
  tooltip: {
    style: {
      fontSize: "12px",
    },
    x: {
      show: false,
    },
    y: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    show: false,
    padding: {
      left: -10,
      right: 0,
      bottom: 0,
      top: -35,
    },
  },
  responsive: [
    {
      breakpoint: 1600,
      options: {
        chart: {
          height: 105,
        },
      },
    },
  ],
};

export const TotalEarning = {
  series: [
    {
      name: "Series 1",
      data: [
        [1327359600000, 6],
        [1327446000000, 20],
        [1327532400000, 15],
        [1327618800000, 40],
        [1327878000000, 18],
        [1327964400000, 20],
        [1328050800000, 18],
        [1328137200000, 23],
        [1328223600000, 18],
        [1328482800000, 35],
        [1328569200000, 30],
        [1328655600000, 55],
        [1328742000000, 0],
      ],
    },
  ],
};

export const WeeklyEvent = {
  series: [
    {
      name: "Statistics",
      data: [500, 600, 200, 700, 750, 500],
    },
    {
      name: "Statistics",
      data: [800, 800, 800, 800, 800, 800],
    },
  ],
};

export const WeeklyEventOptions: ApexOptions = {
  chart: {
    type: "bar",
    height: 230,
    stacked: true,
    stackType: "100%",
    toolbar: {
      show: false,
    },
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "20px",
      borderRadius: 5,
    },
  },
  grid: {
    show: false,
    xaxis: {
      lines: {
        show: false,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  legend: {
    show: false,
  },
  colors: [primary, "#f4f6fd"],
  yaxis: {
    tickAmount: 3,
    min: 0,
    max: 800,

    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  xaxis: {
    categories: ["M", "T", "W", "T", "F", "S"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  states: {
    hover: {
      filter: {
        type: "darken",
        value: 1,
      },
    },
  },
  responsive: [
    {
      breakpoint: 1661,
      options: {
        chart: {
          height: 420,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 435,
        },
      },
    },
    {
      breakpoint: 1101,
      options: {
        chart: {
          height: 250,
        },
      },
    },
    {
      breakpoint: 1007,
      options: {
        chart: {
          height: 435,
        },
      },
    },
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 385,
        },
      },
    },
    {
      breakpoint: 768,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 576,
      options: {
        chart: {
          height: 250,
        },
      },
    },
  ],
};

export const NewsUpdate = [
  {
    id: 1,
    image: 26,
    title: "Google Project Apply Review",
    description: "Todays News Headlines, Breaking...",
    time: "1 day ago",
  },
  {
    id: 2,
    image: 27,
    title: "Business Logo Create",
    description: "Check out the latest news from...",
    time: "2 weeks ago",
  },
  {
    id: 3,
    image: 28,
    title: "Business Project Research",
    description: "News in English: Get all Breaking...",
    time: "3 day ago",
  },
  {
    id: 4,
    image: 29,
    title: "Recruitment in it Department",
    description: "Technology and Indian Business News...",
    time: "2 hours ago",
  },
  {
    id: 5,
    image: 27,
    title: "Business Project Research",
    description: "News in English: Get all Breaking...",
    time: "3 day ago",
  },
];

export const OnGoingData = [
  {
    id: 1,
    image: "boy",
    name: "Gary",
    team: "UK Design Team",
    date: "12 May 2023",
    time: "In 6 Days",
    title: "Product Design",
    prize: "$7,800",
    class: "badge badge-light-primary",
    status: "Done",
    quantity: "78",
  },
  {
    id: 2,
    image: "girl",
    name: "Ralph Waters",
    team: " UX Ninjas",
    date: "06 May 2023",
    time: "Overdue",
    title: "Concept Design",
    prize: "$670",
    class: "badge badge-light-secondary",
    status: "Pending",
    quantity: "25",
  },
  {
    id: 3,
    image: "man",
    name: "Edwin Day",
    team: " SF Dev Team",
    date: "28 Sep 2023",
    time: "in 4 Months",
    title: "UX Consulting",
    prize: "$7,889",
    class: "badge badge-light-danger",
    status: "Rejected",
    quantity: "36",
  },
  {
    id: 4,
    image: "woman",
    name: "Gary",
    team: " UK Design Team",
    date: "12 May 2023",
    time: "In 6 Days",
    title: "Product Design",
    prize: "Toyota",
    class: "badge badge-light-info",
    status: "In Progress",
    quantity: "85",
  },
];

export const OngoingTableData = ["Name", "Date", "Project", "Status"];

// export const TotalTransactionsChart = {
//   series: [
//     {
//       name: "Males",
//       data: [0, 20, 40, 60, 90, 70, 45, 30],
//     },
//     {
//       name: "Females",
//       data: [0, -20, -40, -60, -90, -70, -45, -30],
//     },
//   ],
// };

export const TotalTransactionsOptions: ApexOptions = {
  series: [{
      name: 'Males',
      data: [0, 20, 40, 60, 90, 70, 45, 30
      ]
  },
  {
      name: 'Females',
      data: [0,-20, -40, -60, -90, -70, -45, -30
      ]
  }
  ],
  chart: {
      toolbar:{
          show: false
      },
      type: 'bar',
      height: 155,
      stacked: true,
  },
  colors: [primary, secondary],
  plotOptions: {
      bar: {
          barHeight: '10px',
          horizontal: true,
          startingShape: 'rounded',
          endingShape: 'rounded',
      },
  },
  dataLabels: {
      enabled: false
  },
  stroke: {
      width: 1,
      borderRadius: 40,
      colors: ["transparent"]
  },

  grid: {
      borderColor: '#1e2f6533',
      xaxis: {
          lines: {
              show: true,
              Color: '#1e2f6533',
          }
      },
      yaxis: {
          lines: {
              show: false
          }
      },
      padding: {
          top:  -20,
          right: 0,
          bottom: -10,
          left: 0
      }, 
    
  },   
  yaxis: {
      show: false,
  },
  legend: {
      show: false,
  },
  tooltip: {           
      x: {
          formatter: function (val) {
              return val
          }
      },
      y: {
          formatter: function (val) {
              return Math.abs(val) + "%"
          }
      }
  },
  states:{          
    hover:{
      filter:{
        type: 'darken',
        value: 1,
      }
    }           
  },
  xaxis: {
      position: 'top',
      categories: ['85+', '80-84', '75-79', '70-74', '65-69', '60-64', '55-59'
      ],
      labels: {
          formatter: function (val) {
              return Math.abs(Math.round(val)) 
          },
          offsetX: 0,
          offsetY: 5,
          rotate: 0,
          style: {
              colors: ['#1e2f6533'],
              fontSize: '12px',
              fontWeight: 400,
          },
      },
      axisTicks: {
          show: false
      },
      axisBorder: {
          show: false
      },
  },
  responsive: [
          {
            breakpoint: 1661,
            options: {
              chart: {
                  height:200,
              }
            }
          }
      ]
      
  };

export const YearlyChart = {
  series: [
    {
      name: "Series 1",
      data: [
        [1486771200000, 1],
        [1486857600000, 12],
        [1486944000000, 8],
        [1487030400000, 20],
      ],
    },
  ],
};

export const YearlyChartOptions: ApexOptions = {
  annotations: {
    points: [
      {
        x: new Date("14 Feb 2023").getTime(),
        y: 18,
        marker: {
          size: 8,
          fillColor: "#fff",
          strokeColor: primary,
          radius: 2,
        },
      },
    ],
  },

  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      enabledOnSeries: undefined,
      top: 0,
      left: 4,
      blur: 4,
      color: primary,
      opacity: 0.14,
    },
    height: 160,
    type: "line",
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 3,
    dashArray: 8,
    show: true,
    curve: "smooth",
    lineCap: "round",
  },
  yaxis: {
    show: false,
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },

  colors: [primary],
  grid: {
    yaxis: {
      lines: {
        show: false,
      },
    },

    padding: {
      left: -20,
      right: 0,
      top: -30,
      bottom: 0,
    },
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    tooltip: {
      enabled: false,
    },
    labels: {
      offsetX: -30,
      offsetY: 0,
    },
  },
  tooltip: {
    custom: function ({ series, seriesIndex, dataPointIndex, w }) {
      return '<div class="arrow_box">' + "<span>" + series[seriesIndex][dataPointIndex] + "</span>" + "</div>";
    },
  },
  responsive: [
    {
      breakpoint: 992,
      options: {
        chart: {
          height: 120,
        },
      },
    },
  ],
};
