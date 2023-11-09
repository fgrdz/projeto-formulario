import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ListagemProps {
  dados: { nome: string; endereco: string, novoEndereco: boolean }[];
  setDados: any;
}

const Listagem: React.FC<ListagemProps> = ({ dados, setDados }) => {
  const { t } = useTranslation();

  useEffect(() => {
    const lastIndex = dados.length - 1;
    for (let i = 0; i < dados.length; i++) {
      if ((dados[lastIndex].nome === dados[i].nome) && (dados[lastIndex].endereco !== dados[i].endereco)) {
        const copiaDados = [...dados];
        copiaDados[i].endereco = dados[lastIndex].endereco;
        copiaDados[i].novoEndereco = true;
        copiaDados.pop();
        setDados(copiaDados);
      }
    }
  }, [dados]);

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">{t('names')}</th>
            <th scope="col">{t('address')}</th>
            <th scope="col">{t('isNewAddress')}</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((data, index) => (
            <tr key={index}>
              <td>{data.nome}</td>
              <td>{data.endereco}</td>
              <td>{t(data.novoEndereco ? 'yes' : 'no')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listagem;
