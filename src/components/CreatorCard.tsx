import type { CreatorCardProps } from './CreatorInterface'
import './CreatorCard.scss'
import { Link } from 'react-router';

function CreatorCard({ creator, showViewDetailsButton = true, showEdit = true }: CreatorCardProps) {

  const defaultImage = 'https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU='

  return (
    <article className="container-fluid">
      <figure>
        <img
          src={creator.imageURL || defaultImage}
          width="200"
        />
      </figure>
      <div id='right-card'>
        <h3>{creator.name}</h3>
        <h4>Description:</h4>
        <p>{creator.description}</p>
        <h4>Creator URL:</h4>
        <a href={creator.url} target='_blank'>{creator.url}</a>
        <div className='buttons'>
          {showViewDetailsButton && (
            <Link to={`/creator/${creator.slug}`} role='button'>
              View Details
            </Link>
          )}
          {showEdit && (
            <Link to={`/edit/${creator.slug}`} role='button'>
              Edit
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default CreatorCard;