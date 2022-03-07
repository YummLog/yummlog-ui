import { ReactNode } from 'react';

export enum experianceEnum {
  like = 1,
  dislike = 2,
  favorite = 3,
}

export interface FoodItem {
  id: string;
  item: string;
  experiance: experianceEnum;
}

export interface FoodPost {
  id: string;
  name: string;
  date: string;
  address: string;
  city: string;
  state: string;
  country: string;
  foodItems: FoodItem[];
  notes: string;
}

export interface OptionalProviderProps<T> {
  value?: T;
  children?: ReactNode;
}

export interface AllFoodPostsContextValue {
  allFoodPosts: FoodPost[];
  getAllFoodPosts: () => Promise<void>;
}

export interface FoodPostsResponse {
  foodPosts: FoodPost[];
  total: number;
  offset: number;
}
