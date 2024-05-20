import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import DetailsPage from "./pages/DetailsPage";
import Checkout from "./pages/checkout";
import PageNotfound from "./pages/404";
// import ProductsProvider from "./context/ProductsContext";
// import CartProvider from "./context/cartContext";
import Layout from "./Layout/layout"

function App() {
  return (
    // <CartProvider>
      // <ProductsProvider>
        <Layout>
        <Routes>
          <Route index element={<Navigate replace to="/products" />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<DetailsPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<PageNotfound />} />
        </Routes>
        </Layout>
      // </ProductsProvider>
    // </CartProvider>
  );
}

export default App;
