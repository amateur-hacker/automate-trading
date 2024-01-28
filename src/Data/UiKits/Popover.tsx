export const BasicPopoverData = [
  {
    id: 2,
    popoverHeader: "Popover title",
    popoverBody: "And heres some amazing content. Its very engaging. Right?",
    buttonColor: "primary",
    buttonText: "Dismissible popover",
  },
  {
    id: 3,
    placement: "bottom",
    popoverHeader: "Popover title",
    popoverBody: "And heres some amazing content. Its very engaging. Right?",
    buttonColor: "primary",
    buttonText: "On Hover Tooltip",
    trigger: "hover",
  },
];

export const DirectionData = [
  {
    id: 5,
    popoverHeader: "Popover title",
    placement: "right",
    popoverBody: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
    buttonColor: "primary",
    buttonText: "Popover on right",
  },
  {
    id: 6,
    popoverHeader: "Popover title",
    placement: "bottom",
    popoverBody: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
    buttonColor: "primary",
    buttonText: "Popover on bottom",
  },
  {
    id: 7,
    popoverHeader: "Popover title",
    placement: "left",
    popoverBody: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
    buttonColor: "primary",
    buttonText: "Popover on left",
  },
];

export const OffsetPopoverData = [
  {
    id: 13,
    placement: "top",
    popoverHeader: "Popover title",
    popoverBody: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
    buttonColor: "primary",
    buttonText: "0px",
    offset: "0px",
  },
  {
    id: 14,
    placement: "top",
    popoverHeader: "Popover title",
    popoverBody: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
    buttonColor: "primary",
    buttonText: "20px 20px On Hover",
    offset: "20px,20px",
    trigger: "hover",
  },
  {
    id: 15,
    placement: "top",
    popoverHeader: "Popover title",
    popoverBody: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus.",
    buttonColor: "primary",
    buttonText: "0px On Hover",
    offset: "0px",
    trigger: "hover",
  },
];

const popoverBody = (
  <>
    {"Just add"} <code>{"data-html='true'"}</code>
    {"attribute and you can purse"}
    <span style={{ marginLeft: "3px", marginRight: "3px" }}>
      <b>{"html"}</b>
    </span>
    {"code"}
  </>
);

export const HtmlContentsData = [
  {
    id: 9,
    placement: "right",
    popoverBody: popoverBody,
    buttonColor: "primary",
    buttonText: "Popover on right",
  },
  {
    id: 10,
    placement: "bottom",
    popoverBody: popoverBody,
    buttonColor: "primary",
    buttonText: "Popover on bottom",
  },
  {
    id: 11,
    placement: "left",
    popoverBody: popoverBody,
    buttonColor: "primary",
    buttonText: "Popover on left",
  },
];
export const PopoverSubHeading = [
  {
    text: "lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
];
