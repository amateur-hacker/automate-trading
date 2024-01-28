interface AccordionData {
  id?: string;
  title: string;
  subTitle?: string;
}

export interface CommonAccordionProps {
  accordionItems: {
    heading: string;
    buttonName: string;
    data: AccordionData[];
  };
  index: number;
}

export interface JobMainCardsType{
    id:number
    logo:string
    job_name:string
    badgeType?:string
    badgeValue?:string
    job_area:string
    job_city:string
    Job_description:string
    type:string
    ribbon:boolean
  }
  