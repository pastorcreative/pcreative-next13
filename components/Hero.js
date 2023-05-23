import { storyblokEditable } from "@storyblok/react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = ({ blok }) => {

    const url = blok.image.filename;
    const dimensions = {
        width: url.split('/')[5].split('x')[0],
        height: url.split('/')[5].split('x')[1]
      }

  return (
  <div className="container flex flex-col lg:flex-row items-center justify-between py-8 lg:py-24 lg:h-[50vh]">
    
    <motion.h1 
      initial={{ 
        opacity: 0, y: 20 }}
      animate={{
        opacity: 1, y: 0 }}
      transition={{
        duration: 0.5 }}
      exit={{
        opacity: 0, y: 20 }}

      className="order-2 lg:order-1 mb-4 flex flex-col items-center lg:items-start text-center lg:text-left" {...storyblokEditable(blok)}>
        <span className="font-mono text-white text-5xl lg:text-8xl">{blok.subheading}</span>
        <span className="text-2xl lg:text-6xl text-cyan-300 font-mono">{blok.heading}</span>
    </motion.h1>  
    <motion.div 
      className="order-1 lg:order-2 "
      animate={{
        opacity: 1, y: 0 ,scale:1}}
      transition={{
        duration: 0.5 }}
      initial={{
        opacity: 0, y: 20, scale:0.5 }}
      >
    <Image className="w-full max-w-md rounded-full mb-4 object-contain" src={blok.image.filename} width={dimensions.width} height={dimensions.height} alt={blok.image.alt} />
    </motion.div>
  </div>
  );
};
 
export default Hero;