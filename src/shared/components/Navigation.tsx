import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b bg-nav/65 text-foreground backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <NavLink
          to="/"
          className="text-xl font-bold"
        >
          Mario Suarez Art Studio
        </NavLink>

        <div className="flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "ffont-semibold text-nav-active"
                : "text-nav-text/80 transition-colors hover:text-nav-active"
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/galeria"
            className={({ isActive }) =>
              isActive
                ? "ffont-semibold text-nav-active"
                : "text-nav-text/80 transition-colors hover:text-nav-active"
            }
          >
            Galería
          </NavLink>

          <NavLink
            to="/sobre-mi"
            className={({ isActive }) =>
              isActive
                ? "ffont-semibold text-nav-active"
                : "text-nav-text/80 transition-colors hover:text-nav-active"
            }
          >
            Sobre mí
          </NavLink>

          <NavLink
            to="/servicios"
            className={({ isActive }) =>
              isActive
                ? "ffont-semibold text-nav-active"
                : "text-nav-text/80 transition-colors hover:text-nav-active"
            }
          >
            Servicios
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive
                ? "ffont-semibold text-nav-active"
                : "text-nav-text/80 transition-colors hover:text-nav-active"
            }
          >
            Contacto
          </NavLink>

        </div>

      </div>

    </nav>
  );
}