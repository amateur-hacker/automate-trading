import { Accountings, Chicago, Commission, ComputerSoftware, Contract, DesignerCRM, Filters, FinancialServices, FindJobs, FrontEndWebDeveloper, Fulltime, GraphicDesigner, ITEngineer, Internship, NewYork, Parttime, ReactandReact_Native_Developer, SanFrancisco, Seattle, Serviceindustry, Temporary, UIandUX_IT_Frontend_Developer, Washington } from "@/Constant";

export const CommonAccordionData = [
  {
    heading: "Filter",
    data: [
      {
        id: "chk-ani",
        title: Fulltime,
      },
      {
        id: "chk-ani1",
        title: Contract,
      },
      {
        id: "chk-ani2",
        title: Parttime,
      },
      {
        id: "chk-ani3",
        title: Internship,
      },
      {
        id: "chk-ani4",
        title: Temporary,
      },
      {
        id: "chk-ani5",
        title: Commission,
      },
    ],
    buttonName: "Find Jobs",
  },
  {
    heading: "Location",
    data: [
      {
        id: "chk-ani6",
        title: NewYork,
        subTitle: "NY (399)",
      },
      {
        id: "chk-ani7",
        title: SanFrancisco,
        subTitle: "CA (252)",
      },
      {
        id: "chk-ani8",
        title: Washington,
        subTitle: "DC (226)",
      },
      {
        id: "chk-ani9",
        title: Seattle,
        subTitle: "WA (242)",
      },
      {
        id: "chk-ani10",
        title: Chicago,
        subTitle: "IL (187)",
      },
    ],
    buttonName: "All Locations",
  },
  {
    heading: "Job Title",
    data: [
      {
        id: "chk-ani11",
        title: UIandUX_IT_Frontend_Developer,
      },
      {
        id: "chk-ani12",
        title: GraphicDesigner,
      },
      {
        id: "chk-ani13",
        title: FrontEndWebDeveloper,
      },
      {
        id: "chk-ani14",
        title: DesignerCRM,
      },
      {
        id: "chk-ani15",
        title: ReactandReact_Native_Developer,
      },
    ],
    buttonName: "All Job Title",
  },
  {
    heading: "Industry",
    data: [
      {
        id: "chk-ani16",
        title: ComputerSoftware,
      },
      {
        id: "chk-ani17",
        title: ITEngineer,
      },
      {
        id: "chk-ani18",
        title: Serviceindustry,
      },
      {
        id: "chk-ani19",
        title: Accountings,
      },
      {
        id: "chk-ani20",
        title: FinancialServices,
      },
    ],
    buttonName: "All Industries",
  },
  {
    heading: "Specific Skills",
    data: [
      {
        id: "chk-ani21",
        title: " HTML,scss & sass",
      },
      {
        id: "chk-ani22",
        title: " Javascript",
      },
      {
        id: "chk-ani23",
        title: "Node.js",
      },
      {
        id: "chk-ani24",
        title: "Gulp & Pug",
      },
      {
        id: "chk-ani25",
        title: "Angular.js",
      },
    ],
    buttonName: "All Skills",
  },
];

export const RatingsData = (
  <ul className="rating simple-list">
    <i className="fa fa-star font-warning"></i>

    <i className="fa fa-star font-warning"></i>

    <i className="fa fa-star font-warning"></i>

    <i className="fa fa-star font-warning"></i>

    <i className="fa fa-star font-warning"></i>
  </ul>
);

export const RatingsData2 = (
  <span>
    <i className="fa fa-star font-warning"></i>
    <i className="fa fa-star font-warning"></i>
    <i className="fa fa-star font-warning"></i>
    <i className="fa fa-star font-warning"></i>
    <i className="fa fa-star font-warning-o"></i>
  </span>
);

export const JobDetailsMainContent = [
  {
    heading: "Qualifications",
    data: [
      {
        paragraph: "Have shipped multiple iOS, Android, and / or web products  ",
        id: 1,
      },
      { paragraph: "5+ years UI/UX experience ", id: 2 },
      {
        paragraph: "Portfolio demonstrating mastery of native iOS, Android, and/or responsive web design principles ",
        id: 3,
      },
      {
        paragraph: "Ability to autonomously pursue elegant solutions to open-ended problems ",
        id: 4,
      },
      { paragraph: "Comfort with ambiguity ", id: 5 },
      { paragraph: "ively work on more than one project at a time ", id: 6 },
      {
        paragraph: "Experience conducting user research and stakeholder interviews ",
        id: 7,
      },
      {
        paragraph: "Solid grasp of standard design tools, ex: Sketch, Omnigraffle, the Adobe Suite, Zeplin, etc. ",
        id: 8,
      },
      { paragraph: "Bonus Considerations  ", id: 9 },
    ],
  },
  {
    heading: "Agency experience",
    data: [
      {
        paragraph: "Experience working with Agile development teams",
        id: 1,
      },
      { paragraph: "Experience with RITE method usability testing", id: 2 },
      {
        paragraph: "Experience in visual and motion design; ability to translate UX design into high quality visuals",
        id: 3,
      },
      {
        paragraph: "Mastery of Sketch & InVision",
        id: 4,
      },
      { paragraph: "Knowledge of mobile or front-end web programming", id: 5 },
    ],
  },
  {
    heading: "Perks",
    data: [
      {
        paragraph: "Competitive pay",
        id: 1,
      },
      { paragraph: "Competitive medical, dental, and vision insurance plans", id: 2 },
      {
        paragraph: "proviCompanyded 401(k) plan",
        id: 3,
      },
      {
        paragraph: "Paid vacation and sick time",
        id: 4,
      },
      { paragraph: "Free snacks and beverages", id: 5 },
    ],
  },
];

export const JobDescriptionParagraph =
  "Endless is looking for a UI/UX Designer to join our team. The world is seeing an explosion in the amount and variety of location-baWe are looking for a versatile UX/UI Designer to join our growing design team. Our designers contribute to clients’ projects at all stages of development. We might start from scratch, conducting user and stakeholder interviews, making personas and journey maps, and continue on to iterating on designs and prototypes through delivering final assets for launch. We might come into the middle of an in-flight program-size project and conduct analysis and usability correction or feature enhancement. We might provide research and vision for handoff to an internal development team.";

export const Months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const Days = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
export const Years = ["1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"];
