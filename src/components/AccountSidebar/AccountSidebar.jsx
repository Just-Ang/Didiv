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

import { persistor } from "../../redux/store";
import { useDispatch } from "react-redux";
import { clearFavorite } from "../../redux/favoritesSlice";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../redux/cartSlice";
import { ModalLogOut } from "../ModalLogOut/ModalLogOut";


export const AccountSidebar = () => {
      const [name, setName] = useState("");
      const [email, setEmail] = useState("");
      const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

      const dispatch = useDispatch();
const navigate = useNavigate();


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


    const handleLogout = async () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");

  dispatch(clearFavorite());
  dispatch(clearCart());

  await persistor.purge();
  

navigate("/", { replace: true });
};
  return (
    <Sidebar>
         {isLogoutModalOpen && (
        <ModalLogOut
          onClose={() => setIsLogoutModalOpen(false)}
          onConfirm={handleLogout}
        />
      )}
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

        <MenuButton onClick={() => setIsLogoutModalOpen(true)}>
         Вийти
       </MenuButton>

      </Menu>
    </Sidebar>
  );
};