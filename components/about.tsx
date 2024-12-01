"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView("About");

  
  return (
    <motion.section 
        ref={ref}
        className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
        initial={{opacity: 0, y:100}}
        animate= {{opacity: 1, y:0}}
        transition={{ delay: 0.175}}
        id="about"
        
    >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
        I'm currently studying Computer Science at NYU, minoring in Mathematics and Business Studies. 
        After experimenting with computer science in high school,{" "}
        I decided to pursue my
        passion for programming. I am always looking to
        learn new technologies, and have worked on many projects with many people over the years. 
        I am currently looking for an{" "}
        <span className="font-medium">internship</span> as a software
        engineer.
        </p>
        <p>
        <span className="italic">When I'm not coding</span>, I enjoy thrifting, finding new cafes, and exploring 
        New York City!
        </p>
    </motion.section>
  )
}
