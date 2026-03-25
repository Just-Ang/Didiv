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

import { filtersConfig } from '../../data/FiltersConfig';
import { PriceRange } from '../PriceRange/PriceRange';
import { useState } from 'react';
import { ClearFilter } from '../../pages/CategoryPage/CategoryPage.styled';

export const SidebarFilters = ({
  category,
  selectedFilters,
  setSelectedFilters,
}) => {
  const filters = filtersConfig[category] || [];
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
      <TitleSidebar>Фільтри</TitleSidebar>
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

              {filter.type === 'range' && <PriceRange />}
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
