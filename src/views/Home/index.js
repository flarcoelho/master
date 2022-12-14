import { Container, Linha } from './styles';
import Banner from '../../components/Banner';
import Header from '../../components/Header';
import Carrossel from '../../components/Carrossel';
import Topicos from '../../components/Topicos';
import Angular from '../../assets/Perfil-escritora.svg';
import Escritora from '../../assets/Escritora.svg';
import Estrelas from '../../assets/Estrelinhas.svg';
import Contato from '../../components/Contato';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />

      <Carrossel
        titulo="Últimos Lançamentos"
        descTitulo="Talvez você também se interesse por..."
        descTexto=" Construindo uma aplicação integrada com a plataforma do Google."
        descTituloLivro="Angular 11 e Firebase"
        imgPrincipal={Angular}
        imgEstrelas=""
      />

      <Carrossel
        titulo="Mais Vendidos"
        descTitulo="Autora do Mês"
        descTexto="Analista de sistemas e escritora, Juliana é especialista em Front-End. "
        descTituloLivro="Juliana Agarikov"
        imgPrincipal={Escritora}
        imgEstrelas={Estrelas}
      />

      <Topicos />
      <Contato />
      <Linha />
      <Footer />
    </Container>
  );
};

export default Home;
