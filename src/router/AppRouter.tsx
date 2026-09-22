import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { GalleryPage } from "../pages/GalleryPage";
import { HomePage } from "../pages/HomePage";
import MainLayout from "../shared/layouts/MainLayout";


export function AppRouter() {
  return (
    <MemoryRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/galeria"
            element={<GalleryPage />}
          />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}