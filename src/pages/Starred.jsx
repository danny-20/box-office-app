import { useStarredShows } from '../lib/UseStarredShows';

const Starred = () => {
  const [starredShows] = useStarredShows();

  //starred show
  return <div>Starred Page, starred {starredShows.length}</div>;
};

export default Starred;
