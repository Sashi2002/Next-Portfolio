import Link from "next/link";
import Image from "next/legacy/image";
import React, { useState, useEffect } from "react";

// icons
import { BsArrowRight } from "react-icons/bs";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "title",
          path: "/project1.jpg",
          link: "https://soshals.app/login",
        },
        {
          title: "title",
          path: "/project2.jpg",
          link: "https://aaruush.org/",
        },
        {
          title: "title",
          path: "/project3.jpg",
          link: "https://welfare-wave.vercel.app/",
        },
        {
          title: "title",
          path: "/project4.jpg",
          link: "https://bookies-one.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/project5.jpg",
          link: "https://humankind-nu.vercel.app/",
        },
        {
          title: "title",
          path: "/project6.jpg",
          link: "https://tsummit.aaruush.org/",
        },
        {
          title: "title",
          path: "/project7.jpg",
          link: "https://team-loading-kvjr31b5j-team-envision-2023.vercel.app/",
        },
        {
          title: "title",
          path: "/project8.jpg",
          link: "https://fintech-relay.vercel.app/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      // slidesPerView={slidesPerView}
      spaceBetween={10}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 20,
        depth: 50,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
      // pagination={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* images */}
                      <Image src={image.path} width={750} height={470} alt="" />
                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-all duration-700"
                        style={{
                          backgroundImage:
                            "linear-gradient(to left, transparent, #e838cc, #4a22bd)",
                        }}
                      ></div>
                      {/* title */}

                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-12 group-hover:xl:-translate-y-28 transition-all duration-300">
                        <Link
                          href={image.link}
                          passHref
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="delay-100"> LIVE </div>
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              {" "}
                              PROJECT{" "}
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              {" "}
                              <BsArrowRight />{" "}
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
