// import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
// import { createContext, useContext } from "react";
// import api from "../services/config";

// const ProductsContext = createContext();

// function ProductsProvider({ children }) {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setProducts(await api.get("/products"));
//       } catch (error){
//         console.log("error")
//       }
//     };
//     fetchProducts();
//   }, []);
//   return (
//     <ProductsContext.Provider value={products}>
//       {children}
//     </ProductsContext.Provider>
//   );
// }
// const useProducts = () => {
//   const products = useContext(ProductsContext);
//   return products;
// };

// const useProductDetails = (id) => {
//   const products = useContext(ProductsContext);
//   const result = products.find((item) => item.id === id);
//   return result;
// };
// export default ProductsProvider;
// export { useProducts ,useProductDetails};
