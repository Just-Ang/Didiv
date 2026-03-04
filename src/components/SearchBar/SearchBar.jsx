import { useState } from "react";
import {  Button,  ButtonLogo, Input, Wrapper } from "./SearchBar.styled";
import sprite from '../../img/symbol-defs.svg';

export const SearchBar =()=>{
    const [value, setValue] = useState("");
    
     
  return (
    <Wrapper>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Пошук"
      />

      

        <Button className="search-button" >
       <ButtonLogo>
  <use href={`${sprite}#icon-search`} />
       </ButtonLogo>
           
         
      </Button>
      

        
      
    </Wrapper>
  )}