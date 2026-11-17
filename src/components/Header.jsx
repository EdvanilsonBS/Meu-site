import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpeg";

export default function Header() {
  return (
    <header className="header">
      <NavLink to="/" className="header-brand">
        <img src={logo} alt="Logo do Portfólio do Edi" className="header-logo" />
        <h1>Portfólio do Edi</h1>
      </NavLink>

      <nav>
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">Sobre</NavLink>
        <NavLink to="/contact">Contato</NavLink>
      </nav>
    </header>
  );
}