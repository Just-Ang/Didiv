import { useState } from "react";
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

export const MobileAccountMenu = () => {
  const [open, setOpen] = useState(false);
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
                <Avatar>A</Avatar>
        
                <div>
                  <Name>Анжеліка</Name>
                  <Email>angelika@gmail.com</Email>
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
            to="/"
          >
            Вийти
          </MenuButton>

        </Menu>
      )}

    </Wrapper>
  );
};