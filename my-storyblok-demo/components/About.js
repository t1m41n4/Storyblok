import { storyblokEditable } from "@storyblok/react";

const About = ({ blok }) => (
  <section
    id="about"
    {...storyblokEditable(blok)}
    className="w-full py-10 bg-blue-50 rounded-xl shadow-lg mb-16 flex flex-col items-center px-4"
  >
    <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
      {blok.title}
    </h2>
    {blok.image && (
      <img
        src={blok.image.filename}
        alt={blok.image.alt || "About image"}
        className="mx-auto mb-6 w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-blue-200"
      />
    )}
    {blok.description && (
      <p className="text-gray-700 max-w-2xl mx-auto text-sm sm:text-base md:text-lg font-mono leading-relaxed text-justify">
        {blok.description}
      </p>
    )}
  </section>
);

export default About;
