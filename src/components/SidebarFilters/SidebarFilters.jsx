import { Aside, CheckboxLabel, FilterBlock, FilterLabel } from "./SidebarFilters.styled";


import { filtersConfig } from "../../data/FiltersConfig";



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

  const handleRange = (filterName, value) => {
    setSelectedFilters(prev => ({ ...prev, [filterName]: value }));
  };

  return (
    <Aside>
      <h3>Фільтри</h3>
      {filters.map(filter => (
        <FilterBlock key={filter.name}>
          <FilterLabel>{filter.label}</FilterLabel>

          {filter.type === "checkbox" &&
            filter.options.map(option => (
              <CheckboxLabel key={option}>
                <input
                  type="checkbox"
                  checked={selectedFilters[filter.name]?.includes(option) || false}
                  onChange={() => handleCheckbox(filter.name, option)}
                />
                {option}
              </CheckboxLabel>
            ))}

          {filter.type === "range" && (
            <input
              type="range"
              min={filter.min}
              max={filter.max}
              value={selectedFilters[filter.name] || filter.min}
              onChange={e => handleRange(filter.name, e.target.value)}
            />
          )}
        </FilterBlock>
      ))}
    </Aside>
  );
};

export default SidebarFilters;
   
     
