import '../../styles/components/projects/coletaamiga.css'

import TasFirstScreen from '../../assets/gifs/TasFirstScreen.gif';
import TasMapScreen from '../../assets/gifs/TasMapScreen.gif';
import { FaGithub } from 'react-icons/fa';

function ColetaAmiga() {
  return (
    <div id="coleta-amiga">
    <h2>Coleta Amiga</h2>

    <p>Foi meu primeiro projeto mobile após estudar pelo evento da
      Rocketseat (Next Level Week #2) e também meu 
      primeiro trabalho como freelancer, feito para TCC. O app 
      consiste em cadastrar Pessoas e Empresas, onde as 
      pessoas possam buscar locais de reciclagem e as empressas
      possam cadastrar seus locais de reciclagem.
    </p>

    <img src={TasFirstScreen} alt="" />
    
    <p>O projeto foi feito em React Native utilizando Typescript, 
      e o banco de dados utilizando o Express, hospedado na Heroku como 
      PostgreSQL.
    </p>

    <img src={TasMapScreen} alt="" />

    <p>A parte de localidade e rotas foi um bom desafio por se tratar de um iniciante tanto
      em Javascript quanto em manipulação de mapas, onde utilizei de vídeos que tratavam do assunto, 
      como clonagem do Uber(Clonando interface do Uber com React Native | Diego Fernandes, Rocketseat)
      e muitos outros em inglês, além de, claro, a documentação oficial.
    </p>

    <h3>Para vizualisar o projeto completo, acesse:</h3>
    <a
      target="_blank"
      href='https://github.com/Dev-TAS/TAS-mobile'
    >
      <FaGithub size={50} color='white' />
      Github
    </a>
  </div>
  );
}

export default ColetaAmiga;