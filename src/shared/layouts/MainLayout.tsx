import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-backgorund text-foreground">
      <main className="pt-16">
      <Navigation />
        <Outlet />
      </main>
    </div>
  );
}