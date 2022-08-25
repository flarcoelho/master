import {
  ContainerContato,
  ContatoDescricao,
  ContatoTitulo,
  ContatoTexto,
  ContatoPesquisa,
} from './styles';

const Contato = () => {
  return (
    <ContainerContato>
      <ContatoDescricao>
        <ContatoTitulo>Fique por dentro das novidades!</ContatoTitulo>
        <ContatoTexto>
          Atualizações de e-books, novos livros, promoções e outros.
        </ContatoTexto>
      </ContatoDescricao>
      <ContatoPesquisa type="email" placeholder="Cadastre seu e-mail" />
    </ContainerContato>
  );
};

export default Contato;
