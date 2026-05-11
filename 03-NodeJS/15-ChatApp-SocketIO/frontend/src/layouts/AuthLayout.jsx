import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="bg-[#262626]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
