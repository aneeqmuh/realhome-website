"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Aurora from "/components/magicui/Aurora";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AboutUs = () => {
  // Array of subsidiary company logos
  const subsidiaryLogos = [
    { name: "RBC", logo: "/images/RBC.png" },
    { name: "RC", logo: "/images/RC.png" },
    { name: "RFM", logo: "/images/RFM.png" },
    { name: "RG", logo: "/images/RG.png" },
    { name: "RH", logo: "/images/RH.png" },
    { name: "RV", logo: "/images/RV.png" }
  ];

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
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
          {/* Left: Large White Text Directly Over Background */}
          <div className="space-y-6 px-4 md:px-0">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
              About Us
            </h2>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light max-w-3xl">
              <strong className="font-semibold text-white">Real Group</strong> has been a cornerstone of excellence in Ajman, UAE since 2011. As a diversified conglomerate, we pride ourselves on delivering exceptional services across multiple sectors through our specialized subsidiaries.
              <br /><br />
              <strong className="font-semibold text-white">Real Home Building Contracting L.L.C</strong>, one of our flagship companies, specializes in transforming architectural visions into reality. We craft dream homes, luxurious villas, and innovative commercial spaces with meticulous attention to detail and unwavering commitment to quality.
              <br /><br />
              From conceptual design to final construction, our comprehensive approach ensures that every project reflects our legacy of excellence, innovation, and reliability that Real Group has established over the years.
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

        {/* Real Group Companies Section */}
        <div className="mt-20">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">
            Real Group Companies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-center">
            {subsidiaryLogos.map((company, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex items-center justify-center hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="h-16 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;