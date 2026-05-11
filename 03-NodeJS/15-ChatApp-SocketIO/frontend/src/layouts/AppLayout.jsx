import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex justify-center items-center bg-[#262626]">
      <Outlet />
    </div>
  );
};
export default AppLayout;
