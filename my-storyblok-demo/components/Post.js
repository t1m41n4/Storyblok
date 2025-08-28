import { storyblokEditable } from "@storyblok/react";


const Post = ({ blok }) => (
  <section {...storyblokEditable(blok)} className="py-10 px-10">
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg p-10 max-w-full mx-0">
      {blok.image && (
        <div className="w-full md:w-1/3 flex items-stretch">
          <img
            src={blok.image.filename}
            alt={blok.image.alt || "Post image"}
            className="w-full object-cover rounded-l-xl md:rounded-r-none rounded-t-xl md:rounded-t-none"
          />
        </div>
      )}
      <div className="w-full md:w-2/3 flex flex-col justify-start py-8 h-full">
        <div className="flex flex-col h-full justify-between">
          <h3 className="text-2xl font-bold mb-4 text-gray-900">{blok.title}</h3>
          {blok.description && (
            <p className="text-gray-700 text-sm leading-relaxed font-mono">{blok.description}</p>
          )}
        </div>
      </div>
    </div>
  </section>
);

export default Post;