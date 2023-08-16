export interface Category {
  id: string;
  name: string;
  parent: string;
  count: number;
}

export interface CategoryTree {
  id: string;
  name: string;
  parent: string;
  count: number;
  children: CategoryTree[];
}
