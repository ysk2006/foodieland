import { Outlet } from "react-router";
import Header from "@/components/layout/header/Header";

function RootLayout() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
