import { SearchCard, SearchImgWrapper } from '../common/SearchCard';

const ActorCard = ({ name, image, gender, country, birthday, deathday }) => {
  return (
    <SearchCard>
      <SearchImgWrapper>
        <img src={image} alt={name} />
      </SearchImgWrapper>
      <h1>
        {name} {!!gender && `(${gender})`}
      </h1>

      <p>{country ? `Comes from ${country}` : 'No Country Known'}</p>

      {!!birthday && <p>Born on: {birthday}</p>}

      <p>{deathday ? ` Died ${deathday}` : 'Alive'}</p>
    </SearchCard>
  );
};

export default ActorCard;