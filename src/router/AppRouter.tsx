import {
  MemoryRouter,
  Routes,
  Route,
} from "react-router-dom";
import { GalleryPage } from "../pages/GalleryPage";
import { HomePage } from "../pages/HomePage";
import MainLayout from "../shared/layouts/MainLayout";
import { AboutPage } from "../pages/AboutPage";
import ServicesPage from "../pages/ServicesPage";
import ContactPage from "../pages/ContactPage";


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

          <Route
            path="/sobre-mi"
            element={<AboutPage />}
          />

          <Route
            path="/servicios"
            element={<ServicesPage />}
          />

          <Route
            path="/contacto"
            element={<ContactPage />}
          />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}