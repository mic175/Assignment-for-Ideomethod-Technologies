import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

/**
 * React version of your header.
 * - Fixed header style comes from your global CSS targeting <header>
 * - Mobile menu is handled by React state instead of querySelector
 * - Links use <NavLink>/<Link> for client-side routing (no page reload)
 */
export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Close the mobile menu when route changes (optional nicety)
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("hashchange", close);
    window.addEventListener("popstate", close);
    return () => {
      window.removeEventListener("hashchange", close);
      window.removeEventListener("popstate", close);
    };
  }, []);

  return (
    <header>
      <nav className="container">
        <Link to="/" className="logo">⚓ LuxYacht</Link>

        {/* Desktop / Mobile links. CSS hides .nav-links on small screens */}
        <ul
          className="nav-links"
          style={{ display: open ? "flex" : undefined, flexDirection: open ? "column" : undefined }}
        >
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/fleet">Rent A Yacht</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <Link to="/contact" className="cta-button">Book Now</Link>

        {/* Mobile menu button (only visible on small screens by your CSS) */}
        <button
          className="mobile-menu-btn"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>
      </nav>
    </header>
  );
}
