"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-red-100 to-white opacity-60 z-0" />

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 30000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay]}
        className="relative z-10"
      >
        <SwiperSlide>
          <div className="container mx-auto px-6 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
              {/* Left: Animated text */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-gray-900 drop-shadow-sm">
                  Welcome to Real Home Contracting
                </h1>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-2xl">
                  Real Homes is your trusted partner in the dynamic world of real estate in Ajman. As one of the leading real estate agencies in the region, we are committed to providing exceptional services that go beyond traditional transactions. With extensive knowledge and dedication, we strive to deliver the best.
                </p>
              </motion.div>

              {/* Right: Animated image */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="flex justify-center"
              >
                <img
                  src="images/upscalemedia-transformed.jpeg"
                  alt="Real Home Visual"
                  className="w-full max-w-md rounded-xl shadow-2xl object-cover"
                />
              </motion.div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
