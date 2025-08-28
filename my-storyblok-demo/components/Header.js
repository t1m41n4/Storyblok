import { storyblokEditable } from "@storyblok/react";

const Header = ({ blok }) => (
  <header
    {...storyblokEditable(blok)}
    className="w-full py-10 sm:py-14 bg-gradient-to-r from-blue-100 to-purple-100 mb-10 shadow-md rounded-lg font-mono px-4"
  >
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

export default Header;
