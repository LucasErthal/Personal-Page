import { Link } from 'react-router-dom';
import '../styles/components/card.css';

interface CardProps {
  name: string
  path: string
}

const Card: React.FC<CardProps> = ({name, path}) => {
  return (
    <Link id='card' to={path}>
      <p>{name}</p>
    </Link>
  );
}

export default Card;