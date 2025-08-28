import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => (
  <section
    {...storyblokEditable(blok)}
    className="mb-12 px-4 sm:px-6 font-mono"
  >
    <div className="p-4 sm:p-6 bg-white shadow-sm rounded-lg text-center">
      <h3 className="text-base sm:text-lg md:text-xl font-semibold break-words">
        {blok.name}
      </h3>
    </div>
  </section>
);

export default Feature;
