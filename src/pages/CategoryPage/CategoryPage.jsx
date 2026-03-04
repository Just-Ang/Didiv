import { useParams } from "react-router-dom";
import { Wrapper } from "./CategoryPage.styled";
import { SidebarFilters } from "../../components/SidebarFilters/SidebarFilters";
import { ProductList } from "../../components/ProductList/ProductList";



export const CategoryPage = () => {
  const { category } = useParams();
  console.log(category);


  return (
    <Wrapper>
      <SidebarFilters category={category} />
      <ProductList category={category} />
    </Wrapper>
  );
};