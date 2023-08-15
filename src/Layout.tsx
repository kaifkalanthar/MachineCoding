import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="p-5 bg-primary ">
        <h1 className="font-bold text-3xl text-center">Machine Coding</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
