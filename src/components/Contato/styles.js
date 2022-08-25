import styled from 'styled-components';
import email from '../../assets/Email.svg';

export const ContainerContato = styled.section`
  background: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  padding: 2.5em 2em;
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContatoDescricao = styled.div`
  @media screen and (min-width: 1024px) {
    width: 30%;
    font-size: 24px;
  }
  margin-right: 1em;
`;

export const ContatoTitulo = styled.h2`
  font-weight: 700;
  font-size: 18px;
  background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ContatoTexto = styled.p`
  font-weight: 300;
  font-size: 16px;
  margin: 1em 0;
  background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ContatoPesquisa = styled.input`
  background-color: transparent;
  align-items: center;
  padding: 10px 24px;
  border: 1px solid #002f52;
  border-radius: 24px;
  width: 90%;
  background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  ::placeholder {
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    background: url(${email}) no-repeat;
    background-position: 7em;
  }

  @media screen and (min-width: 1024px) {
    width: 30%;
  }
`;
