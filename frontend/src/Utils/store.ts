import { createStore, combineReducers } from 'redux';
import enderecoReducer from './enderecoReducer';

interface ListagemData {
  nome: string;
  endereco: string;
  novoEndereco: string;

}

const rootReducer = combineReducers({
  endereco: enderecoReducer,
  listagemData: (state: ListagemData | undefined, action: any) => state || {
    nome: '',
    endereco: '',
    novoEndereco: '',
  
  },
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
