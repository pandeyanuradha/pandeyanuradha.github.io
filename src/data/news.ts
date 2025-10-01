export interface NewsItem {
  date: string;
  title: string;
  description?: string;
  link?: string;
}

// For now, let's have an empty array so the component doesn't crash
export const newsData: NewsItem[] = [];
