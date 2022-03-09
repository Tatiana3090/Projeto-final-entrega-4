import React from 'react';
import Logo from '../Logo'
import logoImg from '../../Assets/Logos/logo azul.svg'
import './Navbar.css';

export default function NavBar() {
  return (
    <header className='navBarApp'>
      
      <div>
        <Logo logo={logoImg} />
      </div>

      <div>
        <ul className='list'>
          <li><a href='/'>Home</a></li>
          <li><a href='/sobrenos'>Sobre Nós</a></li>
          <li><a href='/locais'>Locais</a></li>
          <li><a href='/esportes'>Esportes</a></li>
        </ul>
      </div>

    </header>
  );
}