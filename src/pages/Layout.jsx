import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Experiences", path: "/experiences" },
  { name: "About", path: "/about" },
  { name: "Private Transfers", path: "/private-transfers" },
  { name: "Contact", path: "/contact" },
];

function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md px-6 py-4 flex justify-between items-center shadow-sm">

        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-3 shrink-0">
          <img src={logo} alt="Ocean Blue Logo" className="h-10 lg:h-12" />
          <span className="text-deep-ocean font-bold text-xl lg:text-2xl">
            Ocean Blue
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-8 font-semibold text-deep-ocean">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors duration-300 ${
                  isActive ? "text-turquoise-horizon" : "hover:text-turquoise-horizon"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <NavLink
            to="/book-now"
            className="bg-turquoise-horizon text-pearl-white font-semibold px-6 py-2 rounded hover:bg-deep-ocean hover:text-pearl-white transition-colors duration-300"
          >
            Book Now
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} className={`text-2xl ${mobileOpen ? "text-deep-ocean" : "text-deep-ocean"}`}>
            {mobileOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <nav className="lg:hidden fixed top-0 left-0 w-full h-screen bg-deep-ocean text-pearl-white flex flex-col items-center justify-center space-y-8 z-40">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `text-2xl transition-colors duration-300 ${
                  isActive ? "text-turquoise-horizon" : "hover:text-turquoise-horizon"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/book-now"
            onClick={() => setMobileOpen(false)}
            className="bg-turquoise-horizon text-pearl-white font-semibold px-8 py-3 rounded hover:bg-deep-ocean hover:text-pearl-white transition-colors duration-300 text-lg"
          >
            Book Now
          </NavLink>
        </nav>
      )}

      {/* Main content */}
      <main className="grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-deep-ocean text-pearl-white px-6 py-12 mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-8">

          {/* Left: Footer Info */}
          <div className="lg:w-1/3">
            <p className="mb-2">&copy; {new Date().getFullYear()} Ocean Blue. All rights reserved.</p>
            <p>Contact: info@oceanblue.com | +123 456 7890</p>
          </div>

          {/* Right: Links & Socials */}
          <div className="lg:w-2/3 flex flex-col lg:flex-row justify-end gap-12">

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-2">Quick Links</h4>
              <ul className="space-y-1">
                <li>
                  <NavLink
                    to="/testimonials"
                    className="hover:text-turquoise-horizon transition-colors duration-300"
                  >
                    Testimonials
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/faq"
                    className="hover:text-turquoise-horizon transition-colors duration-300"
                  >
                    FAQ
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4 text-xl">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-turquoise-horizon transition-colors duration-300"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-turquoise-horizon transition-colors duration-300"
                >
                  <FaFacebookF />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-turquoise-horizon transition-colors duration-300"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>

    </div>
  );
}

export default Layout;