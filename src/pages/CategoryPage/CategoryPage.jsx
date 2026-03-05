import { useParams } from 'react-router-dom';
import {
  CloseButton,
  FilterButton,
  FilterIcon,
  MobileFilterContent,
  MobileFilterOverlay,
  SortButton,
  SortIcon,
  TopBar,
  Wrapper,
} from './CategoryPage.styled';
import { SidebarFilters } from '../../components/SidebarFilters/SidebarFilters';
import {SidebarFiltersMobile} from '../../components/SidebarFiltersMobile/SidebarFiltersMobile'
import { ProductList } from '../../components/ProductList/ProductList';
import { useState } from 'react';

import sprite from '../../img/symbol-defs.svg';

export const CategoryPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  const { category } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  console.log(category);

  return (
    <Wrapper>
      <TopBar>
        <FilterButton onClick={() => setIsFilterOpen(true)}>
          Фільтр
         <FilterIcon> 
           <use href={`${sprite}#icon-filter`} />
                     </FilterIcon>
                     
        </FilterButton>
         <SortButton onClick={() => setIsFilterOpen(true)}>
          Сортування
         <SortIcon>
           <use href={`${sprite}#icon-sort`} />
                     </SortIcon>
                     
        </SortButton>
      </TopBar>
      <SidebarFilters
        category={category}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <ProductList category={category} selectedFilters={selectedFilters} />
      {isFilterOpen && (
        <MobileFilterOverlay>
          <MobileFilterContent>
            <CloseButton onClick={() => setIsFilterOpen(false)}>✕</CloseButton>

            <SidebarFiltersMobile
              category={category}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </MobileFilterContent>
        </MobileFilterOverlay>
      )}
    </Wrapper>
  );
};
