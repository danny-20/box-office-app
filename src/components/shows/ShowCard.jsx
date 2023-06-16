import { Link } from 'react-router-dom';

const ShowCard = ({ name, image, id, summary }) => {
  const summaryStrippted = summary
    ? summary.split(' ').slice(0, 10).join(' ').replace(/<.+?>/g, '')
    : 'No descritption';

  return (
    <div>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>

      <p>{summaryStrippted}</p>

      <div>
        <Link to="/">Read More</Link>
        <button type="button">Star Me</button>
      </div>
    </div>
  );
};

export default ShowCard;
