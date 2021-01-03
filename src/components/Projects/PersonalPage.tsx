import { FaGithub } from 'react-icons/fa';
import '../../styles/components/projects/personalpage.css';

const PersonalPage: React.FC = () => {
  return (
    <div id="personal-page">
      <h2>Personal Page</h2>

      <p>
        É esta página que você está vizualizando neste momento.
        Um dos motivos de eu ter criado este projeto foi para praticar
        o desenvolvimento web, mas, o principal motivo, foi estar 
        insatisfeito com a forma que as informações são exibidas 
        nos currículos no geral.
      </p>

      <p>
        Este projeto foi feito em ReactJS utilizando typescript.
        pretendo utilizar a hospedagem AWS.
      </p>

      <h3>Para vizualisar o projeto completo, acesse:</h3>

      <a
        target="_blank"
        rel="noreferrer"
        href='https://github.com/LucasErthal/Personal-Page'
      >
        <FaGithub size={50} color='white' />
        Github
      </a>

    </div>
  );
}

export default PersonalPage;