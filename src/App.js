import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import DashboardLayout from "./dashboardLayout";
import ProductLayout from "./ProductLayout";
import Dashboard from "./pages/dashboard/dasboard";
import Profile from "./pages/dashboard/profile";
import Products from "./pages/product/products";
import ProductDetails from "./pages/product/productDetail";
import UserPortfolio from "./pages/user/PortFolio";
import Account from "./pages/user/account";
import UserLayout from "./Layouts/UserLayout";
import NoMatch from "./noMatch";
import "./App.css";
import { useState } from "react";
function App() {
  return (
    <BrowserRouter>
      <Link to="/dashboard">Dashboard</Link>
      <br />
      <Link to="/products">Products</Link>
      <br />
      <Link to="/user">User</Link>
      <br />
      <Routes>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />}></Route>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="products" element={<ProductLayout />}>
          <Route index element={<Products />}></Route>
          <Route path="productsdetail" element={<ProductDetails />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="user" element={<UserLayout />}>
          <Route index element={<Account />}></Route>
          <Route path="account" element={<Account />}></Route>
          <Route path="portfolio" element={<UserPortfolio />}></Route>
          <Route path="*" element={<NoMatch />} />
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
