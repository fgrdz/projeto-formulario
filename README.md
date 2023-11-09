![screenshot](/frontend/src/assets/logo.svg)
# Formulário de Cadastro
O formulário para cadastro consome a API Viacep, gratuita, para preenchimento dos dados de endereço. Também foi colocado validação nos campos do formulário. 
O formulário possui a funcionalidade de alternar a linguagem para inglês ou português conforme preferência.
Prezei por um design simples por se tratar de um formulário visando a eficiência.
<br>
Clique no vídeo demonstração:




https://github.com/fgrdz/projeto-formulario/assets/109359994/27948ac8-c403-469e-8761-66cc8f496e75




## Como rodar o projeto na sua máquina
- Clone o repositório usando o comando `git clone https://github.com/fgrdz/projeto-formulario.git`
- Abra o diretório **frontend** no terminal com o comando `cd frontend` depois use ```npm install``` ou ```npm install --force``` para instalar dependencias
- Para executar o servidor do backend, alterne para o diretório backend com o comando `cd frontend`, depois basta utilizar o comando `node server.js` ou `ts-node server.ts`
- Fiz o deploy do frontend e da API no Render, serviço de deploy gratuito(como Vercel, Heroku) a partir do repositório github.
  <br>
**Disponível** em https://cox-cadastro.onrender.com/

*Pode apresentar uma taxa de atualização um pouco lenta ao mudar o cep, devido ao serviço de hospedagem da api.*

## Ferramentas e linguagens
- i18n
- Typescript
- React
- Redux
- Axios
- Bootstrap
- React-hook-form
- Yup
## Cores
Peguei cores no site da cox automotive via extensão do chrome
- #F8991D
- #1D3E74
- #3860BE
- #F7B01B
- #f2f2f3
- #333333
