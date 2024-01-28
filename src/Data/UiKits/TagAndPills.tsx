import { DollarSign, Headphones, Link, GitHub, Award, Activity, Heart } from 'react-feather';
import { Mail, Bell, Settings, Music, AlertTriangle, AlertCircle } from 'react-feather';

export const ContextualBadgeData = [
    { color: 'secondary', text: 'Secondary' },
    { color: 'success', text: 'Success' },
    { color: 'info', text: 'Info' },
    { color: 'warning', text: 'Warning' },
    { color: 'danger', text: 'Danger' },
    { color: 'light txt-dark', text: 'Light' },
    { color: 'dark tag-pills-sm-mb', text: 'Dark' },
  ];
 
  export const ButtonPartData = [
  
    {
      color: 'secondary',
      text: 'Notification',
      icon: <Bell />,
    },
    {
      color: 'success',
      text: 'Update available',
      icon: <Settings />,
    },
    {
      color: 'info',
      text: 'Playing Now',
      icon: <Music />,
    },
    {
      color: 'warning',
      text: '1.2 GB Used',
      icon: <AlertTriangle />,
    },
    {
      color: 'danger',
      text: 'Alert',
      icon: <AlertCircle />,
    },
  ];
  export const TagsWithNumData = [
    { color: 'secondary', text: '2' },
    { color: 'success', text: '3' },
    { color: 'info', text: '4' },
    { color: 'warning', text: '5' },
    { color: 'danger', text: '6' },
    { color: 'light', text: '7' },
    { color: 'dark ', text: '8' },
  ];
  

export const TagWithIconData = [
  { color: 'secondary', icon: <DollarSign /> },
  { color: 'success', icon: <Headphones /> },
  { color: 'info', icon: <Link /> },
  { color: 'warning', icon: <GitHub /> },
  { color: 'danger', icon: <Award /> },
  { color: 'light', icon: <Activity /> },
  { color: 'dark ', icon: <Heart /> },
];
