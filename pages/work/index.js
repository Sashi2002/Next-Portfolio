//components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

//framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 max-md:overflow-y-scroll flex items-center ">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 xl:mt-16">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left xl:mb-0 max-md:mt-20">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2"
            >
              {/* Elevating Digital{" "}
              <span className="text-accent"> Experiences.</span> */}
              My <span className="text-accent">Projects.</span>
            </motion.h2>
            {/* subtitle */}
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-12"
            >
              Transforming complex UI designs into visually stunning and
              responsive websites, creating dynamic web experiences that make a
              lasting impact.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
