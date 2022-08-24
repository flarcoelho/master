import {
  ContainerSugestao,
  Card,
  CardDescricao,
  Descricao,
  DescricaoTitulo,
  DescricaoTituloLivro,
  DescricaoTexto,
  DescricaoImagem,
  CardBotoes,
  Botoes,
  BotoesItem,
  BotaoStyled,
} from './styles';
import Favoritos from '../../assets/Favoritos.svg';
import Compras from '../../assets/Compras.svg';

const Sugestao = (props) => {
  const { descTexto, descTitulo, descTituloLivro, imgPrincipal, imgEstrelas } =
    props;

  return (
    <ContainerSugestao>
      <Card>
        <CardDescricao>
          <Descricao>
            {imgEstrelas && <img src={imgEstrelas} alt="Estrelas do autor" />}
            <DescricaoTitulo>{descTitulo}</DescricaoTitulo>
            <DescricaoTituloLivro>{descTituloLivro}</DescricaoTituloLivro>
            <DescricaoTexto>{descTexto}</DescricaoTexto>
          </Descricao>
          <DescricaoImagem src={imgPrincipal} />
        </CardDescricao>
        <CardBotoes>
          <Botoes>
            <BotoesItem>
              <img src={Favoritos} alt="Favoritar livro" />
            </BotoesItem>
            <BotoesItem>
              <img src={Compras} alt="Adicionar no carrinho de compras" />
            </BotoesItem>
          </Botoes>
          <BotaoStyled>Saiba Mais</BotaoStyled>
        </CardBotoes>
      </Card>
    </ContainerSugestao>
  );
};

export default Sugestao;
