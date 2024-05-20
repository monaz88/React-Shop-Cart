import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  searchProducts,
  getInitialQuery,
  filterProducts,
} from "../Helpers/helper";

//import { useProducts } from "../context/ProductsContext";
import styles from "./Product.module.css";
import Card from "../Components/Card";
import Loader from "../Components/LoaderPage";
import SearchBox from "../Components/searchBox";
import SideBar from "../Components/sideBar";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../features/product/productSlice";

function ProductsPage() {
  // const products = useProducts();
  //const products=[];
  const dispatch = useDispatch();
  const { products, loading } = useSelector((store) => store.product);
  const [displayed, setDisplayed] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({});
  const [searchparam, setSearchParam] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    setDisplayed(products);
    setQuery(getInitialQuery(searchparam));
  }, [products]);

  useEffect(() => {
    setSearchParam(query);
    setSearch(query.search || " ");
    let finalproducts = searchProducts(products, query.search);
    finalproducts = filterProducts(finalproducts, query.category);
    setDisplayed(finalproducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {loading && <Loader />}
          <SideBar query={query} setQuery={setQuery} />
          {displayed.map((product) => (
            <Card key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductsPage;
