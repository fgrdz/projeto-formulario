import { useForm } from "react-hook-form";
import Button from "../../atoms/button/Button";
import api from "../../../services/api/api";

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../../../Utils/store";
import * as yup from "yup"
import { yupResolver } from '@hookform/resolvers/yup';
import './forms.css'

const validationSchema = yup.object().shape({
  nome: yup.string().required("Campo obrigatório") ,
  apelido: yup.string().required("Campo obrigatório"),
  cep: yup.number().required("Campo obrigatório"),
  uf: yup.string().required("Campo obrigatório"),
  logradouro: yup.string().required("Campo obrigatório"),
  cidade: yup.string().required("Campo obrigatório"),
  numero:yup.number().required("Campo obrigatório"),
  bairro:yup.string().required("Campo obrigatório"),
  complemento:yup.string().required("Campo obrigatório")
})

const Forms = () => {
  const { register, handleSubmit, formState: { errors }, setValue, reset } = useForm({resolver: yupResolver(validationSchema)});


  const enderecoData = useSelector((state: RootState) => state.endereco);

  const dispatch = useDispatch();

  const handleCEPChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const cep = event.target.value.replace(/\D/g, "");

    if (cep.length === 8) {
      try {
        const response = await api.get(`${cep}/json/`);
        const data = response.data;
        dispatch({
          type: 'UPDATE_ENDERECO',
          payload: data,
        });
       
        setValue("uf", data.uf);
        setValue("logradouro", data.logradouro);
        setValue("cidade", data.localidade);
        setValue("bairro", data.bairro);
      } catch (error) {
        console.log("Erro ao buscar CEP: " + error);
      }
    }
  };
  const onSubmit = () => {
    reset()
  };

  return (
    <div className="container">
      <h1>Cadastro de endereço</h1>
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
              <input type="text" className="form-control" {...register("logradouro")} value={enderecoData.logradouro} />
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
              <input type="text" className="form-control" {...register("bairro")} value={enderecoData.bairro} />
              <p className="erro-message">{errors.bairro?.message}</p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Complemento</label>
              <input type="text" className="form-control" {...register("complemento")}  />
              <p className="erro-message">{errors.complemento?.message}</p>
            </div>
          </div>
        </div>

        <div className="botao-form">
          <Button />
        </div>
      </form>
    </div>
  );
}

export default Forms;
