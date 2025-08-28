import { storyblokEditable } from "@storyblok/react";


const Testimonial = ({ blok }) => (
	<section {...storyblokEditable(blok)} className="flex flex-col items-center justify-center py-8">
		<div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl shadow-lg p-8 max-w-xl w-full">
			<h2>{blok.title}</h2>
			<p>{blok.description}</p>
			<blockquote>“{blok.quote}”</blockquote>
			<p>- {blok.author}</p>
		</div>
	</section>
);

export default Testimonial;
