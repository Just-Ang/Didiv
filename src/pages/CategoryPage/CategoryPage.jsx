import { useParams } from 'react-router-dom';
import {
  ApplyButton,
  ClearFilter,
  Container,
  Dropdown,
  FilterButton,
  FilterFooter,
  FilterHeader,
  FilterIcon,
  Item,
  MobileFilterContent,
  MobileFilterOverlay,
  Section,
  SortButton,
  TopBar,
  Wrapper,
} from './CategoryPage.styled';
import { SidebarFilters } from '../../components/SidebarFilters/SidebarFilters';
import { SidebarFiltersMobile } from '../../components/SidebarFiltersMobile/SidebarFiltersMobile';
import { ProductList } from '../../components/ProductList/ProductList';
import { useState } from 'react';

import sprite from '../../img/symbol-defs.svg';
import { ArrowDownNarrowWide, SlidersHorizontal, X } from 'lucide-react';

export const CategoryPage = () => {
  const [selectedFilters, setSelectedFilters] = useState({});
  console.log(selectedFilters);
  const { category } = useParams();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [sortType, setSortType] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc'); // asc  desc

  const [childValues, setChildValues] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 0]);




  const hasFilters = Object.values(selectedFilters).some(
    (value) => Array.isArray(value) && value.length > 0
  );
  const handleClear = () => {
    if (hasFilters) {
      setSelectedFilters({});
    }
  };
  return (
    <Section>
      <Container>
        <TopBar>
          <FilterButton onClick={() => setIsFilterOpen(true)}>
            Фільтр
            <FilterIcon>
              <use href={`${sprite}#icon-filter`} />
            </FilterIcon>
          </FilterButton>
          <Wrapper>
            <SortButton onClick={() => setIsSortOpen((prev) => !prev)}>
              Сортування
              <ArrowDownNarrowWide strokeWidth={0.9} size={22} />
            </SortButton>

            {isSortOpen && (
              <Dropdown>
                <Item
                  onClick={() => {
                    setSortType('name');
                    setSortOrder('asc');
                    setIsSortOpen(false);
                  }}
                >
                  А-Я
                </Item>

                <Item
                  onClick={() => {
                    setSortType('name');
                    setSortOrder('desc');
                    setIsSortOpen(false);
                  }}
                >
                  Я-А
                </Item>

                <Item
                  onClick={() => {
                    setSortType('price');
                    setSortOrder('asc');
                    setIsSortOpen(false);
                  }}
                >
                  Ціна ↑
                </Item>

                <Item
                  onClick={() => {
                    setSortType('price');
                    setSortOrder('desc');
                    setIsSortOpen(false);
                  }}
                >
                  Ціна ↓
                </Item>

                <Item
                  onClick={() => {
                    setSortType('date');
                    setSortOrder('desc');
                    setIsSortOpen(false);
                  }}
                >
                  Спочатку новіші
                </Item>
                <Item
                  onClick={() => {
                    setSortType('date');
                    setSortOrder('asc');
                    setIsSortOpen(false);
                  }}
                >
                  Спочатку старіші
                </Item>
              </Dropdown>
            )}
          </Wrapper>
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
          sortType={sortType}
          setIsSortOpen={setIsSortOpen}
          isSortOpen={isSortOpen}
          setSortType={setSortType}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
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
      </Container>{' '}
    </Section>
  );
};
