import { storyblokEditable } from "@storyblok/react";

const Blogs = ({ blok }) => (
  <section {...storyblokEditable(blok)} className="p-6 max-w-2xl mx-auto">
    {blok.image && (
      <img
        src={blok.image.filename}
        alt={blok.image.alt || "Blog image"}
        className="mb-4 w-full rounded-lg"
      />
    )}
  <h2 className="text-xl font-bold mb-2 text-center font-mono text-sm">{blok.name}</h2>
  {blok.description && <p className="mb-4 text-center font-mono text-sm">{blok.description}</p>}
  </section>
);

export default Blogs;