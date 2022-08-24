import {
  ContainerContato,
  ContatoTitulo,
  ContatoTexto,
  ContatoPesquisa,
} from './styles';

const Contato = () => {
  const TESTE = '';
  return (
    <ContainerContato>
      <ContatoTitulo>Fique por dentro das novidades!</ContatoTitulo>
      <ContatoTexto>
        Atualizações de e-books, novos livros, promoções e outros.
      </ContatoTexto>
      <ContatoPesquisa type="email" placeholder="Cadastre seu e-mail" />
    </ContainerContato>
  );
};

export default Contato;
