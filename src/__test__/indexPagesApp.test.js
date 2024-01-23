// En el mismo directorio que tu componente App.js
// Nombre del archivo: App.test.js

import React from 'react';
import { render } from '@testing-library/react';
import App from '../Pages/App/index';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders Pages App component', () => {
  // Renderiza el componente
  const { getByText } = render(<App />);

  // Asegúrate de que algún elemento en el componente esté presente
  const linkElement = getByText(/Hola Mundo/i);
  expect(linkElement).toBeInTheDocument();
});
