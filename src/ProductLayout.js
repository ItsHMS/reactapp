import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import Products from "./pages/product/products";
import ProductDetails from "./pages/product/productDetail";

const ProductLayout = () => {
  return (
    <div>
      <Link to="/products">products</Link>
      <br />
      <Link to="/products/productsdetail">productsdetail</Link>
      <br />

      <Outlet />
    </div>
  );
};

export default ProductLayout;
