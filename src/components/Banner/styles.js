import styled from "styled-components";
import vector from "../../assets/Vector.svg";

export const ContainerBanner = styled.section`
  background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  opacity: 0.75;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  color: #ffffff;
  padding: 2.5em 2em;
  color: #ffffff;
  text-align: center;
`;

export const BannerTitulo = styled.h2`
  font-weight: 700;
  font-size: 18px;
`;

export const BannerTexto = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin: 1em 0;
`;

export const BannerPesquisa = styled.input`
  background-color: transparent;
  align-items: center;
  padding: 10px 24px;
  border: 1px solid #ffffff;
  color: #ffffff;
  border-radius: 24px;
  width: 100%;

  ::placeholder {
    font-family: "Poppins", sans-serif;
    font-style: normal;
    color: #ffffff;
    text-align: center;
    font-weight: 400;
    font-size: 14px;
    background: url(${vector}) no-repeat;
    background-position: 1em;
  }
`;
