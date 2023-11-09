import Formulario from '../../molecules/form/Forms'; 
import { useTranslation } from 'react-i18next';
import './nav.css'

const Cadastro = () => {
  const { t } = useTranslation();


  return (
    <div className="container">
      <h1>{t ('sectionCad')}</h1>
      <div className="container-elementos">
       <Formulario/>
      </div>
      
    </div>
  );
}

export default Cadastro;
