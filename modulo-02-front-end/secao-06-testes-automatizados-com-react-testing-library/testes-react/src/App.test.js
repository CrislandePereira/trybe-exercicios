import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Meus Testes', () => {
  it('Verifica se está funcionando', () => {
    expect(true).toEqual(true);
  });

  it('Verifica se existe um input de Pergunte na tela', () => {
    render(<App />);
    const input = screen.getByLabelText('Pergunte');
    expect(input).toBeInTheDocument();
    expect(input).toHaveProperty('type', 'text')
  });

  it('Verifica se o placeholder do Input é "Digite uma pergunta"', () => {
    render(<App />);
    const placeholder = screen.getByPlaceholderText(/Digite uma pergunta/i);
    expect(placeholder).toBeInTheDocument();
  });

  it('Verifica se tem um botão enviar', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Enviar/i});
    userEvent.click(button);
    
  });
});



// act(() => userEvent.type(inputMovie, 'Titanic')); teve na aula ao vivo


