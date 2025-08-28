
import { useState } from "react";
import { storyblokEditable } from "@storyblok/react";

const Header = ({ blok }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      {...storyblokEditable(blok)}
      className="w-full py-10 sm:py-14 bg-gradient-to-r from-blue-100 to-purple-100 mb-10 shadow-md rounded-lg font-mono px-4"
    >
      {/* Nav at the top right */}
      <div className="flex justify-end items-center w-full mb-6">
        {/* Hamburger menu for mobile */}
        <div className="sm:hidden">
          <button
            className="p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Open navigation menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <svg
              className="w-7 h-7 text-blue-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Desktop nav menu */}
        <nav className="gap-8 hidden sm:flex">
          <a href="#blog" className="hover:underline text-blue-700 font-semibold">Blog</a>
          <a href="#post" className="hover:underline text-blue-700 font-semibold">Post</a>
          <a href="#about" className="hover:underline text-blue-700 font-semibold">About</a>
          <a href="#contact" className="hover:underline text-blue-700 font-semibold">Contact</a>
        </nav>
      </div>
      {/* Mobile nav menu (dropdown) */}
      {menuOpen && (
        <nav className="flex flex-col items-end gap-4 mb-4 sm:hidden animate-fade-in">
          <a href="#blog" className="hover:underline text-blue-700 font-semibold" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="#post" className="hover:underline text-blue-700 font-semibold" onClick={() => setMenuOpen(false)}>Post</a>
          <a href="#about" className="hover:underline text-blue-700 font-semibold" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" className="hover:underline text-blue-700 font-semibold" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      )}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-900 tracking-tight mb-4 drop-shadow-lg">
        {blok.title}
      </h1>
      {blok.description && (
        <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mt-4 text-justify">
          {blok.description}
        </p>
      )}
    </header>
  );
};

export default Header;
