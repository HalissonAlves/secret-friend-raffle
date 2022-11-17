import { render, screen } from '@testing-library/react';
import Form from './form';

test('should render disabled button when application starts', () => {
    render(<Form />);

    const input = screen.getByPlaceholderText('Insira os nomes dos participantes');

    const button = screen.getByRole('button');

    expect(input).toBeInTheDocument();

    expect(button).toBeDisabled();
});