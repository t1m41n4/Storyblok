import { storyblokEditable } from "@storyblok/react";

const Post = ({ blok }) => (
  <section {...storyblokEditable(blok)} className="py-10 px-4 sm:px-8">
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden">
      {blok.image && (
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src={blok.image.filename}
            alt={blok.image.alt || "Post image"}
            className="w-full h-60 md:h-full object-cover"
          />
        </div>
      )}
      <div className="w-full md:w-2/3 flex flex-col justify-center p-6 sm:p-8">
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">
          {blok.title}
        </h3>
        {blok.description && (
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-mono">
            {blok.description}
          </p>
        )}
      </div>
    </div>
  </section>
);

export default Post;
