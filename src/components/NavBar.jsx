"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        {/* Logo */}
        <h1 className="text-xl font-bold text-white">Easin.dev</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="hover:text-cyan-400 transition">
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black text-white px-5 pb-5 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-gray-700 pb-2"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
