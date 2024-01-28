export interface PeopleYouMayKnowProps {
  heading: string;
}

export interface SocialMediaIconsProps {
  listClassName?: string;
}

export interface AllCardFooterProps {
  item: {
    id?: number;
    card_bg: string;
    avatar: string;
    name: string;
    post: string;
    follower: string;
    following: string;
    totalPost: string;
  };
}

export interface TabContentsProps {
  activeTab: string;
}
