
import ParticipantImg from './images/participante.png';

import { Container, Logo, Participant } from './header.style';

const Header = () => (
    <Container>
        <Logo role="img" aria-label='Logo do Sorteador'></Logo>
        <Participant src={process.env.PUBLIC_URL + '/images/participante.png'} alt="Imagem do Participante" />
    </Container>
);

export default Header;