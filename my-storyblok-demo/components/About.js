import { storyblokEditable } from "@storyblok/react";

const About = ({ blok }) => (
  <section {...storyblokEditable(blok)} className="w-full py-10 bg-blue-50 rounded-xl shadow-lg mb-16 flex flex-col items-center">
    <h2 className="text-2xl font-bold text-center mb-4">{blok.title}</h2>
    {blok.image && (
      <img
        src={blok.image.filename}
        alt={blok.image.alt || "About image"}
        className="mx-auto mb-4 w-40 h-40 object-cover rounded-full border-4 border-blue-200"
      />
    )}
    {blok.description && (
  <p className="text-justify text-gray-700 max-w-2xl mx-auto text-sm font-mono leading-relaxed">{blok.description}</p>
    )}
  </section>
);

export default About;