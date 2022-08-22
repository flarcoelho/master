import styled from "styled-components";

export const ContainerSugestao = styled.section``;

export const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  margin: 1em;
  padding: 1em;
`;

export const CardDescricao = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
`;

export const Descricao = styled.div`
  font-family: "Poppins", sans-serif;
  font-style: normal;
`;

export const DescricaoTitulo = styled.h3`
  color: #eb9b00;
  font-weight: 700;
  font-size: 16px;
`;

export const DescricaoTituloLivro = styled.h2`
  color: #002f52;
  font-weight: 700;
  font-size: 18px;
  margin: 0.5em 0;
`;

export const DescricaoTexto = styled.p`
  color: rgba(0, 0, 0, 0.85);
  font-weight: 400;
  font-size: 14px;
  margin: 0 0.5em 0 0;
`;

export const DescricaoImagem = styled.img``;

export const CardBotoes = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Botoes = styled.ul`
  display: flex;
`;

export const BotoesItem = styled.li`
  margin: 0.5em;
`;

export const BotaoStyled = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 16px;
  gap: 10px;
  background: #eb9b00;
  border-bottom: 0px;
  border-right: 0px;
  border-top: 0px;
  border-left: 0px;
  /* Propiedades da font */
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  /* identical to box height */
  text-align: center;

  color: #ffffff;
`;
