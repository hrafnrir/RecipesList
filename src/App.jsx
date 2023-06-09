import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout.jsx";
import { Home as HomePage } from "./pages/Home.jsx";
import { Recipe as RecipePage } from "./pages/Recipe.jsx";
import { NotFound as NotFoundPage } from "./pages/NotFound.jsx";
import ImagePopup from "./components/Popup/ImagePopup.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="recipes/:id" element={<RecipePage />}>
        <Route path="picture" element={<ImagePopup />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
