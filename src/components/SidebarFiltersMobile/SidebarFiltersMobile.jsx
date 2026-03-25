import {
  ArrowIcon,
  Aside,
  FilterBlock,
  FilterContent,
  FilterHeader,
  FilterLabel,
} from './SidebarFiltersMobile.styled';

import { filtersConfig } from '../../data/FiltersConfig';

import { PriceRange } from '../PriceRange/PriceRange';
import {
  HiddenCheckbox,
  Label,
  Checkmark,
} from '../SidebarFiltersMobile/SidebarFiltersMobile.styled';
import { useState } from 'react';

export const SidebarFiltersMobile = ({
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
              
              {filter.type === "range" && <PriceRange />}
            </FilterContent>
          </FilterBlock>
        );
      })}
    </Aside>
  );
};

export default SidebarFiltersMobile;
