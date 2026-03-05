import { Aside, CheckboxLabel, FilterBlock, FilterLabel } from "./SidebarFiltersMobile.styled";

import { filtersConfig } from "../../data/FiltersConfig";

import { PriceRange } from "../PriceRange/PriceRange";
import {HiddenCheckbox, Label, Checkmark} from "../SidebarFiltersMobile/SidebarFiltersMobile.styled"


export const SidebarFiltersMobile = ({ category, selectedFilters, setSelectedFilters }) => {
  const filters = filtersConfig[category] || [];


  const handleCheckbox = (filterName, option) => {
    setSelectedFilters(prev => {
      const prevOptions = prev[filterName] || [];
      if (prevOptions.includes(option)) {
        return { ...prev, [filterName]: prevOptions.filter(o => o !== option) };
      } else {
        return { ...prev, [filterName]: [...prevOptions, option] };
      }
    });
  };

  // const handleRange = (filterName, value) => {
  //   setSelectedFilters(prev => ({ ...prev, [filterName]: value }));
  // };

  return (
    <Aside>
      <h3>Фільтри</h3>
      {(filters || []).map(filter => (
        <FilterBlock key={filter.name}>
          <FilterLabel>{filter.label}</FilterLabel>

          {filter.type === "checkbox" &&
            (filter.options || []).map(option => (
              <CheckboxLabel key={option}>
              <Label>
                <HiddenCheckbox
                  type="checkbox"
                  checked={selectedFilters[filter.name]?.includes(option) || false}
                  onChange={() => handleCheckbox(filter.name, option)}
                />
                 <Checkmark />
                 </Label>
                {option}
              </CheckboxLabel>
            ))}
  {filter.type === "range" && <PriceRange></PriceRange>
}


 
        </FilterBlock>
      ))}
    </Aside>
  );
};

export default SidebarFiltersMobile;
   
     
