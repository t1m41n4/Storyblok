import { storyblokEditable } from "@storyblok/react";


const Header = ({ blok }) => (
  <header {...storyblokEditable(blok)} className="w-full py-10 bg-gradient-to-r from-blue-100 to-purple-100 mb-10 shadow-md rounded-lg font-mono">
  <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 tracking-tight mb-2 drop-shadow-lg font-mono">{blok.title}</h1>
    {blok.description && (
  <p className="text-left text-gray-700 text-lg md:text-xl max-w-2xl mx-auto mt-4 font-mono text-justify">{blok.description}</p>
    )}
  </header>
);

export default Header