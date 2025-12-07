export type PageType = 'home' | 'about' | 'services' | 'portfolio' | 'contact';

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  results: string;
  image: string;
}
