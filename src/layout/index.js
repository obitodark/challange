import { Outlet } from "react-router-dom";
import { ViewNavBar } from "../components";

const Layout = () => {
  return (
    <div>
      <ViewNavBar>
        <Outlet />
      </ViewNavBar>
    </div>
  );
};
export default Layout;
