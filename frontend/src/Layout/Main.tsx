import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar.tsx";
import "../App.css";
import Footer from "../components/Footer.tsx";
export default function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
