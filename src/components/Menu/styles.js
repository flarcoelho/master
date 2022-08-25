import styled from 'styled-components';

export const ListaMenu = styled.ul`
  width: 60vw;
  position: absolute;
  top: 100%;
  display: block;

  @media screen and (min-width: 1024px) {
    width: auto;
  }
`;

export const ListaMenuTitulo = styled.li`
  padding: 1em;
  background: #ffffff;
  color: #eb9b00;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  display: block;
  @media screen and (min-width: 1024px) {
    display: none;
  }
  :hover {
    background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
    color: #ffffff;
  }
`;

export const ListaMenuItem = styled.li`
  padding: 1em;
  background: #ffffff;
  :hover {
    background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  }
`;

export const ButtonItemMenu = styled.button`
  border-color: #ffffff;
  background: #ffffff;
  border-bottom: 0px;
  border-right: 0px;
  border-top: 0px;
  border-left: 0px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */

  /* Teste */

  background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;
