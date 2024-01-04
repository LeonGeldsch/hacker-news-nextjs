import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Navbar from '@/components/Navbar';

describe('Navbar', () => {
  it('renders a nav element', () => {
    render(<Navbar />);

    const navigation = screen.getByRole('navigation');

    expect(navigation).toBeInTheDocument();
  });
});
