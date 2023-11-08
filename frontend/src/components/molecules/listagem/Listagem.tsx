import React, { useState, useEffect } from 'react';

interface ListagemProps {
  dados: { nome: string; endereco: string }[];
}

const Listagem: React.FC<ListagemProps> = ({ dados }) => {
  const [novoEnd, setNovoEnd] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const enderecosUnicos: { [key: string]: boolean } = {};

    dados.forEach((data) => {
      enderecosUnicos[data.endereco] = true;
    });

    setNovoEnd(enderecosUnicos);
  }, [dados]);

  const isEnderecoCadastrado = (endereco: string) => {
    if (novoEnd[endereco]) {
      return "sim";
    } else {
      return "nao";
    }
  };

  return (
    <div className="container">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Endereço</th>
            <th scope="col">Endereço Cadastrado</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((data, index) => (
            <tr key={index}>
              <td>{data.nome}</td>
              <td>{data.endereco}</td>
              <td>{isEnderecoCadastrado(data.endereco)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listagem;
