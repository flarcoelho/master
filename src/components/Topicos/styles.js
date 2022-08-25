import styled from 'styled-components';
import vector from '../../assets/Vector.svg';

export const ContainerTopicos = styled.section`
  background: linear-gradient(97.54deg, #002f52 35.49%, #326589 165.37%);
  opacity: 0.75;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  color: #ffffff;
  padding: 2.5em;
  color: #ffffff;
  text-align: center;
`;

export const TopicosTitulo = styled.h2`
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 2em;

  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const TopicosLista = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TopicosItem = styled.li`
  margin: 0.5em;
  @media screen and (min-width: 1024px) {
    font-size: 24px;
  }
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
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;

  /* identical to box height */
  text-align: center;

  color: #ffffff;
`;
