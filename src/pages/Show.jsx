import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getShowById } from '../api/tvmaze';

const useShowById = showId => {
  const [showData, setShowData] = useState(null);
  const [showError, setShowError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getShowById(showId);
        setShowData(data);
        console.log(data);
      } catch (error) {
        setShowError(error);
      }
    }

    fetchData();
  }, [showId]);
  return { showData, showError };
};
const Show = () => {
  const { showId } = useParams();
  const { showError, showData } = useShowById(showId);

  if (showError) {
    return <div>We have an error: {showError.message}</div>;
  }
  if (showData) {
    return <div>Got show: {showData.name}</div>;
  }
  return <div>data is loading</div>;
};

export default Show;
