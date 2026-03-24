import { Aside, CheckboxLabel, Checkmark, FilterBlock, FilterLabel, HiddenCheckbox, Label, TitleSidebar } from "./SidebarFilters.styled";


import { filtersConfig } from "../../data/FiltersConfig";
import { PriceRange } from "../PriceRange/PriceRange";



export const SidebarFilters = ({ category, selectedFilters, setSelectedFilters }) => {
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

 

  return (
    <Aside>
      <TitleSidebar>Фільтри</TitleSidebar>
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

export default SidebarFilters;
   
     
