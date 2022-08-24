import styled from 'styled-components';

export const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
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
  background: #ffffff;
  text-transform: uppercase;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-size: 16px;
  display: block;
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
`;

export const OpcoesMenu = styled.ul`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
    display: flex;
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
