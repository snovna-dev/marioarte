import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function MainLayout() {
  return (
    <div className="min-h-screen">

      <Navigation />

      <main className="pt-16">
        <Outlet />
      </main>

    </div>
  );
}