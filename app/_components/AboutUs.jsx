"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Aurora from "/components/magicui/Aurora";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AboutUs = () => {
  return (
    <div id="about" className="relative w-full py-20 px-6 overflow-hidden bg-black">
      {/* Aurora Background */}
      <div className="absolute inset-0 z-0">
        <Aurora
          colorStops={["#F08080", "black", "#FF3232"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Large White Text Directly Over Background */}
        <div className="space-y-6 px-4 md:px-0">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            About Us
          </h2>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-3xl">
            At <strong className="font-semibold text-white">REAL HOME BUILDING CONTRACTING L.L.C</strong>, we specialize in bringing your dream home to life in the vibrant city of Ajman. With years of experience and a commitment to quality, we offer unparalleled construction services tailored to meet your unique needs and preferences. Our expertise encompasses residential and commercial projects, ensuring top-notch craftsmanship and innovative design.
            <br /><br />
            From initial planning and architecture to project management and final construction, we provide a comprehensive solution for all your building requirements. Trust us to construct not just homes, but lasting landmarks of excellence and reliability.
          </p>
        </div>

        {/* Right: Image Slider */}
        <div className="max-w-md w-full mx-auto rounded-2xl overflow-hidden shadow-xl">
          <Swiper
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="/images/house.jpeg"
                alt="About slide 1"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/house2.jpeg"
                alt="About slide 2"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/House3.jpeg"
                alt="About slide 3"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
