import { storyblokEditable } from "@storyblok/react";


const Testimonial = ({ blok }) => (
	<section {...storyblokEditable(blok)} className="flex flex-col items-center justify-center py-8">
		<div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl shadow-lg p-8 max-w-xl w-full">
			<blockquote className="italic text-xl text-center text-gray-800 mb-4">“{blok.quote}”</blockquote>
			<p className="text-right font-semibold text-gray-700">- {blok.author}</p>
		</div>
	</section>
);

export default Testimonial;
