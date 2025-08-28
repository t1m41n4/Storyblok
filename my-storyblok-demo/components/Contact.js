import { storyblokEditable } from "@storyblok/react";

const Contact = ({ blok }) => (
  <section {...storyblokEditable(blok)} className="max-w-2xl mx-auto my-16 p-6 bg-green-50 rounded-xl shadow-md font-mono">
    <h2 className="text-xl font-bold mb-4">{blok.title}</h2>
    {blok.description && (
      <p className="text-sm text-gray-700 mb-6">{blok.description}</p>
    )}
    <div className="flex flex-col gap-2 mt-4">
      {blok.email && (
        <div className="text-sm text-gray-700">
          <span className="font-bold">Email:</span> {blok.email}
        </div>
      )}
      {blok.phone && (
        <div className="text-sm text-gray-700">
          <span className="font-bold">Phone:</span> {blok.phone}
        </div>
      )}
    </div>
  </section>
);

export default Contact;
