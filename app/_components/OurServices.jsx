// src/components/AboutUs.jsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const OurServices = () => {
  return (
    <div id="services" className="w-full py-20 px-6 bg-gradient-to-b from-white to-red-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Heading + Paragraph */}
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 drop-shadow-md mb-6">
            Our Services
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 font-light max-w-2xl">
            ✅ Custom Home Building: Whether you have a specific design in mind or need inspiration, our team of expert architects and builders will work with you to create a home that reflects your style and exceeds your expectations.
            <br /><br />
            ✅ Renovations and Extensions: Transform your existing space with our innovative renovation and extension services. We ensure seamless integration of new elements while enhancing the overall aesthetic and functionality of your home.
            <br /><br />
            ✅ Project Management: From concept to completion, we handle all aspects of your building project, ensuring timely delivery and adherence to the highest standards of quality and safety.
            <br /><br />
            ✅ Interior Design: Our talented interior designers will help you create stunning and functional spaces that make your home truly unique. From modern to classic styles, including Turkish design, we can turn any vision into reality.
            <br /><br />
            ✅ Electrical Services: Our skilled electricians provide comprehensive electrical solutions, from wiring and lighting to installing advanced electrical systems, ensuring safety and efficiency in your home.
            <br /><br />
            ✅ 3D Design: Visualize your project with our state-of-the-art 3D design services. We create detailed 3D models to give you a realistic preview of your home, helping you make informed decisions.
            <br /><br />
            ✅ Sustainable Building Practices: We prioritize eco-friendly materials and energy-efficient solutions to reduce environmental impact and create sustainable living spaces for you and future generations.
            <br /><br />
            ✅ Maintenance and Repairs: We offer reliable maintenance and repair services to ensure your home remains in top condition. From routine inspections to emergency repairs, we've got you covered.
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
                src="/images/HouseOutside.JPG"
                alt="About slide 1"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/HouseRoom.JPG"
                alt="About slide 2"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/HouseRoom2.JPG"
                alt="About slide 3"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/HouseLiving.JPG"
                alt="About slide 4"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/HouseBath.JPG"
                alt="About slide 5"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/HouseBath2.JPG"
                alt="About slide 6"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/HouseRoof.JPG"
                alt="About slide 7"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
