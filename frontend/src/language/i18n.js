import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          aboutUs: 'About Us',
          brands: 'Brands',
          contact: 'Contact',
         
          sectionCad: 'Registration',
          addressRegistration: 'Address Registration',
          name: 'Name',
          nickname: 'Nickname',
          zipCode: "ZipCode",
          state: "State",
          city: 'City',
          street: 'Street',
          number: 'Number',
          neighborhood: 'Neighborhood',
          complement: 'Complement',

          submit: 'Submit',

          addressList: 'Address List',


          names: 'Name',
          address: 'Address',
          isNewAddress: 'Is New Addres?'
        },
      },
      pt: {
        translation: {
          aboutUs: 'Sobre nós',
          brands: 'Marcas',
          contact: 'Contato',
          
          sectionCad: 'Seção Cadastro',

          addressRegistration: 'Cadastro de Endereço',
          name: 'Nome',
          nickname: 'Apelido',
          zipCode: "Cep",
          state: "UF",
          city: 'Cidade',
          street: 'Rua',
          number: 'Número',
          neighborhood: 'Bairro',
          complement: "Complemento",

          submit: 'Enviar',

          addressList: 'Lista endereços',

          names: 'Nome',
          address: 'Endereço',
          isNewAddress: 'Novo endereço?'
          
        },
      },
      
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
