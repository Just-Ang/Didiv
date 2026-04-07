import {
  ArrowIcon,
  Aside,
  Checkmark,
  FilterBlock,
  FilterContent,
  FilterHeader,
  FilterLabel,
  HiddenCheckbox,
  Label,
  TitleSidebar,
} from './SidebarFilters.styled';

import { PriceRange } from '../PriceRange/PriceRange';
import { useEffect, useState } from 'react';
import { ClearFilter } from '../../pages/CategoryPage/CategoryPage.styled';
import { SlidersHorizontal } from 'lucide-react';

export const SidebarFilters = ({
   childValues,
  category,
  selectedFilters,
  setSelectedFilters,
 
  setPriceRange,
}) => {
  // const filters = filtersConfig[category] || [];
  const [filters, setFilters] = useState([]);
  console.log(filters);



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



  const [openFilters, setOpenFilters] = useState({});
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
  const hasFilters = Object.values(selectedFilters).some(
    (value) => Array.isArray(value) && value.length > 0
  );
  const handleClear = () => {
    if (hasFilters) {
      setSelectedFilters({});
    }
  };
  

  console.log(hasFilters);
  return (
    <Aside>
      <TitleSidebar>Фільтри <SlidersHorizontal size={20} /></TitleSidebar>
      
      {(filters || []).map((filter) => {
        const isOpen = !!openFilters[filter.name];
        return (
          <FilterBlock key={filter.name}>
            <FilterHeader onClick={() => toggleFilter(filter.name)}>
              <FilterLabel>{filter.label}</FilterLabel>
              <ArrowIcon isOpen={isOpen} />
            </FilterHeader>
            <FilterContent isOpen={isOpen}>
              {filter.type === 'checkbox' &&
                filter.options?.map((option) => (
                  <Label key={option}>
                    <HiddenCheckbox
                      checked={
                        selectedFilters[filter.name]?.includes(option) || false
                      }
                      onChange={() => handleCheckbox(filter.name, option)}
                    />
                    <Checkmark />
                    {option}
                  </Label>
                ))}

              {filter.type === 'range' && <PriceRange onChange={setPriceRange}  childValues={childValues} />}
            </FilterContent>
          </FilterBlock>
        );
      })}

      <ClearFilter onClick={handleClear} disabled={!hasFilters}>
        Скинути обрані фільтри
      </ClearFilter>
    </Aside>
  );
};

export default SidebarFilters;
