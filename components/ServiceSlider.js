import Link from "next/link";
import React, { useState, useEffect } from "react";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowRight,
} from "react-icons/rx";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";

// data
const serviceData = [
  {
    icon: <RxRocket />,
    title: "Soshals",
    description:
      "Developed a dynamic portfolio section, empowering content creators to craft captivating portfolios.",
    link: "https://soshals.app/login",
  },
  {
    icon: <RxDesktop />,
    title: "Aaruush 23",
    description:
      "Worked on Aaruush's events portal and assisted in technical hackathons, workshops and teachbot.",
    link: "https://aaruush.org/",
  },
  {
    icon: <RxPencil2 />,
    title: "NSK Rane",
    description:
      "Implemented automated monthly table generation and developed robust APIs to integrate databases.",
    link: "https://github.com/Sashi2002/Staff-Tracking-Backend",
  },
  {
    icon: <RxReader />,
    title: "T-summit",
    description:
      "Developed a web app for Technical Summit where colleges gather for a round table conference.",
    link: "https://tsummit.aaruush.org/",
  },
  {
    icon: <RxCrop />,
    title: "Directorate of Alumini Affairs",
    description:
      "Developed recruitment portal and assisted to maintain the database of alumni.",
    link: "https://daa-recr-23.vercel.app/",
  },
];

const ServiceSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);
  useEffect(() => {
    // Function to update slidesPerView based on screen width
    const handleResize = () => {
      const newSlidesPerView = window.innerWidth <= 767 ? 1 : 3;
      setSlidesPerView(newSlidesPerView);
    };

    // Set initial value of slidesPerView
    handleResize();

    // Attach the event listener to handle resize changes
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <Swiper
      slidesPerView={slidesPerView}
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
        delay: 2500,
        disableOnInteraction: true,
      }}
      // pagination={true}
      modules={[Autoplay, EffectCoverflow, Pagination]}
      className="h-[240px] sm:h-[348px]"
    >
      {serviceData.map((items, index) => {
        return (
          <SwiperSlide key={index}>
            <Link
              href={items.link}
              passHref
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
                {/* icons */}
                <div className="tex-4xl text-accent mb-4">{items.icon}</div>
                {/* title & desc */}
                <div className="mb-8">
                  <div className="mb-2 text-lg">{items.title}</div>
                  <p className="max-w-[350px] leading-normal">
                    {items.description}
                  </p>
                </div>
                {/* arrow */}
                <div className="text-3xl">
                  <RxArrowRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
                </div>
              </div>
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
