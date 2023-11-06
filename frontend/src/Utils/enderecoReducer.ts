interface EnderecoState {
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
  }
  
  const initialState: EnderecoState = {
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
  };
  
  type EnderecoAction = { type: 'UPDATE_ENDERECO'; payload: EnderecoState };
  
  const enderecoReducer = (state: EnderecoState = initialState, action: EnderecoAction): EnderecoState => {
    switch (action.type) {
      case 'UPDATE_ENDERECO':
        return { ...state, ...action.payload };
      default:
        return state;
    }
  };
  
  export default enderecoReducer;