import { useEffect, useState } from "react";
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
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
    
    //   const [loading, setLoading] = useState(true);

      useEffect(() => {
        const fetchUser = async () => {
          try {
            const token = localStorage.getItem("token");
    
            const res = await fetch(
              `${import.meta.env.VITE_API_URL}/api/users/me`,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
    
            const user = await res.json();
    
    
            setName(user.first_name);
            setEmail(user.email)
          } catch (err) {
            console.error(err);
          } 
        };
    
        fetchUser();
      }, []);
  return (
    <Sidebar>
      <User>
        <Avatar>A</Avatar>

        <div>
          <Name>{name}</Name>
          <Email>{email}</Email>
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