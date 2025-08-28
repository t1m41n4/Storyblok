import { storyblokEditable } from "@storyblok/react";

const Teaser = ({ blok }) => (
  <section {...storyblokEditable(blok)} className="mb-12 px-4 font-mono">
    <h2 className="text-lg sm:text-xl md:text-2xl mb-3 font-bold">
      {blok.headline}
    </h2>
    {blok.description && (
      <p className="text-sm sm:text-base text-gray-700">
        {blok.description}
      </p>
    )}
  </section>
);

export default Teaser;
