import { render, fireEvent, cleanup } from '@testing-library/react';
import App from '../App';

afterEach(cleanup);

describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    const { getByText } = render(<App />);
    const buttonAdd = getByText('Adicionar');
    expect(buttonAdd).toBeInTheDocument();
    expect(buttonAdd.type).toBe('button');
  });

  test('Verifica se ao ser clicado é adicionado o que o usuário digitou', () => {
    const { getByLabelText, queryByText } = render(<App />);

    const inputTask = getByLabelText('Tarefa:');
    const buttonAdd = queryByText('Adicionar');
    fireEvent.change(inputTask, { target: { value: 'Beber agua!' } });
    expect(queryByText('Beber agua!')).not.toBeInTheDocument();
    fireEvent.click(buttonAdd);
    expect(queryByText('Beber agua!')).toBeInTheDocument();
  });
});

describe('Testa a aplicação, e o input', () => {
  test('Testa a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água'];

    const { getByLabelText, getByText } = render(<App />);
    const inputTask = getByLabelText('Tarefa:');
    const btnAdd = getByText('Adicionar');

    listTodo.forEach((task) => {
      fireEvent.change(inputTask, { target: { value: task } });
      fireEvent.click(btnAdd);
    });

    listTodo.forEach((task) => {
      expect(getByText(task)).toBeInTheDocument();
    });
  });
});

describe('Testa o Componente item', () => {
  test('Ao receber uma string na props ela precisa aparecer na tela.', () => {
    const { getByText } = render(<Item content="Limpar a casa" />);
    expect(getByText('Limpar a casa')).toBeInTheDocument();
  });
});