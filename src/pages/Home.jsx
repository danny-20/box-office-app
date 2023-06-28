import { useState } from 'react';
import SearchForm from '../components/SearchForm';
import { searchForPeople, searchForShows } from '../api/tvmaze';
import ShowsGrid from '../components/shows/ShowsGrid';
import ActorsGrid from '../components/actors/ActorsGrid';
import { useQuery } from '@tanstack/react-query';
import { TextCenter } from '../components/common/TextCenter';

const Home = () => {
  // const [apiData, setApiData] = useState(null);
  // const [apiDataError, setApiDataError] = useState(null);
  const [filter, setFilter] = useState(null);

  const { data: apiData, error: apiDataError } = useQuery({
    queryKey: ['search', filter],
    queryFn: () =>
      filter.searchOption === 'shows'
        ? searchForShows(filter.q)
        : searchForPeople(filter.q),
    // ⬇️ disabled as long as the filter is empty
    enabled: !!filter,
    refetchOnWindowFocus: false,
  });
  const onSearch = async ({ q, searchOption }) => {
    setFilter({ q, searchOption });

    //   try {
    //     setApiDataError(null);

    //     let result;

    //     if (searchOption === 'shows') {
    //       result = await searchForShows(q);
    //     } else {
    //       result = await searchForPeople(q);
    //     }
    //     setApiData(result);
    //   } catch (error) {
    //     setApiDataError(error);
    //   }
  };

  const renderApiData = () => {
    if (apiDataError) {
      return <TextCenter>Error occured: {apiDataError.message}</TextCenter>;
    }

    if (apiData?.length === 0) {
      return <TextCenter>No results</TextCenter>;
    }

    if (apiData) {
      return apiData[0].show ? (
        <ShowsGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    }
    return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />

      <div>{renderApiData()}</div>
    </div>
  );
};

export default Home;
