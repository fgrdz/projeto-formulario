import React from 'react';
import i18n from './i18n.js';
import './language.css'

function LanguageSelector() {
  const changeLanguage = (lng:any) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className='container-language'>
      <button onClick={() => changeLanguage('en')}>En</button>
      <button onClick={() => changeLanguage('pt')}>Pt</button>
     
    </div>
  );
}

export default LanguageSelector;