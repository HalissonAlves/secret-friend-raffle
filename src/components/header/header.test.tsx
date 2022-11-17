import { render, screen } from '@testing-library/react';
import Header from './header';

test('should have a dice image and a title', () => {
    render(<Header />);

    const logo = screen.getByLabelText('Logo do Sorteador');
    const participantImage = screen.getByAltText('Imagem do Participante');

    expect(logo).toBeInTheDocument();
    expect(participantImage).toBeInTheDocument();
});