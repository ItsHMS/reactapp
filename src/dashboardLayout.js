import { BrowserRouter, Link, Route, Routes,Outlet } from "react-router-dom";
import Dashboard from "./pages/dashboard/dasboard";
import Profile from "./pages/dashboard/profile";
const DashboardLayout = () => {
  return (
    <div>
      <Link to="/dashboard">Dashboard</Link>
      <br />
      <Link to="/dashboard/profile">Profile</Link>
      <br />
      <Outlet />
    </div>
  );
};
export default DashboardLayout;
