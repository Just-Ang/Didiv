import { useEffect, useRef, useState } from 'react';
import { Button, ButtonLogo, Dropdown, DropdownItem, Input, ItemTitle, Wrapper, WrapperDown } from './SearchBar.styled';
import sprite from '../../img/symbol-defs.svg';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
  const [value, setValue] = useState('');

  const [results, setResults] = useState([]);

  const [open, setOpen] = useState(false);


  const navigate = useNavigate();
    const searchRef = useRef(null);

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


   useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, []);

    const handleSelect = (product) => {
    setValue('');
    setOpen(false);
    navigate(`/product/${product.id}`);
  };

  return (
 <Wrapper ref={searchRef}>
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
          {results.map((item) => {
               const hasDiscount =
  item.new_price && item.new_price < item.price;

const finalPrice = hasDiscount ? item.new_price : item.price;
         
          return (
            <DropdownItem key={item.id} onClick={() => handleSelect(item)}>
              <img src={item.images?.[0]?.url || '/nofoto.png'} alt="" />
             <WrapperDown>
               <ItemTitle>{item.name}</ItemTitle>
              <span>{finalPrice} грн.</span>
             </WrapperDown>
            </DropdownItem>
          )})}
        </Dropdown>
      )}
    </Wrapper>
  );
};