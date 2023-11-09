import { useForm } from "react-hook-form";
import Button from "../../atoms/button/Button";
import api from "../../../services/api/api";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../Utils/store";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import './forms.css'
import { useState } from "react";
import Listagem from "../listagem/Listagem";

const validationSchema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório") ,
  apelido: yup.string().required("Campo obrigatório"),
  cep: yup.number().typeError("CEP deve ser númerico").required("Campo obrigatório"),
  uf: yup.string().required("Campo obrigatório"),
  logradouro: yup.string().required("Campo obrigatório"),
  cidade: yup.string().required("Campo obrigatório"),
  numero:yup.number().typeError("Deve ser númerico").required("Campo obrigatório"),
  bairro:yup.string().required("Campo obrigatório"),
  complemento:yup.string().required("Campo obrigatório")
})

const Forms = () => {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm({resolver: yupResolver(validationSchema)});
  
  const [dados, setDados] =useState<{ nome: string; endereco: string, novoEndereco: boolean }[]>([]);;
  const enderecoData = useSelector((state: RootState) => state.endereco);
  const [logradouro, setLogradouro] = useState('')
  const [bairro, setBairro] = useState('')
  const dispatch = useDispatch();

  const handleCEPChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const cep = event.target.value.replace(/\D/g, "");
   
    if (cep.length === 8) {
      try {
        const response = await api.get(`/endereco/${cep}`);
        const data = response.data;
        dispatch({
          type: 'UPDATE_ENDERECO',
          payload: data,
        })
    
        setValue("uf", data.uf);
        setValue("logradouro", data.logradouro);
        setValue("cidade", data.localidade);
        setValue("bairro", data.bairro);
      } catch (error) {

        console.log("Erro ao buscar CEP: " + error);
      }
    }
    else if(cep === ''){
      console.log(cep)
      setValue("uf", '');
      setValue("logradouro", '');
      setValue("cidade", '');
      setValue("bairro", '');
  }
  };

  const onSubmit = (data: any) => {
    const newData = { nome: data.nome, endereco: data.cep, novoEndereco: data.novoEndereco };
    setDados([...dados, newData]);
    dispatch({
      type: 'CLEAN',
      payload: { }
    })
    
    reset();
    

  };

  

  return (
    <div className="container-form">
      <h2>Cadastro de endereço</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-8">
            <div className="form-group">
              <label>Nome</label>
              <input type="text" className="form-control" {...register("nome")} />
              <p className="erro-message">{errors.nome?.message}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Apelido</label>
              <input type="text" className="form-control" {...register("apelido")} />
              <p className="erro-message">{errors.apelido?.message}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label>CEP</label>
              <input
                type="number"
                
                className="form-control"
                {...register("cep")}
                onChange={handleCEPChange} 
                
              />
              <p className="erro-message">{errors.cep?.message}</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>UF</label>
              <input type="text" className="form-control" {...register("uf")} value={enderecoData.uf} />
            </div>
            <p className="erro-message">{errors.uf?.message}</p>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>Cidade</label>
              <input type="text" className="form-control" {...register("cidade")} value={enderecoData.localidade} />
              <p className="erro-message">{errors.cidade?.message}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">
            <div className="form-group">
              <label>Logradouro</label>
              
                <input type="text" className="form-control" {...register("logradouro")} value={enderecoData.logradouro===''? logradouro: enderecoData.logradouro} onChange={(e)=>setLogradouro(e.target.value)}/>
         
              <p className="erro-message">{errors.logradouro?.message}</p>
            </div>
          </div>
          <div className="col-md-2">
            <div className="form-group">
              <label>Numero</label>
              <input type="number" className="form-control" {...register("numero")} />
              <p className="erro-message">{errors.numero?.message}</p>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Bairro</label>
              <input type="text" className="form-control" {...register("bairro")} value={enderecoData.bairro === ''? bairro : enderecoData.bairro} onChange={(e)=>setBairro(e.target.value)} />
            <p className="erro-message">{errors.bairro?.message}</p>
          </div>
        </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Complemento</label>
              <input type="text" className="form-control " {...register("complemento")}  />
              <p className="erro-message">{errors.complemento?.message}</p>
            </div>
          </div>
        </div>

        <div className="botao-form">
          <Button texto= {"Enviar"} />
        </div>
      </form>
      <div className="container-listagem">
        <h3>Lista de endereços</h3>
        <Listagem dados={dados} setDados={setDados}/>
      </div>
      
    </div>
  );
}

export default Forms;