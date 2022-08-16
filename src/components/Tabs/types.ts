export interface TabItem {
  label: string;
  content: React.ReactNode;
}

export type TabsProps = {
  tabItems: TabItem[];
};
