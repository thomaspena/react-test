import { render, screen } from '@testing-library/react';
import OrdersCard from '../Components/OrdersCard/index';
import fetchMock from 'jest-fetch-mock';d

beforeEach(() => {
  fetchMock.resetMocks();
});

describe('OrdersCard', () => {
  test('renders with default props', () => {
    render(<OrdersCard />);
    
    // Verifica que el componente se renderice correctamente
    expect(screen.getByTestId('orders-card')).toBeInTheDocument();
    
    // Verifica que el precio total predeterminado se muestre correctamente
    expect(screen.getByText('$0')).toBeInTheDocument();
    
    // Verifica que el número total de productos predeterminado se muestre correctamente
    expect(screen.getByText('0 articles')).toBeInTheDocument();
  });

  test('renders with provided props', () => {
    const totalPrice = 50;
    const totalProducts = 3;

    render(<OrdersCard totalPrice={totalPrice} totalProducts={totalProducts} />);
    
    // Verifica que el componente se renderice correctamente
    expect(screen.getByTestId('orders-card')).toBeInTheDocument();
    
    // Verifica que el precio total proporcionado se muestre correctamente
    expect(screen.getByText(`$${totalPrice}`)).toBeInTheDocument();
    
    // Verifica que el número total de productos proporcionado se muestre correctamente
    expect(screen.getByText(`${totalProducts} articles`)).toBeInTheDocument();
  });
});
