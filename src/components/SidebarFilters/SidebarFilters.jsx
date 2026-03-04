import { Wrapper } from "./SidebarFilters.styled";


import { filtersConfig } from "../../data/FiltersConfig";

export const SidebarFilters = ({ category }) => {
  const filters = filtersConfig[category] || [];

  return (
     <Wrapper>
       <h3>Фільтри</h3>

      {filters.map(filter => (
        <div key={filter.name}>
          <p>{filter.label}</p>
          {/* тут вже рендериш input по типу */}
        </div>
      ))} </Wrapper>
   
  );
   
     
};