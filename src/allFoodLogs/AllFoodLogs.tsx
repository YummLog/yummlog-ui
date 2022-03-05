import Card from '../common/Card';
import Heading from '../common/Heading';

enum experianceEnum {
  like = 1,
  dislike = 2,
  favorite = 3,
}

const restaurantLogs = [
  {
    id: 1,
    name: 'Matteo Italian dinning services',
    address: '569 Main st',
    city: 'Hoboken',
    state: 'New Jersey',
    country: 'USA',
    food: [
      {
        item: 'pasta',
        experiance: experianceEnum.like,
      },
      {
        item: 'soup',
        experiance: experianceEnum.dislike,
      },
      {
        item: 'Tiramisu',
        experiance: experianceEnum.favorite,
      },
    ],
    notes: 'overall good experiance',
  },
];

const AllFoodLogs = () => {
  return (
    <>
      <Heading type="h3" text={'Restaurent logs'} />
      {restaurantLogs.map((log) => (
        <Card title={log.name} content={`${log.city} ${log.state}`} />
      ))}
    </>
  );
};

export default AllFoodLogs;
