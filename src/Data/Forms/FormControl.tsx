export const BrowserDefaultsFormSubHeading = [
  {
    text: "Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.</span><span>While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.",
  },
];

export const CustomToolTipFormSubHeading = [
  {
    text: "If your form layout allows it, you can swap the",
    code: ".feedback",
  },
  {
    text: "classes for",
    code: ".tooltip",
  },
  {
    text: "classes to display validation feedback in a styled tooltip. Be sure to have a parent with",
    code: "position: relative",
  },
  {
    text: "on it for tooltip positioning. In the example below, our column classes have this already, but your project may require an alternative setup.",
  },
];

export const DefaultMegaOptionsSubHeading = [{ text: "This option is show buydefault you don't need to add any extra class" }];

export const NoBorderMegaOptionsSubHeading = [
  {
    text: "By adding ",
    code: ".plain-style ",
  },
  {
    text: "class to ",
    code: ".mega-inline ",
  },
  {
    text: "You can archive this style",
  },
];

export const SolidBorderMegaOptionsSubHeading = [
  {
    text: "By adding",
    code: ".border-style",
  },
  {
    text: "class to",
    code: ".mega-inline ",
  },
  {
    text: "You can archive this style",
  },
];

export const OfferBorderMegaOptionsSubHeading = [
  {
    text: "By adding",
    code: ".offer-style",
  },
  {
    text: "class to",
    code: ".mega-inline ",
  },
  {
    text: "You can archive this style",
  },
];

export const InlineStyleMegaOptionsData = [
  {
    radioClass: "radio-primary",
    id: "radio19",
    title: "COD",
    badge: "50 INR",
    badgeColor: "primary",
    subTitle: "Estimated 1 Day Shipping ( Duties end tax may be due delivery )",
  },
  {
    radioClass: "radio-secondary",
    id: "radio20",
    title: "Fast",
    badge: "50 INR",
    badgeColor: "secondary",
    subTitle: "Estimated 1 Day Shipping ( Duties end tax may be due delivery )",
  },
  {
    radioClass: "radio-secondary",
    id: "radio21",
    title: "Standard",
    badge: "80 INR",
    badgeColor: "secondary",
    subTitle: "Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )",
  },
  {
    radioClass: "radio-primary",
    id: "radio22",
    title: "Local",
    badge: "FREE",
    badgeColor: "primary",
    subTitle: " Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )",
  },
];

export const InlineStyleMegaOptionsSubHeading = [
  {
    text: "For Create inline mega option add ",
    code: ".mega-inline ",
  },
  {
    text: "class in form tag",
  },
];

export const VerticalStyleMegaOptionsSubHeading = [
  {
    text: "For Create inline megaoption add ",
    code: ".mega-vertical",
  },
  {
    text: "class in form tag",
  },
];

export const FiveStarRating = (
  <p className="rating-star-wrapper">
    <i className="icofont icofont-star txt-warning"></i>
    <i className="icofont icofont-star txt-warning"></i>
    <i className="icofont icofont-star txt-warning"></i>
    <i className="icofont icofont-star txt-warning"></i>
    <i className="icofont icofont-star txt-warning m-r-5"></i>
    {"5 start rating"}
  </p>
);

export const OneStarRating = (
  <p className="rating-star-wrapper">
    <i className="icofont icofont-star txt-warning"></i>
    <i className="icofont icofont-star"></i>
    <i className="icofont icofont-star"></i>
    <i className="icofont icofont-star"></i>
    <i className="icofont icofont-star m-r-5"></i>
    {"1 start rating"}
  </p>
);

export const HorizontalStyleMegaOptionsSubHeading = [
  {
    text: "For Create inline megaoption add ",
    code: ".mega-horizontal",
  },
  {
    text: " class in form tag",
  },
];
