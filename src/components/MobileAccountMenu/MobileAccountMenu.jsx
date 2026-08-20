import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import {
  Wrapper,
  ToggleButton,
  Menu,
  MenuButton,
  User,
  Avatar,
  Name,
  Email,
} from "./MobileAccountMenu.styled";
import { clearFavorite } from "../../redux/favoritesSlice";
import { clearCart } from "../../redux/cartSlice";
import { persistor } from "../../redux/store";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const MobileAccountMenu = () => {
  const [open, setOpen] = useState(false);

    const [name, setName] = useState("");
        const [email, setEmail] = useState("");
         const dispatch = useDispatch();
const navigate = useNavigate();
      
      //   const [loading, setLoading] = useState(true);
  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  
    dispatch(clearFavorite());
    dispatch(clearCart());
  
    await persistor.purge();
    
  
  navigate("/", { replace: true });
  };
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



  const titles = {
  "/account": "Особисті дані",
  "/account/profile": "Особисті дані",
  "/account/orders": "Замовлення",
  "/account/favorites": "Обране",
  "/account/password": "Змінити пароль",
};

const currentTitle = titles[location.pathname] || "Особисті дані";

  return (
    
    <Wrapper>
         <User>
                 <Avatar>
  {(name || name)?.[0]?.toUpperCase() || "?"}
</Avatar>
         
                 <div>
                   <Name>{name}</Name>
                   <Email>{email}</Email>
                 </div>
               </User>

      <ToggleButton
        onClick={() => setOpen(prev => !prev)}
      >
       {currentTitle}

        {open ? (
          <ChevronUp size={22} />
        ) : (
          <ChevronDown size={22} />
        )}
      </ToggleButton>

      {open && (
        <Menu>

          <MenuButton
            to="/account/profile"
            onClick={() => setOpen(false)}
          >
            Особисті дані
          </MenuButton>

          <MenuButton
            to="/account/orders"
            onClick={() => setOpen(false)}
          >
            Замовлення
          </MenuButton>

          <MenuButton
            to="/account/favorites"
            onClick={() => setOpen(false)}
          >
            Обране
          </MenuButton>

          <MenuButton
            to="/account/password"
            onClick={() => setOpen(false)}
          >
            Змінити пароль
          </MenuButton>

          <MenuButton
            onClick={handleLogout}
          >
            Вийти
          </MenuButton>

        </Menu>
      )}

    </Wrapper>
  );
};