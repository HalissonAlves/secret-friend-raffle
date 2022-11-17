import { render, screen } from '@testing-library/react';
import Header from './header';

test('should have a dice image and a title', () => {
    render(<Header />);

    const logo = screen.getByRole('img');

    expect(logo).toBeInTheDocument();
});