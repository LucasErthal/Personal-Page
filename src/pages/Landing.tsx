import NavigationButton from '../components/NavigationButton'
import profileImg from '../assets/images/Lucas_Perfil.jpg';
import { FaReact } from "react-icons/fa";

import '../styles/pages/landing.css';

function Landing() {
  return (
    <div id="landing-page">
      {/* <div className="cover"> */}
        <img className="profile-image" src={profileImg} alt="" />
      {/* </div> */}

      <h1 className='Name'>Lucas de Oliveira Mattos Erthal</h1>
      <div className='description-container'>
        <p className='Description'>Programador FullStack <br />React/React-Native{<FaReact color='cyan' size={40} />}</p>
      </div>

      <div 
        className="cards-container" >
        <NavigationButton name='Sobre mim' path='/About' />
        <NavigationButton name='Projetos' path='/Projects' />
        <NavigationButton name='Cursos' path='/Courses' />
      </div>
    </div>
  );
}

export default Landing;