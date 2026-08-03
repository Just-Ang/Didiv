import {
  Sidebar,
  User,
  Avatar,
  Name,
  Email,
  Menu,
  MenuButton,
} from "./AccountSidebar.styled";

export const AccountSidebar = () => {
  return (
    <Sidebar>
      <User>
        <Avatar>A</Avatar>

        <div>
          <Name>Анжеліка</Name>
          <Email>angelika@gmail.com</Email>
        </div>
      </User>

      <Menu>

        <Menu>
  <MenuButton $active to="/account/profile">
    Особисті дані
  </MenuButton>

  <MenuButton to="/account/orders">
    Замовлення
  </MenuButton>

  <MenuButton to="/account/password">
    Змінити пароль
  </MenuButton>
</Menu>

        <MenuButton>
          Вийти
        </MenuButton>

      </Menu>
    </Sidebar>
  );
};