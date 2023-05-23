import Head from 'next/head';
import { getStoryblokApi, StoryblokComponent, useStoryblokState } from "@storyblok/react"

export default function Home(props) {

  return (
  <>
    <div className="py-8 lg:py-16">
      <StoryblokComponent blok={props.story.content} />
    </div>
  </>
  )
}

export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  let slug = "home";
 
  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
  };
 
  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams);
 
  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false,
    },
    revalidate: 3600, // revalidate every hour
  };
}
