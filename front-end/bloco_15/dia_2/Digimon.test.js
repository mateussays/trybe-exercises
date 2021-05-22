import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App'

const digimonAPI = [
  { 
  name: "Agumon", 
  img: "https://digimon.shadowsmith.com/img/agumon.jpg", 
  level: "Rookie"
}
]

describe('Teste da tela do Digimon', () => {
  it('renders Digimon', async () => {
    global.fetch = jest.fn().mockImplementation(
      function (url) {
        return Promise.resolve({
          json: () => Promise.resolve(digimonAPI)
        })
      }
    )

    render(<App />);

    const inputDigimon = screen.getByTestId('input');
    const searchBtn = screen.getByRole('button', {
      name: /search digimon/i
    });

    userEvent.type(inputDigimon, 'agumon');
    userEvent.click(searchBtn);

    const agumonName = await screen.findByText('Agumon');
    expect(agumonName).toBeInTheDocument();
  });
});