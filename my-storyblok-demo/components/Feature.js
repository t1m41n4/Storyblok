import { storyblokEditable } from "@storyblok/react";

const Feature = ({ blok }) => (
  <section {...storyblokEditable(blok)} className="mb-12 font-mono">
    <div className="column feature">
      {blok.name}
    </div>
  </section>
);

export default Feature;
