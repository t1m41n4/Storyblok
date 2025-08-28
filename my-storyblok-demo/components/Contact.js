import { storyblokEditable } from "@storyblok/react";

const Contact = ({ blok }) => (
  <section
    id="contact"
    {...storyblokEditable(blok)}
    className="w-full max-w-5xl mx-auto my-16 p-6 sm:p-8 bg-green-50 rounded-xl shadow-md font-mono"
  >
    <h2 className="text-xl sm:text-2xl font-bold mb-4">{blok.title}</h2>
    {blok.description && (
      <p className="text-sm sm:text-base text-gray-700 mb-6">
        {blok.description}
      </p>
    )}
    <div className="flex flex-col sm:flex-row gap-3 sm:gap-12 mt-4 justify-center items-center">
      {blok.email && (
        <div className="text-sm sm:text-base text-gray-700 flex items-center">
          <span className="font-bold mr-1">Email:</span> {blok.email}
        </div>
      )}
      {blok.phone && (
        <div className="text-sm sm:text-base text-gray-700 flex items-center">
          <span className="font-bold mr-1">Phone:</span> {blok.phone}
        </div>
      )}
    </div>
  </section>
);

export default Contact;
