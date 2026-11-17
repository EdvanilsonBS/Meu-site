import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}