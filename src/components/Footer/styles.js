import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  background: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  padding: 1em;
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
  }
`;

export const FooterTitulo = styled.h2`
  font-weight: 700;
  font-size: 18px;
  background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const ListaRodape = styled.ul`
  color: #474646;
  display: none;
  font-weight: 400;
  font-size: 14px;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

export const ListaRodapeTitulo = styled.li`
  margin-bottom: 0.6em;
  color: #858585;
`;

export const ListaRodapeItem = styled.li`
  display: flex;
  align-items: center;
`;

export const ImageRodape = styled.img`
  margin-right: 0.6em;
  margin-bottom: 0.6em;
`;
