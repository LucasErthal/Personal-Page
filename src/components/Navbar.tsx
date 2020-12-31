import '../styles/components/navbar.css'
import { TiThMenu } from 'react-icons/ti'

import Logo from '../assets/images/logo3.svg';

import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isMenuButtonFocused, setIsMenuButtonFocused] = useState(false);
  const [isMenuButtonClicked, setIsMenuButtonClicked] = useState(false);

  function MenuButtonFocus() {
    setIsMenuButtonFocused(!isMenuButtonFocused);
  }

  function MenuButtonClicked() {
    setIsMenuButtonClicked(!isMenuButtonClicked);
    console.log(isMenuButtonClicked);
  }

  return (
    <>
      <div id="navbar">
        <img className='logo' src={Logo} alt="" />

        <Link to='/' className='link' ><span>Início</span></Link>
        <Link to='/AboutMe' className='link'><span>Sobre mim</span></Link>
        <Link to='/AboutMe' className='link'><span>Projetos</span></Link>
        <Link to='/AboutMe' className='link'><span>Cursos</span></Link>
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
        <div   id='menu-container'>
          <Link to='/' className='link' ><span>Início</span></Link>
          <Link to='/AboutMe' className='link'><span>Sobre mim</span></Link>
          <Link to='/AboutMe' className='link'><span>Projetos</span></Link>
          <Link to='/AboutMe' className='link'><span>Cursos</span></Link>
        </div>
      }
    </>
  )
}

export default Navbar;