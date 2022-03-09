import React from 'react';
import Logo from '../Logo'
import logoImg from '../../Assets/Logos/logo azul.svg'
import logoImg2 from '../../Assets/Logos/logo verde.svg'
import './Navbar.css';

export default function NavBar() {
  return (
    <header className='navBarApp'>
      <div>
        <a href='/'><Logo logo={logoImg} /></a>
      </div>
      <div>
        <ul className='list'>
          <li><a className='a' href='/'>Home</a></li>
          <li><a className='a' href='/sobrenos'>Sobre Nós</a></li>
          <li><a className='a' href='/locais'>Locais</a></li>
          <li><a className='a' href='/esportes'>Esportes</a></li>
          <li><a className='Login' href='/'>LogIn</a></li>
        </ul>
      </div>
    </header>
  );
}