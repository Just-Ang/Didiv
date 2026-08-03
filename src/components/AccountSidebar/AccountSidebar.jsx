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
import { Navigate } from "react-router-dom";

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


        const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); 

    Navigate("/");
  };
  return (
    <Sidebar>
      <User>
         <Avatar>
          {(name || name)?.[0]?.toUpperCase() || "?"}
        </Avatar>

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

        <MenuButton onClick={handleLogout}>
          Вийти
        </MenuButton>

      </Menu>
    </Sidebar>
  );
};