import { Box } from '@mui/material';
import { useEffect } from 'react';
import Card from '../common/Card';
import { useAllFoodPosts } from './allFoodPostsContext';

const BoxSx = {
  my: '1em',
};

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
    <Box sx={BoxSx}>
      {allFoodPosts.map((log) => (
        <Card title={log.name} content={`${log.city} ${log.state}`} key={log.id} />
      ))}
    </Box>
  );
};

export default AllFoodPosts;
