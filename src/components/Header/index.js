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
  LinkItem,
  Texto,
  ConatinerLink,
} from './styles';
import Logo from '../../assets/Logo.svg';
import Favoritos from '../../assets/Favoritos.svg';
import Compras from '../../assets/Compras.svg';
import Usuario from '../../assets/Usuario.svg';
import Menu from '../Menu';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCategorias, setShowCategorias] = useState(false);

  const onClickMenu = () => {
    setShowMenu(!showMenu);
    setShowCategorias(false);
  };
  const onClickCategoria = () => {
    setShowCategorias(!showCategorias);
    setShowMenu(false);
  };

  return (
    <>
      <Cabecalho>
        <Container>
          <ButtonMenu onClick={onClickMenu} />

          {showMenu && <Menu />}
          <a href="#">
            <ContainerImage src={Logo} alt="Logo Alurabooks" />
          </a>
          <ContainerTitulo>
            <ContainerTituloNegrito>Alura </ContainerTituloNegrito> Books
          </ContainerTitulo>
        </Container>

        <OpcoesMenu>
          <OpcoesItem>
            <ButtonMenuCategorias onClick={onClickCategoria}>
              Categorias
            </ButtonMenuCategorias>
          </OpcoesItem>
          {showCategorias && <Menu />}
          <OpcoesItem>Favoritos</OpcoesItem>
          <OpcoesItem>Minha Estante</OpcoesItem>
        </OpcoesMenu>

        <Container>
          <LinkItem href="#">
            <ContainerImage src={Favoritos} alt="Meus Favoritos" />
          </LinkItem>
          <ConatinerLink href="#">
            <ContainerImage src={Compras} alt="Carrinho de Compras" />
            <Texto>Minha Sacola</Texto>
          </ConatinerLink>
          <ConatinerLink href="#">
            <ContainerImage src={Usuario} alt="Meu Perfil" />
            <Texto>Meu Perfil</Texto>
          </ConatinerLink>
        </Container>
      </Cabecalho>
    </>
  );
};

export default Header;
