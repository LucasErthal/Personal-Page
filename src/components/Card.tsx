import '../styles/components/card.css';

interface CardProps {
  name: string
  path: string
}

const Card: React.FC<CardProps> = ({name, path}) => {
  return (
    <a id='card' href={path}>
      <p>{name}</p>
    </a>
  );
}

export default Card;