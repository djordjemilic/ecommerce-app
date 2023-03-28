import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
// import { CategoriesContext } from "../../contexts/categories.context";
import capitalize from "lodash/capitalize";
import "./category.styles.scss";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/category.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{capitalize(category)}</h2>
      <div className="category-container">
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </>
  );
};

export default Category;
