import { storyblokEditable } from "@storyblok/react";

const Blogs = ({ blok }) => (
  <section
    {...storyblokEditable(blok)}
    className="p-6 max-w-3xl mx-auto sm:p-8 lg:p-10"
  >
    {blok.image && (
      <img
        src={blok.image.filename}
        alt={blok.image.alt || "Blog image"}
        className="mb-6 w-full rounded-lg object-cover"
      />
    )}
    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center font-mono break-words">
      {blok.name}
    </h2>
    {blok.description && (
      <p className="text-center text-gray-700 text-sm sm:text-base md:text-lg font-mono leading-relaxed">
        {blok.description}
      </p>
    )}
  </section>
);

export default Blogs;
