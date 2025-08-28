import { getStoryblokApi, StoryblokComponent, useStoryblokState } from "@storyblok/react";

export default function DynamicPage({ story }) {
  story = useStoryblokState(story);
  if (!story) return <div>Not found</div>;
  return <StoryblokComponent blok={story.content} />;
}

export async function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const slug = params.slug ? params.slug.join("/") : "home";
  const sbParams = { version: "draft" };
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);

  return {
    props: {
      story: data ? data.story : null,
    },
    revalidate: 3600,
  };
}
