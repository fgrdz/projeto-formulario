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
      <h1>Seção Cadastro</h1>
      <div className="container-elementos">
       <Formulario/>
      </div>
      
    </div>
  );
}

export default Nav;
