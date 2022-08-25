import {
  ListaMenu,
  ListaMenuTitulo,
  ListaMenuItem,
  LinkMenuItem,
} from './styles';

const Menu = () => {
  return (
    <ListaMenu>
      <ListaMenuTitulo>Categorias</ListaMenuTitulo>
      <ListaMenuItem>
        <LinkMenuItem href="#">PROGRAMAÇÃO</LinkMenuItem>
      </ListaMenuItem>
      <ListaMenuItem>
        <LinkMenuItem href="#">FRONT-END</LinkMenuItem>
      </ListaMenuItem>
      <ListaMenuItem>
        <LinkMenuItem href="#">INFRAESTRUTURA</LinkMenuItem>
      </ListaMenuItem>
      <ListaMenuItem>
        <LinkMenuItem href="#">BUSSINESS</LinkMenuItem>
      </ListaMenuItem>
      <ListaMenuItem>
        <LinkMenuItem href="#">DESIGN / UX</LinkMenuItem>
      </ListaMenuItem>
    </ListaMenu>
  );
};

export default Menu;
