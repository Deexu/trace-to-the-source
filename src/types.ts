export interface MetricItem {
  label: string;
  value: string;
  sub?: string;
  highlight?: boolean;
}

export interface SectionItem {
  id: number;
  title: string;
  image: string;
  tag: string;
  badge: string;
  desc: string;
  features: string[];
  metrics: MetricItem[];
}
