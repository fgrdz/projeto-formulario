import React, { useState, useEffect } from 'react';

interface ListagemProps {
  dados: { nome: string; endereco: string, novoEndereco: boolean }[];
  setDados: any;
}

const Listagem: React.FC<ListagemProps> = ({ dados, setDados }) => {

  useEffect(() => {
    const lastIndex = dados.length-1;
    for(let i = 0; i < dados.length; i++){
      if((dados[lastIndex].nome === dados[i].nome) && (dados[lastIndex].endereco !== dados[i].endereco)){
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
            <th scope="col">Nome</th>
            <th scope="col">Endereço</th>
            <th scope="col">Novo Endereço?</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((data, index) => (
            <tr key={index}>
              <td>{data.nome}</td>
              <td>{data.endereco}</td>
              <td>{data.novoEndereco ? "Sim" : "Não"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listagem;