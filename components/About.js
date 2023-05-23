import { storyblokEditable, renderRichText } from "@storyblok/react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About({ blok }) {
    console.log(blok)
    const url = blok.Image.filename;
    const dimensions = {
        width: url.split('/')[5].split('x')[0],
        height: url.split('/')[5].split('x')[1]
    } 
    const renderedRichText = renderRichText(blok.Text);

  return (
  <div className="relative overflow-hidden py-8 lg:py-16 lg:mt-24">
    <div className="container flex flex-col lg:flex-row items-center">
    <div className="w-full xl:w-1/2">
      <motion.h2
        initial={{ 
          opacity: 0, y: 20 }}
        animate={{
          opacity: 1, y: 0 }}
        transition={{
          duration: 0.5 }}
        exit={{
          opacity: 0, y: 20 }}

        className="order-2 lg:order-1 mb-4 flex flex-col items-start text-center lg:text-left" {...storyblokEditable(blok)}>
          <span className="text-3xl lg:text-4xl text-cyan-300 font-mono">{blok.Heading}</span>
      </motion.h2>
      <div className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{__html: renderedRichText}}></div>
    </div>
    </div>

    <Image className="order-1 sm:hidden xl:block xl:top-0 xl:right-0 xl:absolute w-full max-w-2xl lg:transform mb-4 object-contain" src={blok.Image.filename} width={dimensions.width} height={dimensions.height} alt={blok.Image.alt} priority={true}/>
  </div>
  );
};
