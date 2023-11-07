import React, { useState } from 'react';
import './navItem.css'

interface NavItemProps {
  nome: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ nome, isActive, onClick }: NavItemProps) => {
  const backgroundColor = isActive ? '#F8991D' : ''; 

  return (
    <li className="nav-item">
      <a
        className={`nav-link ${isActive ? 'active' : ''}`}
        onClick={onClick}
        style={{ backgroundColor }}
      >
        {nome}
      </a>
    </li>
  );
}

export default NavItem;