
import ParticipantImg from './images/participante.png';

import { Container, Logo, Participant } from './header.style';

const Header = () => (
    <Container>
        <Logo role="img" aria-label='Logo do Sorteador'></Logo>
        <Participant src={ParticipantImg} />
    </Container>
);

export default Header;