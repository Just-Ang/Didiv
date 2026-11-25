import {
  ArrowIcon,
  Aside,
  FilterBlock,
  FilterContent,
  FilterHeader,
  FilterLabel,
} from './SidebarFiltersMobile.styled';

import { PriceRange } from '../PriceRange/PriceRange';
import {
  HiddenCheckbox,
  Label,
  Checkmark,
} from '../SidebarFiltersMobile/SidebarFiltersMobile.styled';
import { useEffect, useState } from 'react';
import QueryString from 'qs';

export const SidebarFiltersMobile = ({
  childValues,
  category,
  selectedFilters,
  setSelectedFilters,

  setPriceRange,
}) => {
  const [openFilters, setOpenFilters] = useState({});
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    const fetchFilters = async () => {
      try {
       const query = QueryString.stringify(
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
});

// Створюємо масив об’єктів для SidebarFilters
const apiFilters = Object.entries(aggregated).map(([label, optionsSet]) => ({
  type: 'checkbox',
  label,
  name: label.toLowerCase(),
  options: Array.from(optionsSet),
}));

setFilters(apiFilters);
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

              {filter.type === 'range' && (
                <PriceRange
                  onChange={setPriceRange}
                  childValues={childValues}
                />
              )}
            </FilterContent>
          </FilterBlock>
        );
      })}
    </Aside>
  );
};

export default SidebarFiltersMobile;
