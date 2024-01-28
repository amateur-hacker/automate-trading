export interface knowledgeDataPropsType {
  id: number;
  title: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  text5: string;
  text2_badge?: string;
  text1_badge?: string;
  text3_badge?: string;
  text4_badge?: string;
}

export interface knowledgeBaseSliceType {
  data: [] | knowledgeDataPropsType[];
  inputValue: string;
}

export interface CollapseDataProps {
  isProfile: boolean
}
