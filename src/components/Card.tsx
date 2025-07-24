interface CardProps {
  name: string;
  url: string;
  description: string;
  imageURL: string;
}

export const Card = (props: CardProps) => {
  return (
    <div className="creatorCard">
      <img
        src={props.imageURL}
        alt={`Picture of ${props.name}.`}
        width="100"
        height="100"
      />

      <p>{props.name}</p>
      <p>{props.description}</p>
      <a href={props.url}>Youtube</a>
    </div>
  );
};

export default Card;
