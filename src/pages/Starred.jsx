import { useQuery } from '@tanstack/react-query';
import { useStarredShows } from '../lib/UseStarredShows';
import { getShowsById } from '../api/tvmaze';
import ShowsGrid from '../components/shows/ShowsGrid';

const Starred = () => {
  const [starredShowsIds] = useStarredShows();

  const { data: starredShows, error: starredShowsError } = useQuery({
    queryKey: ['starred', starredShowsIds],
    queryFn: () =>
      getShowsById(starredShowsIds).then(result =>
        result.map(show => ({ show }))
      ),

    refetchOnWindowFocus: false,
  });
  //starred show
  if (starredShows?.length === 0) {
    return <div>No Shows ere starred</div>;
  }

  if (starredShows?.length > 0) {
    return <ShowsGrid shows={starredShows} />;
  }

  if (starredShowsError) {
    return <div>Error Occured: {starredShowsError.message}</div>;
  }
  return <div>Shows are loading</div>;
};

export default Starred;
