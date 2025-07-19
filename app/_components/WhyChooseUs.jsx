"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Aurora Background Component
const Aurora = ({ colorStops, blend, amplitude, speed }) => {
  const gradientStops = colorStops.map((color, index) => 
    `${color} ${(index / (colorStops.length - 1)) * 100}%`
  ).join(', ');

  return (
    <div className="absolute inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(ellipse at center, ${gradientStops})`,
          animation: `aurora ${speed ? 20/speed : 40}s ease-in-out infinite alternate`,
        }}
      />
      <div 
        className="absolute inset-0 opacity-60"
        style={{
          background: `conic-gradient(from 180deg at 50% 50%, ${gradientStops})`,
          animation: `aurora-rotate ${speed ? 30/speed : 60}s linear infinite`,
        }}
      />
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `linear-gradient(45deg, ${gradientStops})`,
          animation: `aurora-wave ${speed ? 25/speed : 50}s ease-in-out infinite alternate-reverse`,
        }}
      />
      <style jsx>{`
        @keyframes aurora {
          0% { transform: scale(1) rotate(0deg); }
          50% { transform: scale(1.1) rotate(180deg); }
          100% { transform: scale(1) rotate(360deg); }
        }
        @keyframes aurora-rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes aurora-wave {
          0% { transform: translateX(-50px) translateY(-30px) scale(1.05); }
          100% { transform: translateX(50px) translateY(30px) scale(0.95); }
        }
      `}</style>
    </div>
  );
};

const ChooseUs = () => {
  const features = [
    {
      icon: "⚡",
      title: "Quality Craftsmanship",
      description: "Our skilled professionals use only the finest materials and state-of-the-art techniques to ensure durability and elegance in every project."
    },
    {
      icon: "🎯",
      title: "Customer-Centric Approach", 
      description: "We prioritize your satisfaction by maintaining open communication, understanding your vision, and providing personalized solutions."
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "We offer competitive pricing without compromising on quality, making your dream home an achievable reality."
    },
    {
      icon: "⏰",
      title: "Timely Completion",
      description: "We understand the importance of timely project completion and strive to deliver your home on schedule."
    },
    {
      icon: "🛠️",
      title: "After-Sales Support",
      description: "Our commitment doesn't end with completion. We offer comprehensive after-sales support for any concerns."
    },
    {
      icon: "⭐",
      title: "Testimonial Reviews",
      description: "We build trust through positive testimonial reviews, showcasing our dedication to excellence and satisfaction."
    }
  ];

  return (
    <div id="chooseus" className="relative w-full py-24 px-6 min-h-screen overflow-hidden">
      {/* Aurora Background */}
      <Aurora
        colorStops={["#F08080", "#000000", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      />
      
      {/* Glass overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[0.5px]" />
      
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Enhanced Content */}
        <div className="space-y-8">
          <div className="text-center lg:text-left">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-6">
              <span className="text-white/90 text-sm font-medium tracking-wider uppercase">
                Excellence in Every Detail
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-2xl mb-6 leading-tight">
              Why Choose
              <span className="block bg-gradient-to-r from-red-300 via-white to-red-200 bg-clip-text text-transparent">
                Our Team
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto lg:mx-0 mb-8" />
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-red-200 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Enhanced Image Slider */}
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-red-400 via-white to-red-600 rounded-3xl opacity-20 blur-xl" />
          <div className="relative bg-white/10 backdrop-blur-md border border-white/30 rounded-3xl p-6 shadow-2xl">
            <Swiper
              spaceBetween={20}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-white/50 !opacity-50',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-red-400 !opacity-100'
              }}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="rounded-2xl overflow-hidden shadow-xl"
              style={{
                '--swiper-pagination-bullet-size': '12px',
                '--swiper-pagination-bullet-horizontal-gap': '8px',
                '--swiper-pagination-bottom': '16px'
              }}
            >
              {[
                "/images/HouseOutside2.JPG",
                "/images/HouseKitchen.JPG", 
                "/images/HouseStair.JPG",
                "/images/HouseBath3.JPG",
                "/images/HouseRoof2.JPG"
              ].map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="relative group">
                    <img
                      src={src}
                      alt={`Project showcase ${index + 1}`}
                      className="w-full h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                        <p className="text-gray-800 font-semibold text-sm">
                          Professional Craftsmanship
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
            <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Floating Stats */}
          <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">500+</div>
              <div className="text-white/80 text-sm">Projects Completed</div>
            </div>
          </div>
          
          <div className="absolute -top-6 -right-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-xl">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">98%</div>
              <div className="text-white/80 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .swiper-pagination {
          position: relative !important;
          margin-top: 20px !important;
        }
        
        .swiper-button-next,
        .swiper-button-prev {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default ChooseUs;