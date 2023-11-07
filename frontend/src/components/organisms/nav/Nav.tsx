import React, { useState } from 'react';
import NavItem from '../../atoms/navItem/navItem';
import Formulario from '../../molecules/form/Forms'; 
import Tabela from '../../molecules/listagem/Listagem'; 
import './nav.css'

const Nav = () => {
  const [navIndex, setNavIndex] = useState('Cadastrar'); 

  function handleClick(index: string) {
    setNavIndex(index);
  }

  return (
    <div className="container">
      <ul className="nav nav-tabs">
        <NavItem nome={'Cadastro'} isActive={navIndex === 'Cadastrar'} onClick={() => handleClick('Cadastrar')} />
        <NavItem nome={'Verificar'} isActive={navIndex === 'Verificar'} onClick={() => handleClick('Verificar')} />
      </ul>
      <div className="container-elementos">
        {navIndex === 'Cadastrar' && <Formulario />}
        {navIndex === 'Verificar' && <Tabela />} 
      </div>
      
    </div>
  );
}

export default Nav;
