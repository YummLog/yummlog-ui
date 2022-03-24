import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useApiContext } from '../api/axiosInstance';
import { AllFoodPostsContextValue, experianceEnum, FoodPost, FoodPostsResponse, OptionalProviderProps } from './types';

const PAGE_LIMIT = 20;

const restaurantLogs: FoodPost[] = [
  {
    id: '1',
    restaurantName: 'Matteo Italian dinning services',
    address: '569 Main st',
    city: 'Hoboken',
    state: 'New Jersey',
    country: 'USA',
    date: '02-02-22',
    foodItems: [
      {
        id: '1',
        item: 'pasta',
        experiance: experianceEnum.like,
      },
      {
        id: '2',
        item: 'soup',
        experiance: experianceEnum.dislike,
      },
      {
        id: '3',
        item: 'Tiramisu',
        experiance: experianceEnum.favorite,
      },
    ],
    notes: 'overall good experiance',
  },
];

const AllFoodPostsContext = createContext<AllFoodPostsContextValue | null>(null);
AllFoodPostsContext.displayName = 'AllFoodPostsContext';

export const AllFoodPostsProvider = (props: OptionalProviderProps<AllFoodPostsContextValue>) => {
  const [allFoodPosts, setAllFoodPosts] = useState<FoodPost[]>([]);
  const [page, setPage] = useState<number>(PAGE_LIMIT);
  const [total, setTotal] = useState<number>(0);

  const apiContext = useApiContext();

  const getAllFoodPosts = useCallback(async () => {
    try {
      const { data } = await apiContext.get(`/foodpost`);
      console.log(data, 'data');
      setAllFoodPosts(data.foodPosts);
      setTotal(total);
      setPage(page);
    } catch (error) {
      console.error(error);
    }
  }, [allFoodPosts, setAllFoodPosts]);

  const value = useMemo(
    () => ({
      allFoodPosts,
      getAllFoodPosts,
    }),
    [allFoodPosts, getAllFoodPosts]
  );

  return (
    <AllFoodPostsContext.Provider {...props} value={value}>
      {props.children}
    </AllFoodPostsContext.Provider>
  );
};

export function useAllFoodPosts() {
  const context = useContext(AllFoodPostsContext);

  if (context === undefined || context === null) {
    throw new Error('useAllFoodPosts must be inside a allFoodPostsProvider');
  }

  return context;
}
