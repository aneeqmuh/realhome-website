// src/components/AboutUs.jsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ChooseUs = () => {
  return (
    <div id = "chooseus" className="w-full py-20 px-6 bg-gradient-to-b from-red-100 to-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left: Heading + Paragraph */}
        <div>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 drop-shadow-md mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 font-light max-w-2xl">
            ✅ Quality Craftsmanship: Our skilled professionals use only the finest materials and state-of-the-art techniques to ensure durability and elegance in every project.
            <br />
            <br />
            ✅ Customer-Centric Approach: We prioritize your satisfaction by maintaining open communication, understanding your vision, and providing personalized solutions.
            <br />
            <br />
            ✅ Affordable Pricing: We offer competitive pricing without compromising on quality, making your dream home an achievable reality.
            <br />
            <br/>
            ✅ Timely Completion: We understand the importance of timely project completion and strive to deliver your home on schedule, without compromising on quality.
            <br />
            <br />
            ✅ After-Sales Support: Our commitment to you doesn't end with the completion of your home. We offer comprehensive after-sales support to address any concerns or maintenance needs.
            <br />
            <br />
           ✅ Testimonial Reviews: We build trust with our clients through positive testimonial reviews, showcasing our dedication to excellence and customer satisfaction.

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
                src="/images/HouseOutside2.jpg"
                alt="About slide 1"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/images/HouseKitchen.jpg"
                alt="About slide 2"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
                <img
                src="/images/HouseStair.jpg"
                alt="About slide 2"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
                <img
                src="/images/HouseBath3.jpg"
                alt="About slide 2"
                className="w-full object-cover rounded-xl"
              />
            </SwiperSlide>
            <SwiperSlide>
                <img
                src="/images/HouseRoof2.jpg"
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

export default ChooseUs;
