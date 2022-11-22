import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout";
import { PageHome } from "../pages";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PageHome />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
