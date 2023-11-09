import React from 'react';
import { useTranslation } from 'react-i18next';
import image from '../../../assets/logo.svg';
import './banner.css';

const Banner = () => {
  const { t } = useTranslation();

  return (<>
 
    <div className="container-banner">
       
      <img src={image} alt="Imagem da logo da cox automotive" />

      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active">{t('aboutUs')}</a>
        </li>
        <div className='divisoria'></div>
        <li className="nav-item">
          <a className="nav-link">{t('brands')}</a>
        </li>
        <div className='divisoria'></div>
        <li className="nav-item">
          <a className="nav-link">{t('contact')}</a>
        </li>
      </ul>
    </div>
    </>
  );
};

export default Banner;
