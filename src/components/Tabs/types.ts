import { TabProps as MUITabProps, TabsProps as MUITabsProps } from '@mui/material';

export interface TabItem {
  label: string;
  content: React.ReactNode;
  icon?: MUITabProps['icon'];
}

export type TabsProps = {
  tabItems: TabItem[];
  tabProps?: MUITabProps;
} & MUITabsProps;

export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
