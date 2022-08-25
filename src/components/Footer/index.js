import {
  ContainerFooter,
  FooterTitulo,
  ListaRodape,
  ListaRodapeTitulo,
  ListaRodapeItem,
  ImageRodape,
} from './styles';
import Caelum from '../../assets/AluraBooks/Caelum.svg';
import CasaDoCodigo from '../../assets/AluraBooks/CasaDoCodigo.svg';

import Alura from '../../assets/AluraBooks/Alura.svg';
import AluraEmpresas from '../../assets/AluraBooks/AluraEmpresas.svg';
import AluraLingua from '../../assets/AluraBooks/AluraLingua.svg';
import AluraLATAM from '../../assets/AluraBooks/AluraLATAM.svg';

import CarreiraSemFronteira from '../../assets/AluraBooks/CarreiraSemFronteira.svg';
import HipstersJobs from '../../assets/AluraBooks/HipstersJobs.svg';
import LayersTech from '../../assets/AluraBooks/LayersTech.svg';
import LikeABoss from '../../assets/AluraBooks/LikeABoss.svg';

const Footer = () => {
  return (
    <ContainerFooter>
      <FooterTitulo>Grupo Alura</FooterTitulo>
      <ListaRodape>
        <ListaRodapeTitulo>EDUCAÇÃO</ListaRodapeTitulo>
        <ListaRodapeItem>
          <ImageRodape src={Caelum} /> Caelum
        </ListaRodapeItem>
        <ListaRodapeItem>
          <ImageRodape src={CasaDoCodigo} /> Casa do Código
        </ListaRodapeItem>
      </ListaRodape>
      <ListaRodape>
        <ListaRodapeTitulo>EDUCAÇÃO ONLINE</ListaRodapeTitulo>
        <ListaRodapeItem>
          <ImageRodape src={Alura} /> Alura
        </ListaRodapeItem>
        <ListaRodapeItem>
          <ImageRodape src={AluraEmpresas} /> Alura Para Empresas
        </ListaRodapeItem>
        <ListaRodapeItem>
          <ImageRodape src={AluraLingua} /> Alura LATAM
        </ListaRodapeItem>
        <ListaRodapeItem>
          <ImageRodape src={AluraLATAM} /> Alura Start
        </ListaRodapeItem>
      </ListaRodape>
      <ListaRodape>
        <ListaRodapeTitulo>COMUNIDADE</ListaRodapeTitulo>
        <ListaRodapeItem>
          <ImageRodape src={CarreiraSemFronteira} /> Carreira sem Fornteira
        </ListaRodapeItem>
        <ListaRodapeItem>
          <ImageRodape src={HipstersJobs} /> Hipsters ponto Tech
        </ListaRodapeItem>
        <ListaRodapeItem>
          <ImageRodape src={LayersTech} /> Layers ponto Tech
        </ListaRodapeItem>
        <ListaRodapeItem>
          <ImageRodape src={LikeABoss} /> Like Boss
        </ListaRodapeItem>
      </ListaRodape>
    </ContainerFooter>
  );
};

export default Footer;
