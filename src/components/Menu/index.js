import {
  ListaMenu,
  ListaMenuTitulo,
  ListaMenuItem,
  ButtonItemMenu,
} from './styles';

const Menu = () => {
  return (
    <ListaMenu>
      <ListaMenuTitulo>Categorias</ListaMenuTitulo>
      <ListaMenuItem>
        <ButtonItemMenu>PROGRAMAÇÃO</ButtonItemMenu>
      </ListaMenuItem>
      <ListaMenuItem>
        <ButtonItemMenu>FRONT-END</ButtonItemMenu>
      </ListaMenuItem>
      <ListaMenuItem>
        <ButtonItemMenu>INFRAESTRUTURA</ButtonItemMenu>
      </ListaMenuItem>
      <ListaMenuItem>
        <ButtonItemMenu>BUSSINESS</ButtonItemMenu>
      </ListaMenuItem>
      <ListaMenuItem>
        <ButtonItemMenu>DESIGN / UX</ButtonItemMenu>
      </ListaMenuItem>
    </ListaMenu>
  );
};

export default Menu;
