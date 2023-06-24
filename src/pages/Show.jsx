import { useParams } from 'react-router-dom';

const Show = () => {
  const { showId } = useParams();

  return <div>show id for : {showId}</div>;
};

export default Show;
