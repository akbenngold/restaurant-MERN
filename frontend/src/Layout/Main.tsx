import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
export default function Main() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <footer>FOOTER</footer>
    </div>
  );
}
