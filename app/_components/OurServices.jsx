// src/components/OurServices.jsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Beams from '/components/magicui/Beams';

const OurServices = () => {
  const services = [
    {
      title: "Custom Home Building",
      icon: "🏗️",
      description: "Whether you have a specific design in mind or need inspiration, our team of expert architects and builders will work with you to create a home that reflects your style and exceeds your expectations."
    },
    {
      title: "Renovations and Extensions",
      icon: "🔨",
      description: "Transform your existing space with our innovative renovation and extension services. We ensure seamless integration of new elements while enhancing the overall aesthetic and functionality of your home."
    },
    {
      title: "Project Management",
      icon: "📋",
      description: "From concept to completion, we handle all aspects of your building project, ensuring timely delivery and adherence to the highest standards of quality and safety."
    },
    {
      title: "Interior Design",
      icon: "🎨",
      description: "Our talented interior designers will help you create stunning and functional spaces that make your home truly unique. From modern to classic styles, including Turkish design, we can turn any vision into reality."
    },
    {
      title: "Electrical Services",
      icon: "⚡",
      description: "Our skilled electricians provide comprehensive electrical solutions, from wiring and lighting to installing advanced electrical systems, ensuring safety and efficiency in your home."
    },
    {
      title: "3D Design",
      icon: "💻",
      description: "Visualize your project with our state-of-the-art 3D design services. We create detailed 3D models to give you a realistic preview of your home, helping you make informed decisions."
    },
    {
      title: "Sustainable Building",
      icon: "🌱",
      description: "We prioritize eco-friendly materials and energy-efficient solutions to reduce environmental impact and create sustainable living spaces for you and future generations."
    },
    {
      title: "Maintenance & Repairs",
      icon: "🔧",
      description: "We offer reliable maintenance and repair services to ensure your home remains in top condition. From routine inspections to emergency repairs, we've got you covered."
    }
  ];

  return (
    <div id="services" className="relative w-full py-24 px-6 overflow-hidden bg-black">
      {/* DarkVeil Background */}
      <div className="absolute inset-0 z-0">
        <Beams
    beamWidth={2}
    beamHeight={15}
    beamNumber={12}
    lightColor="#F08080"
    speed={2}
    noiseIntensity={1.75}
    scale={0.2}
    rotation={0}
  />
      </div>
      
      {/* Gradient Overlay for depth */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-purple-900/10 to-red-900/20" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Services Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to bring your vision to life
          </p>
        </div>

        {/* Services Grid - Modern Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative"
            >
              {/* Card Background with Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#F08080] to-[#FF6B6B] rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity" />
              
              {/* Card Content */}
              <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-6 border border-white/10 h-full hover:bg-black/60 transition-all duration-300 hover:transform hover:-translate-y-1">
                {/* Icon */}
                <div className="text-4xl mb-4">{service.icon}</div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#F08080]/20 to-transparent rounded-bl-3xl rounded-tr-2xl" />
              </div>
            </div>
          ))}
        </div>

        {/* Image Showcase Section */}
        <div className="relative">
          {/* Section Title */}
          <h3 className="text-3xl font-bold text-white text-center mb-10">
            Al Helio 1, Ajman
          </h3>
          
          {/* Image Slider with Glass Effect */}
          <div className="relative max-w-5xl mx-auto">
            {/* Slider Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F08080]/20 via-[#FF6B6B]/20 to-[#F08080]/20 blur-3xl" />
            
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/30 backdrop-blur-sm p-2">
              <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet !bg-white/50',
                  bulletActiveClass: 'swiper-pagination-bullet-active !bg-white'
                }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="rounded-2xl overflow-hidden"
              >
                <SwiperSlide>
                  <img
                    src="/images/HouseOutside.JPG"
                    alt="House Exterior"
                    className="w-full h-[600px] object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/HouseRoom.JPG"
                    alt="Bedroom Design"
                    className="w-full h-[600px] object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/HouseRoom2.JPG"
                    alt="Bedroom Design 2"
                    className="w-full h-[600px] object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/HouseLiving.JPG"
                    alt="Living Room"
                    className="w-full h-[600px] object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/HouseBath.JPG"
                    alt="Bathroom Design"
                    className="w-full h-[600px] object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/HouseBath2.JPG"
                    alt="Bathroom Design 2"
                    className="w-full h-[600px] object-cover"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="/images/HouseRoof.JPG"
                    alt="Rooftop View"
                    className="w-full h-[600px] object-cover"
                  />
                </SwiperSlide>
              </Swiper>
              
              {/* Custom Navigation Buttons */}
              <div className="swiper-button-prev !text-white !w-12 !h-12 !bg-white/10 !backdrop-blur-sm !rounded-full after:!text-lg !left-4"></div>
              <div className="swiper-button-next !text-white !w-12 !h-12 !bg-white/10 !backdrop-blur-sm !rounded-full after:!text-lg !right-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;