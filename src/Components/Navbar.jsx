import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-purple-400 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Brand */}
        <h1 className="text-xl font-bold">MyWebsite</h1>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          <Link to="/" className="hover:text-gray-200">Home</Link>
          <Link to="/about" className="hover:text-gray-200">About</Link>
          <Link to="/contact" className="hover:text-gray-200">Contact</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
         {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-purple-200 flex flex-col">
          <Link to="/" className="px-4 py-2 hover:bg-purple-500">Home</Link>
          <Link to="/about" className="px-4 py-2 hover:bg-purple-500">About</Link>
          <Link to="/contact" className="px-4 py-2 hover:bg-purple-500">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
