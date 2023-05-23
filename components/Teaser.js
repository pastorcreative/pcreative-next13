import { storyblokEditable } from "@storyblok/react";
 
const Teaser = ({ blok }) => {
  return <h2 className="text-2xl lg:text-3xl text-cyan-300 font-mono font-bold mb-4" {...storyblokEditable(blok)}>{blok.headline}</h2>;
};
 
export default Teaser;