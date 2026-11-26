 import qs from "qs";
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

  const [filters, setFilters] = useState([]);
    const [openFilters, setOpenFilters] = useState({});

 


useEffect(() => {
  const fetchFilters = async () => {
    try {
//        const res = await fetch(
//   `${import.meta.env.VITE_API_URL}/api/products?populate[attributes][populate]=*&populate[category][populate]=*&filters[category][title][$eq]=${encodeURIComponent(
//   category
// )}&pagination[pageSize]=200`
// );
      
//       const data = await res.json();
const query = qs.stringify(
  {
    populate: {
      attributes: {
        populate: {
          label: {
            populate: '*',
          },
          value: {
            populate: '*',
          },
        },
      },
      category: true,
    },
    filters: {
      category: {
        title: {
          $eq: category,
        },
      },
    },
    pagination: {
      pageSize: 200,
    },
  },
  { encodeValuesOnly: true }
);

const res = await fetch(`${import.meta.env.VITE_API_URL}/api/products?${query}`);
const data = await res.json();
    
      const products = data.data || [];
const aggregated = {};
const conditions = new Set();

products.forEach((product) => {
  product.attributes?.forEach((attr) => {
    const labelText =
      attr.label?.label ?? attr.label?.name ?? attr.label?.title;
    const valueText = attr.value?.value;

    // Пропускаємо порожні або незаповнені значення
    if (!labelText || !valueText) return;

    if (!aggregated[labelText]) {
      aggregated[labelText] = new Set();
    }

    aggregated[labelText].add(valueText);
  });
  if (product.condition) {
    conditions.add(product.condition);
  }
});

// Створюємо масив об’єктів для SidebarFilters
const apiFilters = Object.entries(aggregated).map(([label, optionsSet]) => ({
  type: 'checkbox',
  label,
  name: label.toLowerCase(),
  options: Array.from(optionsSet),
}));

if (conditions.size > 0) {
  apiFilters.push({
    type: 'checkbox',
    label: 'Стан',
    name: 'condition',
    options: Array.from(conditions),
  });
}

setFilters(apiFilters);
console.log('Fetched filters:', apiFilters);
    } catch (error) {
      console.error(error);
    }
  };



  if (category) {
    fetchFilters();
  }
}, [category]); 



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
