import { useState } from "react";
import { BtnClose, Button, ButtonCloseLogo, ButtonLogo, Input, Wrapper } from "./SearchBar.styled";
import sprite from '../../img/symbol-defs.svg';

export const SearchBar =()=>{
    const [value, setValue] = useState("");
    const [isMobileOpen, setIsMobileOpen] = useState(false);
     const toggleSearch = () => setIsMobileOpen(prev => !prev);

  return (
    <Wrapper>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Пошук"
         isMobileOpen={isMobileOpen}
     
      />

      

        <Button className="search-button" onClick={toggleSearch}>
       <ButtonLogo>
  <use href={`${sprite}#icon-search`} />
       </ButtonLogo>
           
         
      </Button>
      

         {isMobileOpen && (
        <BtnClose className="close-button" onClick={toggleSearch}>
          <ButtonCloseLogo> X
  <use href={`${sprite}#icon-x`} />
       </ButtonCloseLogo>
        </BtnClose>
      )}
      
    </Wrapper>
  )}