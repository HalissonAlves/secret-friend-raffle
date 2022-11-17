import styled from 'styled-components';

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
    background-image: url(${process.env.PUBLIC_URL}/images/logo.png);

    @media screen and (max-width: 800px) {
        background-image: url(${process.env.PUBLIC_URL}/images/logo-pequeno.png);
        width: 235px;
        height: 199px;
    }
}
`;

export const Participant = styled.img`
    width: 450px;
    height: 277px;
`;

