import { Link, Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <div className="p-5 bg-primary ">
        <Link to="/">
          <h1 className="font-bold text-3xl text-center">Machine Coding</h1>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
