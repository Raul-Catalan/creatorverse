import type { Creator } from './CreatorInterface'
import './CreatorCard.scss'
import { Link } from 'react-router';

function CreatorCard({ creator }: { creator: Creator }) {
  return (
    <article className="container-fluid">
      <figure>
        <img
          src={creator.imageURL}
          width="200"
        />
      </figure>
      <div id='right-card'>
        <h3>{creator.name}</h3>
        <p>{creator.description}</p>
        <p>Creators url: {creator.url}</p>
        <Link key={creator.slug} to={`/creator/${creator.slug}`}>
          <button>View Details</button>
        </Link>
      </div>
    </article>
  );
}

export default CreatorCard;