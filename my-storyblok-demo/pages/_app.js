import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Testimonial from "../components/Testimonial";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Post from "../components/Post";
import About from "../components/About";
import Contact from "../components/Contact";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  testimonial: Testimonial,
  header: Header,
  blogs: Blogs,
  post: Post,
  about: About,
  contact: Contact,
};

storyblokInit({
  accessToken: 'wNwo90WQrcT0pQ74YvyFywtt',
  use: [apiPlugin],
  components,
  apiOptions: {
    region: ''
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
