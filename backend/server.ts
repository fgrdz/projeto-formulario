import express, { Request, Response } from 'express';
import axios from 'axios';

const cors = require('cors');


const app = express();
app.use(cors());

const port = 3333;

app.use(express.json());

app.get('/endereco/:cep', async (req: Request, res: Response) => {
  const { cep } = req.params;


  try {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    const data = response.data;

    if (data.erro) {
      res.status(404).json({ error: 'CEP não encontrado' });
    } else {
      res.json(data);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter o endereço' });
  }
});

app.listen(port, () => {
  console.log(`Servidor em execução na porta ${port}`);
});
