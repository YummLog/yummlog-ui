import { useEffect } from 'react';
import Card from '../common/Card';
import Heading from '../common/Heading';
import { useAllFoodPosts } from './allFoodPostsContext';

const AllFoodPosts = () => {
  const { allFoodPosts, getAllFoodPosts } = useAllFoodPosts();

  useEffect(() => {
    if (!allFoodPosts.length) {
      getAllFoodPosts();
    }
  }, []);

  if (!allFoodPosts) {
    return <></>;
  }

  return (
    <>
      <Heading type="h4" text={'Restaurent logs'} />
      {allFoodPosts.map((log) => (
        <Card title={log.name} content={`${log.city} ${log.state}`} key={log.id} />
      ))}
    </>
  );
};

export default AllFoodPosts;
