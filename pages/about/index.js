import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiExpress,
  SiSqlite,
  SiMongodb,
} from "react-icons/si";

// import { CiCplusplus } from "react-icons";

import { SiTypescript } from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Languages",
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="js" />,
          <SiTypescript key="typescript" />,
          <FaPython key="python" />,
          <FaJava key="java" />,
        ],
      },
      {
        title: "Libraries/Frameworks",
        icons: [
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <FaNodeJs key="nodejs" />,
          <SiExpress key="express" />,
          <SiFramer key="framer" />,
        ],
      },
      {
        title: "Databases",
        icons: [<SiSqlite key="sqlite" />, <SiMongodb key="mongodb" />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      {
        title: "JPMC Code for <good> Hackathon - Winner",
        stage: "Jun 2024",
      },
      {
        title: "Kodekshetra Hackathon - Runner Up",
        stage: "Apr 2023",
      },
      {
        title: "Smart India Hackathon - Top 30",
        stage: "Sept 2023",
      },
      {
        title: "SRM Smart Campus Hackathon - Finalist",
        stage: "Mar 2023",
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full-stack Development Intern - Soshals",
        stage: "Aug 2023 - Feb 2024",
      },
      {
        title: "Web Developer Intern - DIYA Robotics",
        stage: "Jun 2023 - Jul 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "SQL for Developers, Data Analysts - Udemy",
        stage: "Jul 2024",
      },
      {
        title: "Developing Back-End with Node.js and Express - Coursera",
        stage: "Nov 2023",
      },
      {
        title: "Ethical Hacking - NPTEL",
        stage: "Oct 2023",
      },
      {
        title: "Introduction to DevOps - Coursera",
        stage: "Oct 2023",
      },
      {
        title: "AWS Academy Cloud Foundation - AWS Academy",
        stage: "Sept 2023",
      },
      {
        title: "JavaScript by Jonas Schmedtmann - UDEMY",
        stage: "Aug 2023",
      },
      {
        title: "The Joy of Computing using Python - NPTEL",
        stage: "May 2023",
      },
      {
        title: "Programming in Java - NPTEL",
        stage: "Apr 2023",
      },
      {
        title: "Networking Essentials - CISCO",
        stage: "Mar 2023",
      },
      {
        title: "Bootcamp on JavaScript & React.Js - Devtown",
        stage: "Jan 2023",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

//counters
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[210px]"
      >
        <Avatar />
      </motion.div>
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 about-scroll">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2
            className="h2"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            {/* Crafting dazzling <span className="text-accent">designs</span> from
            captivating <span className="text-accent">stories.</span> */}
            <span className="text-accent">About.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 xl:mb-12 px-2 xl:px-0"
          >
            Student at SRMIST, passionate Front-end Developer shaping digital
            experiences. Proudly contributing code as a Developer at Soshals.
            Former Intern at DIYA Labs, where I honed my skills in the realm of
            technology and innovation. <br />
            🚀 #TechEnthusiast
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 "
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={12} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Months of experience
                </div>
              </div>
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent">
                  <CountUp start={0} end={1} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Winning Awards
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] "
        >
          <div className="mt-2">
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
              {aboutData.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              ))}
            </div>
            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
              {aboutData[index].info.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => (
                      <div key={iconIndex} className="text-2xl text-white">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
