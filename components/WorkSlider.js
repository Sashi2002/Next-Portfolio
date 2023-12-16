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
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
        {
          title: "title",
          path: "/thumb4.jpg",
        },
      ],
    },
    {
      images: [
        {
          title: "title",
          path: "/thumb4.jpg",
        },
        {
          title: "title",
          path: "/thumb1.jpg",
        },
        {
          title: "title",
          path: "/thumb2.jpg",
        },
        {
          title: "title",
          path: "/thumb3.jpg",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  // const [slidesPerView, setSlidesPerView] = useState(3);
  // useEffect(() => {
  //   // Function to update slidesPerView based on screen width
  //   const handleResize = () => {
  //     const newSlidesPerView = window.innerWidth <= 767 ? 1 : 3;
  //     setSlidesPerView(newSlidesPerView);
  //   };

  //   // Set initial value of slidesPerView
  //   handleResize();

  //   // Attach the event listener to handle resize changes
  //   window.addEventListener("resize", handleResize);

  //   // Clean up the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
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
            {/* <Link
              href={items.link}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
            </Link> */}
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* images */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-80 transition-all duration-700"
                        style={{
                          backgroundImage:
                            "linear-gradient(to left, transparent, #e838cc, #4a22bd)",
                        }}
                      ></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
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
