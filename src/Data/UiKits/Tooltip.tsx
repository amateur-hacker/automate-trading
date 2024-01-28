export const ToolTipDirectionsData = [
  {
    id: 2,
    placement: "right",
    tooltip: "Tooltip on right",
    buttonText: "Click me",
  },
  {
    id: 3,
    placement: "bottom",
    tooltip: "Tooltip on bottom",
    buttonText: "Click me",
  },
  {
    id: 4,
    placement: "left",
    tooltip: "Tooltip on left",
    buttonText: "Click me",
  },
];

export const OffsetToTooltipData = [
  {
    id: 10,
    placement: "top",
    tooltip: "Tooltip title",
    buttonText: "0px -20px",
    offset: [0, 20],
  },
  {
    id: 11,
    placement: "top",
    tooltip: "Tooltip title",
    buttonText: "20px 0px",
    offset: [20, 0],
  },
  {
    id: 12,
    placement: "top",
    tooltip: "Tooltip title",
    buttonText: "-30px -30px",
    offset: [-30, 0],
  },
];

export const ToolTipHtmlData = [
  {
    id: 2,
    placement: "right",
    tooltip: (
      <>
        {"Tooltip"} <b>with</b> <code>HTML</code>
      </>
    ),
    buttonText: "Click me",
  },
  {
    id: 3,
    placement: "bottom",
    tooltip: (
      <>
        {"Tooltip"} <b>with</b> <code>HTML</code>
      </>
    ),
    buttonText: "Click me",
  },
  {
    id: 4,
    placement: "left",
    tooltip: (
      <>
        {"Tooltip"} <b>with</b> <code>HTML</code>
      </>
    ),
    buttonText: "Click me",
  },
];
