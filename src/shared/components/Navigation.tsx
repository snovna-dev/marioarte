import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-sm">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <NavLink
          to="/"
          className="text-xl font-bold"
        >
          Mario Arte
        </NavLink>

        <div className="flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold"
                : "text-gray-600 hover:text-black"
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/galeria"
            className={({ isActive }) =>
              isActive
                ? "font-semibold"
                : "text-gray-600 hover:text-black"
            }
          >
            Galería
          </NavLink>

          <NavLink
            to="/sobre-mi"
            className={({ isActive }) =>
              isActive
                ? "font-semibold"
                : "text-gray-600 hover:text-black"
            }
          >
            Sobre mí
          </NavLink>

          <NavLink
            to="/servicios"
            className={({ isActive }) =>
              isActive
                ? "font-semibold"
                : "text-gray-600 hover:text-black"
            }
          >
            Servicios
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? "font-semibold"
                : "text-gray-600 hover:text-black"
            }
          >
            Contacto
          </NavLink>

        </div>

      </div>

    </nav>
  );
}