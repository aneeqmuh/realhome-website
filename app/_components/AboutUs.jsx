// src/components/AboutUs.jsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AboutUs = () => {
  return (
    <div id = "about" className="w-full py-20 px-6 bg-gradient-to-b from-red-100 to-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Heading + Paragraph */}
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 drop-shadow-md mb-6">
            About Us
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 font-light max-w-2xl">
            At <strong>REAL HOME BUILDING CONTRACTING L.L.C</strong>, we
            specialize in bringing your dream home to life in the vibrant city
            of Ajman. With years of experience and a commitment to quality, we
            offer unparalleled construction services tailored to meet your
            unique needs and preferences. Our expertise encompasses residential
            and commercial projects, ensuring top-notch craftsmanship and
            innovative design.
            <br />
            <br />
            From initial planning and architecture to project management and
            final construction, we provide a comprehensive solution for all
            your building requirements. Trust us to construct not just homes,
            but lasting landmarks of excellence and reliability.
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
            pagination={{
              clickable: true,
            }}
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
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
