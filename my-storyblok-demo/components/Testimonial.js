
import { storyblokEditable } from "@storyblok/react";

const Testimonial = ({ blok }) => (
	<div className="testimonial" {...storyblokEditable(blok)}>
		<blockquote>"{blok.quote}"</blockquote>
		<p>- {blok.author}</p>
	</div>
);

export default Testimonial;
