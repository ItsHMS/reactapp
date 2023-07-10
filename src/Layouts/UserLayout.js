import { Link, Outlet } from "react-router-dom";
const UserLayout = () => {
  return (
    <nav>
      <Link to="/user/account">Account</Link>
      <br />
      <Link to="/user/portfolio">Portfolio</Link>
      <Outlet />
    </nav>
  );
};
export default UserLayout;
