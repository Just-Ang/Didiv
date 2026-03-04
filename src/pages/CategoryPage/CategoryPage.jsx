import { useParams } from "react-router-dom";
import { Wrapper } from "./CategoryPage.styled";
import { SidebarFilters } from "../../components/SidebarFilters/SidebarFilters";
import { ProductList } from "../../components/ProductList/ProductList";
import { useState } from "react";



export const CategoryPage = () => {
    const [selectedFilters, setSelectedFilters] = useState({});
  const { category } = useParams();
  console.log(category);


  return (
    <Wrapper>
      <SidebarFilters
        category={category}
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
      <ProductList category={category} selectedFilters={selectedFilters} />
    </Wrapper>
  );
};