import { Link } from 'react-router-dom';
import '../styles/components/navigationbutton.css';

interface NavigationButtonProps {
  name: string
  path: string
}

const NavigationButton: React.FC<NavigationButtonProps> = ({name, path}) => {
  return (
    <Link id='card' to={path}>
      <p>{name}</p>
    </Link>
  );
}

export default NavigationButton;