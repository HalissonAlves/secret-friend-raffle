import styled from 'styled-components';
import BigLogoImg from './images/logo.png';
import SmallLogoImg from './images/logo-pequeno.png';

export const Container = styled.div`
    padding-top: 120px;
    display: flex;
    justify-content: space-around;

    @media screen and (max-width: 800px) {
        padding-top: 60px;
        flex-direction: column;
        align-items: center;
    }
`;

export const Logo = styled.div`
    width: 351px;
    height: 117px;
    background-image: url(${BigLogoImg});

    @media screen and (max-width: 800px) {
            background-image: url(${SmallLogoImg});
            width: 235px;
            height: 199px;
    }
}
`;

export const Participant = styled.img`
    width: 450px;
    height: 277px;
`;

