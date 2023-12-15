import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
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
        stage: "Aug 2023 - Present",
      },
      {
        title: "Web Developer Intern - DIYA Robotics",
        stage: "Jun 2023 - Sept 2023",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "Back-End Apps with Node.js and Express - Coursera",
        stage: "Nov 2023",
      },
      {
        title: "AWS Academy Cloud Foundation - AWS Academy",
        stage: "Oct 2023",
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
        title: "Networking Essentials - CISCO",
        stage: "Apr 2023",
      },
      {
        title: "Bootcamp on JavaScript & React.Js - Devtown",
        stage: "Jan 2023",
      },
      {
        title: "Object Oriented Programming - Elab",
        stage: "Nov 2022",
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
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center ">
          <motion.h2
            className="h2"
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Crafting dazzling <span className="text-accent">designs</span> from
            captivating <span className="text-accent">stories.</span>
          </motion.h2>
          {/* ... (rest of your code remains unchanged) */}
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px] "
        >
          <div>
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
