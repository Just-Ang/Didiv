import { Item, List, Menu } from "./ProductsMenu.styled";

export default function ProductsMenu() {
  return (
    <Menu>
      <List>
        <Item>Овочеві сітки</Item>
        <Item>Пакувальні матеріали</Item>
        <Item>Агросітки</Item>
        <Item>Будівельні сітки</Item>
        <Item>Аксесуари</Item>
      </List>
    </Menu>
  );
}