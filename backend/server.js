var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import axios from 'axios';
const app = express();
const port = 3000;
app.use(express.json());
app.get('/endereco/:cep', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { cep } = req.params;
    try {
        const response = yield axios.get(`https://viacep.com.br/ws/${cep}/json/`);
        const data = response.data;
        if (data.erro) {
            res.status(404).json({ error: 'CEP não encontrado' });
        }
        else {
            res.json(data);
        }
    }
    catch (error) {
        res.status(500).json({ error: 'Erro ao obter o endereço' });
    }
}));
app.listen(port, () => {
    console.log(`Servidor em execução na porta ${port}`);
});
