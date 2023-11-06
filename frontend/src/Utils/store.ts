import { createStore, combineReducers } from 'redux';
import enderecoReducer from './enderecoReducer';


const rootReducer = combineReducers({
  endereco: enderecoReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer);

export default store;
