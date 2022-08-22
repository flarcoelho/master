import styled from "styled-components";

export const Cabecalho = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;

  @media screen and (min-width: 1024px) {
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
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
`;
