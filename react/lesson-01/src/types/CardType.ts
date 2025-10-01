export interface Category {
  name: string;
}

type Categories = Category[];

export interface CardProps {
  _id: number;
  name: string;
  image: string;
  species: string;
  age: string;
  gender: string;
  behavior: string;
  categories: Categories;
  healthStatus: string;
  shortDescription: string;
  description: string;
}
