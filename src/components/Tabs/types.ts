import { TabsProps as MUITabProps } from '@mui/material';

export interface TabItem {
  label: string;
  content: React.ReactNode;
}

export type TabsProps = {
  tabItems: TabItem[];
} & MUITabProps;
