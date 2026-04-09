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
        `${import.meta.env.VITE_API_URL}/api/categories?filters[id_title][$eq]=${category}&populate=filters`
      );
      const data = await res.json();
      const apiFilters = data.data[0]?.filters || [];
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
