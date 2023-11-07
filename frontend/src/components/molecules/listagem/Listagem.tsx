import './listagem.css';

const Listagem = () => {
    return (
        <div className="container">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Endereço</th>
                <th scope="col">Novo Endereço</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>João</td>
                <td>Rua A, 123</td>
                <td>não</td>
              </tr>

            </tbody>
          </table>
        </div>
      );

    }
export default Listagem;
