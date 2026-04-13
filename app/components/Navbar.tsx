"use client";

import { useState } from "react";
import { Upload, Zap } from "lucide-react";
import "../styles/navbar.css"; // ajustá el path si es necesario

const links = ["Inicio", "Explorar", "En vivo", "Ranking", "Comunidad"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Logo */}
        <div className="nav-logo">
          <div className="nav-logo-icon">
            <Zap size={20} color="white" fill="white" />
          </div>
          <span className="nav-brand">TalentStream</span>
        </div>

        {/* Links desktop */}
        <div className="nav-links">
          {links.map((l) => (
            <button key={l} className="nav-link">{l}</button>
          ))}
        </div>

        {/* CTA desktop */}
        <div className="nav-cta">
          <button className="btn-ghost">Iniciar sesión</button>
          <button className="btn-upload">
            <Upload size={13} />
            Subir talento
          </button>
        </div>

        {/* Hamburger mobile */}
        <button
          className={`nav-hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Menú desplegable mobile */}
      <div className={`nav-mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map((l) => (
          <button
            key={l}
            className="nav-mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {l}
          </button>
        ))}
        <div className="nav-mobile-cta">
          <button className="btn-ghost">Iniciar sesión</button>
          <button className="btn-upload">
            <Upload size={13} />
            Subir talento
          </button>
        </div>
      </div>
    </>
  );
}