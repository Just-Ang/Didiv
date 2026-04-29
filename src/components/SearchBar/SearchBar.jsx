import { useEffect, useState } from 'react';
import { Button, ButtonLogo, Dropdown, DropdownItem, Input, Wrapper } from './SearchBar.styled';
import sprite from '../../img/symbol-defs.svg';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const [value, setValue] = useState('');
  console.log(value)
  const [results, setResults] = useState([]);
  console.log(results)
  const [open, setOpen] = useState(false);
    console.log(open)

  const navigate = useNavigate();
  useEffect(() => {
    if (!value.trim()) {
      setResults([]);
      setOpen(false);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
    const res = await fetch(
  `${import.meta.env.VITE_API_URL}/api/products?filters[name][$containsi]=${value}&populate=*`
);
        const data = await res.json();

        setResults(data.data);
        setOpen(true);
      } catch (err) {
        console.error(err);
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [value]);

    const handleSelect = (product) => {
    setValue('');
    setOpen(false);
    navigate(`/product/${product.id}`);
  };

  return (
    <Wrapper>
      <Input
        name="site-search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Пошук"
        autoComplete="off"
      />

      <Button className="search-button">
        <ButtonLogo>
          <use href={`${sprite}#icon-search`} />
        </ButtonLogo>
      </Button>
        {open && results.length > 0 && (
        <Dropdown>
          {results.map((item) => (
            <DropdownItem key={item.id} onClick={() => handleSelect(item)}>
              <img src={item.images?.[0]?.url || '/nofoto.png'} alt="" />
              <span>{item.name}</span>
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </Wrapper>
  );
};