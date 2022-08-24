import { useState } from 'react';
import {
  Cabecalho,
  Container,
  ImageMenu,
  ContainerImage,
  ButtonMenu,
  ContainerTitulo,
  ContainerTituloNegrito,
  OpcoesMenu,
  OpcoesItem,
  ButtonMenuCategorias,
} from './styles';
import Logo from '../../assets/Logo.svg';
import Favoritos from '../../assets/Favoritos.svg';
import Compras from '../../assets/Compras.svg';
import Usuario from '../../assets/Usuario.svg';
import MenuImg from '../../assets/Menu.svg';
import Menu from '../Menu';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onMouseEnter = () => {
    setShowMenu(true);
  };

  const onMouseLeave = () => {
    setShowMenu(false);
  };
  return (
    <>
      <Cabecalho>
        <Container>
          <ButtonMenu onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <ImageMenu src={MenuImg} alt="Menu" />
          </ButtonMenu>
          <a href="#">
            <ContainerImage src={Logo} alt="Logo Alurabooks" />
          </a>
          <ContainerTitulo>
            <ContainerTituloNegrito>Alura </ContainerTituloNegrito> Books
          </ContainerTitulo>
        </Container>
        <OpcoesMenu>
          <OpcoesItem>
            <ButtonMenuCategorias
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >
              Categorias
            </ButtonMenuCategorias>
          </OpcoesItem>
          <OpcoesItem>Favoritos</OpcoesItem>
          <OpcoesItem>Minha Estante</OpcoesItem>
        </OpcoesMenu>

        <Container>
          <a href="#">
            <ContainerImage src={Favoritos} alt="Meus Favoritos" />
          </a>
          <a href="#">
            <ContainerImage src={Compras} alt="Carrinho de Compras" />
          </a>
          <a href="#">
            <ContainerImage src={Usuario} alt="Meu Perfil" />
          </a>
        </Container>
      </Cabecalho>
      {showMenu && <Menu />}
    </>
  );
};

export default Header;
