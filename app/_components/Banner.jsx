"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Silk from '/components/magicui/Silk';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative overflow-hidden h-screen">
      {/* Silk Shader Background */}
      <div className="absolute inset-0 -z-10">
        <Silk
          speed={5}
          scale={1}
          color="#F08080"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>

      {/* Swiper Content */}
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
          <div className="container mx-auto px-6 py-24 min-h-screen flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white drop-shadow-xl space-y-6"
            >
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
                Welcome to Real Home Contracting
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto">
                Real Homes is your trusted partner in the dynamic world of real estate in Ajman. As one of the leading real estate agencies in the region, we are committed to providing exceptional services that go beyond traditional transactions. With extensive knowledge and dedication, we strive to deliver the best.
              </p>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
