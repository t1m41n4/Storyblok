import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => (
  <section {...storyblokEditable(blok)} className="mb-12 font-mono">
  <h2 className="text-xl mb-2 font-bold">{blok.headline}</h2>
    {blok.description && (
  <p className="text-sm text-gray-700">{blok.description}</p>
    )}
  </section>
);

export default Teaser;