import { useState } from "react";
import {  Button,  ButtonLogo, Input, Wrapper } from "./SearchBar.styled";
import sprite from '../../img/symbol-defs.svg';

export const SearchBar =()=>{
    const [value, setValue] = useState("");
    
    
  return (
    <Wrapper>
      <Input
      name="site-search"
        value={value}
        onChange={(e) =>  setValue(e.target.value)}
        placeholder="Пошук"
         autoComplete="off"
      />

      

        <Button className="search-button" >
       <ButtonLogo>
  <use href={`${sprite}#icon-search`} />
       </ButtonLogo>
           
         
      </Button>
      

        
      
    </Wrapper>
  )}