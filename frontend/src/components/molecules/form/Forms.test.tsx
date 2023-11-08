import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Forms from './Forms';

describe('Forms Component', () => {
  it('renders the form', () => {
    render(<Forms />);
    expect(screen.getByText('Cadastro de endereço')).toBeInTheDocument();
  });

  it('handles form submission', () => {
    render(<Forms />);
    
    const nomeInput = screen.getByLabelText('Nome');
    const apelidoInput = screen.getByLabelText('Apelido');
    const cepInput = screen.getByLabelText('CEP');
    const ufInput = screen.getByLabelText('UF');
    const cidadeInput = screen.getByLabelText('Cidade');
    const logradouroInput = screen.getByLabelText('Logradouro');
    const numeroInput = screen.getByLabelText('Numero');
    const bairroInput = screen.getByLabelText('Bairro');
    const complementoInput = screen.getByLabelText('Complemento');
    
    fireEvent.change(nomeInput, { target: { value: 'John' } });
    fireEvent.change(apelidoInput, { target: { value: 'Jow' } });
    const submitButton = screen.getByText('Enviar');
    
    fireEvent.click(submitButton);
    
  });

  it('handles CEP change', async () => {
    render(<Forms />);
    
    const cepInput = screen.getByLabelText('CEP');
    
    fireEvent.change(cepInput, { target: { value: '12345678' } });
    
  });

  it('handles CEP change when CEP is empty', async () => {
    render(<Forms />);
    
    const cepInput = screen.getByLabelText('CEP');
    
    fireEvent.change(cepInput, { target: { value: '' } });
    
  });
});
