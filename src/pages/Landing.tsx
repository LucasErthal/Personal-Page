import Card from '../components/Card'
import profileImg from '../assets/images/Lucas_Perfil.jpg'

import '../styles/pages/landing.css'

function Landing() {
  return (
    <div id="landing-page">
      <div className="cover">
        <img className="profile-image" src={profileImg} alt="" />
      </div>

      <h1 className='Name'>Lucas de Oliveira Mattos Erthal</h1>
      <div className='description-container'>
        <p className='Description'>Programador FullStack React/React-Native</p>
      </div>

      <div className="cards-container">
        <Card name='Sobre mim' path='/Projetos' />
        <Card name='Projetos' path='/Projetos' />
        <Card name='Cursos' path='/Projetos' />
      </div>
    </div>
  );
}

export default Landing;