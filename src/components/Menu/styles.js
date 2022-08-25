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
  background: #ffffff;
  :hover {
    background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
    padding: 0em;
  }
`;

export const LinkMenuItem = styled.li`
  padding: 1em;
  :hover {
    color: #ffffff;

    background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  }
`;
