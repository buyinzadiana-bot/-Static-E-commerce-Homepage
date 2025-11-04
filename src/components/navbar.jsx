import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left: Brand */}
          <div className="flex items-center gap-3">
            <Link to="/" className="text-2xl font-bold text-pink-600">CHIC BOUTIQUE
            </Link>
            <p className="text-sm text-gray-500 hidden sm:block">Beautiful finds</p>
          </div>

          {/* Right: Nav */}
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link to="/" className="text-sm hover:text-pink-600">Home</Link>
              <Link to="/products" className="text-sm hover:text-pink-600">Products</Link>
              <Link to="/about" className="text-sm hover:text-pink-600">About</Link>
              <Link to="/contact" className="text-sm hover:text-pink-600">Contact</Link>
              <Link to="/cart" className="text-sm hover:text-pink-600">Cart</Link>
            </nav>

            <button
              onClick={() => navigate("/products")}
              className="hidden sm:inline-block px-3 py-2 bg-pink-600 text-white rounded hover:bg-pink-700"
            >
              Shop Now
            </button>

            {/* mobile hamburger */}
            <div className="md:hidden">
              <MobileMenu navigate={navigate} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function MobileMenu({ navigate }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded-md bg-gray-100"
        aria-label="menu"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow p-2">
          <button className="block w-full text-left py-1" onClick={() => { navigate("/"); setOpen(false); }}>Home</button>
          <button className="block w-full text-left py-1" onClick={() => { navigate("/products"); setOpen(false); }}>Products</button>
          <button className="block w-full text-left py-1" onClick={() => { navigate("/about"); setOpen(false); }}>About</button>
          <button className="block w-full text-left py-1" onClick={() => { navigate("/contact"); setOpen(false); }}>Contact</button>
          <button className="block w-full text-left py-1" onClick={() => { navigate("/cart"); setOpen(false); }}>Cart</button>
        </div>
      )}
    </div>
  );
}
