import {
  ArrowIcon,
  Aside,
  FilterBlock,
  FilterContent,
  FilterHeader,
  FilterLabel,
} from './SidebarFiltersMobile.styled';


import { PriceRange } from '../PriceRange/PriceRange';
import {
  HiddenCheckbox,
  Label,
  Checkmark,
} from '../SidebarFiltersMobile/SidebarFiltersMobile.styled';
import { useEffect, useState } from 'react';

export const SidebarFiltersMobile = ({
 childValues,
  category,
  selectedFilters,
  setSelectedFilters,

  setPriceRange,
}) => {

  const [openFilters, setOpenFilters] = useState({});
   const [filters, setFilters] = useState([]);
  
useEffect(() => {
  const fetchFilters = async () => {
    try {
       const res = await fetch(
  `${import.meta.env.VITE_API_URL}/api/products?populate=*&filters[category][title][$eq]=${encodeURIComponent(
    category
  )}&pagination[pageSize]=200`
);
        console.log(category)
      const data = await res.json();
      console.log('dataaaa',data.data)
      const products = data.data || [];

const aggregated = {};


products.forEach(product => {
  product.attributes?.forEach(attr => {
    if (!aggregated[attr.label]) aggregated[attr.label] = new Set();
    aggregated[attr.label].add(attr.value);
  });
});

// Створюємо масив об’єктів для SidebarFilters
const apiFilters = Object.entries(aggregated).map(([label, optionsSet]) => ({
  type: 'checkbox',
  label,                     
  name: label.toLowerCase(), 
  options: Array.from(optionsSet),
}));



console.log('fillltr',apiFilters);
setFilters(apiFilters);
    } catch (error) {
      console.error(error);
    }
  };



  if (category) {
    fetchFilters();
  }
}, [category]); 


  


  const toggleFilter = (filterName) => {
    setOpenFilters((prev) => ({
      ...prev,
      [filterName]: !prev[filterName],
    }));
  };

  const handleCheckbox = (filterName, option) => {
    setSelectedFilters((prev) => {
      const prevOptions = prev[filterName] || [];
      if (prevOptions.includes(option)) {
        return {
          ...prev,
          [filterName]: prevOptions.filter((o) => o !== option),
        };
      } else {
        return { ...prev, [filterName]: [...prevOptions, option] };
      }
    });
  };

  return (
    <Aside>
      {(filters || []).map((filter) => {
        const isOpen = !!openFilters[filter.name];
        return (
          <FilterBlock key={filter.name}>
            <FilterHeader onClick={() => toggleFilter(filter.name)}>
            <FilterLabel>{filter.label}</FilterLabel>
            <ArrowIcon isOpen={isOpen} />
            </FilterHeader>
<FilterContent isOpen={isOpen}>
              {filter.type === "checkbox" &&
                filter.options?.map(option => (
                  <Label key={option}>
                    <HiddenCheckbox
                      checked={selectedFilters[filter.name]?.includes(option) || false}
                      onChange={() => handleCheckbox(filter.name, option)}
                    />
                    <Checkmark />
                    {option}
                  </Label>
                ))}
              
              {filter.type === "range" && <PriceRange onChange={setPriceRange}  childValues={childValues} />}
            </FilterContent>
          </FilterBlock>
        );
      })}
    </Aside>
  );
};

export default SidebarFiltersMobile;
