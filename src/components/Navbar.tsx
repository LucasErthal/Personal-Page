import '../styles/components/navbar.css'
import { TiThMenu } from 'react-icons/ti'

import Logo from '../assets/images/logo3.svg';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar: React.FC = () => {
  const [isMenuButtonFocused, setIsMenuButtonFocused] = useState(false);
  const [isMenuButtonClicked, setIsMenuButtonClicked] = useState(false);

  function MenuButtonFocus() {
    setIsMenuButtonFocused(!isMenuButtonFocused);
  }

  function MenuButtonClicked() {
    setIsMenuButtonClicked(!isMenuButtonClicked);
  }

  return (
    <>
      <div id="navbar">
        <img className='logo' src={Logo} alt="" />

        <Link to='/' className='link' ><span>Início</span></Link>
        <Link to='/About' className='link'><span>Sobre mim</span></Link>
        <Link to='/Projects' className='link'><span>Projetos</span></Link>
        <Link to='/' className='link'><span>Cursos</span></Link>
        <button 
          onMouseEnter={MenuButtonFocus} 
          onMouseLeave={MenuButtonFocus}
          onClick={MenuButtonClicked}
          className='menu-button'
        > 
          <TiThMenu color={isMenuButtonFocused ? 'cyan' : 'white'} size={50} /> 
        </button>
      </div>

      {isMenuButtonClicked &&
        <div id='menu-container'>
          <Link to='/' className='link' ><span>Início</span></Link>
          <Link to='/About' className='link'><span>Sobre mim</span></Link>
          <Link to='/Projects' className='link'><span>Projetos</span></Link>
          <Link to='/' className='link'><span>Cursos</span></Link>
          <button className='close-button'onClick={MenuButtonClicked}>
            Fechar
          </button>
        </div>
      }
    </>
  )
}

export default Navbar;