import { useParams } from 'react-router-dom';
import {
  ApplyButton,
  ClearFilter,
  Container,
  FilterButton,
  FilterFooter,
  FilterHeader,
  FilterIcon,
  MobileFilterContent,
  MobileFilterOverlay,
  SortButton,
  SortIcon,
  TopBar,
} from './CategoryPage.styled';
import { SidebarFilters } from '../../components/SidebarFilters/SidebarFilters';
import { SidebarFiltersMobile } from '../../components/SidebarFiltersMobile/SidebarFiltersMobile';
import { ProductList } from '../../components/ProductList/ProductList';
import { useState } from 'react';

import sprite from '../../img/symbol-defs.svg';
import { SlidersHorizontal, X } from 'lucide-react';

export const CategoryPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  console.log(selectedFilters);
  const { category } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [childValues, setChildValues] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 0]);

  console.log(childValues);

  console.log(category);
  const hasFilters = Object.values(selectedFilters).some(
    (value) => Array.isArray(value) && value.length > 0
  );
  const handleClear = () => {
    if (hasFilters) {
      setSelectedFilters({});
    }
  };
  return (
    <Container>
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
        childValues={childValues}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <ProductList
        priceRange={priceRange}
        values={childValues}
        setValues={setChildValues}
        category={category}
        selectedFilters={selectedFilters}
      />
      {isFilterOpen && (
        <MobileFilterOverlay
          onClick={() => setIsFilterOpen(false)}
          open={isFilterOpen}
        >
          <MobileFilterContent
            onClick={(e) => e.stopPropagation()}
            open={isFilterOpen}
          >
            <FilterHeader>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <SlidersHorizontal size={20} />
                <h2>Фільтри</h2>
              </div>
              <X
                size={24}
                onClick={() => setIsFilterOpen(false)}
                style={{ cursor: 'pointer' }}
              />
            </FilterHeader>
            <SidebarFiltersMobile
              childValues={childValues}
              category={category}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
            />
            <FilterFooter>
              <ClearFilter onClick={handleClear} disabled={!hasFilters}>
                Скинути обрані фільтри
              </ClearFilter>
              <ApplyButton onClick={() => setIsFilterOpen(false)}>
                Показати результати
              </ApplyButton>
            </FilterFooter>
          </MobileFilterContent>
        </MobileFilterOverlay>
      )}
    </Container>
  );
};
