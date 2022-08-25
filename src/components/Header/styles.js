import styled from 'styled-components';
import menuHover from '../../assets/MenuHover.svg';
import MenuImg from '../../assets/Menu.svg';
export const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  position: relative;
  padding: 0 2em;
`;

export const Container = styled.nav`
  display: flex;
  align-items: center;
`;

export const ContainerTitulo = styled.h1`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    display: flex;
    font-size: 20px;
    font-weight: 400;
  }
`;

export const ContainerTituloNegrito = styled.b`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    font-size: 20px;
    font-weight: 700;
  }
`;

export const ImageMenu = styled.img`
  width: 24px;
  height: 24px;
  background-repeat: no-repeat;
  display: inline-block;
  padding: 1em;
`;

export const ContainerImage = styled.img`
  padding: 1em;
`;

export const ButtonMenu = styled.button`
  border-color: #ffffff;
  border-bottom: 0px;
  border-right: 0px;
  border-top: 0px;
  border-left: 0px;
  padding: 2em;

  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-size: 16px;
  display: block;

  background: url(${MenuImg}) no-repeat;
  :hover {
    background: url(${menuHover});
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const ButtonMenuCategorias = styled.button`
  border-color: #ffffff;
  border-bottom: 0px;
  border-right: 0px;
  border-top: 0px;
  border-left: 0px;
  background: #ffffff;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-size: 16px;
  padding: 1.5em 1em;
  :hover {
    background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
    color: #ffffff;
  }
`;

export const OpcoesMenu = styled.ul`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1724px) {
    margin-right: auto;
  }
`;

export const OpcoesItem = styled.li`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    padding: 0 1em;
    text-transform: uppercase;
  }
`;

export const LinkItem = styled.a`
  display: block;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const ConatinerLink = styled.a`
  display: none;

  @media screen and (min-width: 1024px) {
    display: block;
  }
  @media screen and (min-width: 1728px) {
    display: block;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Poppins', sans-serif;
  }
`;

export const Texto = styled.p`
  display: none;
  @media screen and (min-width: 1728px) {
    display: block;
  }
`;
