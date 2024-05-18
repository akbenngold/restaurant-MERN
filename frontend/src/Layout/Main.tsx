import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar.tsx";
import "../App.css";
export default function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>FOOTER</footer>
    </div>
  );
}
