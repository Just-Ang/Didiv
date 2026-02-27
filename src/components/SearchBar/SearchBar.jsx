import { useState } from "react";
import { Button, Input, Wrapper } from "./SearchBar.styled";

export const SearchBar =()=>{
    const [value, setValue] = useState("");

  return (
    <Wrapper>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Быстрый и умный поиск"
      />

      <Button>
        🔍
      </Button>
    </Wrapper>
  )}