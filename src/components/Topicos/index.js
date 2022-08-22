import {
  ContainerTopicos,
  TopicosTitulo,
  TopicosLista,
  TopicosItem,
  BotaoStyled,
} from "./styles";

const Topicos = () => {
  return (
    <ContainerTopicos>
      <TopicosTitulo>TÓPICOS VISITADOS RECENTEMENTE</TopicosTitulo>

      <TopicosLista>
        <TopicosItem>
          <BotaoStyled>Android</BotaoStyled>
        </TopicosItem>
        <TopicosItem>
          <BotaoStyled>Marketing Digital</BotaoStyled>
        </TopicosItem>
        <TopicosItem>
          <BotaoStyled>Agile</BotaoStyled>
        </TopicosItem>
        <TopicosItem>
          <BotaoStyled>Startup</BotaoStyled>
        </TopicosItem>
        <TopicosItem>
          <BotaoStyled>HTML e CSS</BotaoStyled>
        </TopicosItem>
        <TopicosItem>
          <BotaoStyled>Phython</BotaoStyled>
        </TopicosItem>
        <TopicosItem>
          <BotaoStyled>OO</BotaoStyled>
        </TopicosItem>
        <TopicosItem>
          <BotaoStyled>Java</BotaoStyled>
        </TopicosItem>
      </TopicosLista>
    </ContainerTopicos>
  );
};

export default Topicos;
