"use client";
import React, { useState } from "react";

// Mock Particles component (replace with your actual import)
const Particles = ({ children, ...props }) => (
  <div className="relative">
    <div className="absolute inset-0 pointer-events-none opacity-20">
      {/* Simple particle effect placeholder */}
      <div className="w-full h-full bg-gradient-to-br from-red-500/10 to-transparent" />
    </div>
    {children}
  </div>
);

// Enhanced Masonry component with better mobile support
const Masonry = ({ items, className = "" }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 ${className}`}>
      {items.map((item, index) => (
        <div 
          key={item.id}
          className={`relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${
            // Vary heights for masonry effect
            index === 0 ? 'row-span-2' :
            index === 2 ? 'row-span-3' :
            index === 4 ? 'row-span-2' :
            'row-span-1'
          }`}
          style={{
            // Fallback heights for mobile
            minHeight: index === 0 ? '200px' : 
                      index === 2 ? '250px' :
                      index === 4 ? '200px' : '150px'
          }}
        >
          <img
            src={item.img}
            alt={`Gallery item ${item.id}`}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjY2NjIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4=';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      ))}
    </div>
  );
};

const RequestVisit = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    message: ''
  });

  const items = [
    {
      id: "1",
      img: "/images/requestPics/houseOutside.JPG",
      height: 400,
    },
    {
      id: "2",
      img: "/images/requestPics/kitchen.JPG",
      height: 250,
    },
    {
      id: "3",
      img: "/images/requestPics/bathroom.JPG",
      height: 600,
    },
    {
      id: "4",
      img: "/images/requestPics/lounge.JPG",
      height: 350,
    },
    {
      id: "5",
      img: "/images/requestPics/Lounge2.JPG",
      height: 450,
    },
    {
      id: "6",
      img: "/images/requestPics/stairCase.JPG",
      height: 300,
    },
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your original Formspree integration will handle this
  };

  return (
    <section
      className="relative w-full py-12 md:py-20 px-4 md:px-6 overflow-hidden bg-gradient-to-b from-black via-red-950/50 to-red-900"
      id="request-visit"
    >
      <Particles className="absolute inset-0" />
      
      {/* Content Above Particles */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Mobile Layout: Stack vertically */}
        <div className="block md:hidden space-y-8">
          {/* Form Section - Mobile */}
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <h2 className="text-3xl font-bold text-gray-50 mb-6 drop-shadow-md">
              Request Visit
            </h2>
            <form 
              className="space-y-6"
              action="https://formspree.io/f/mqabylaw"
              method="POST"
            >
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="FULL NAME"
                  required
                  className="w-full bg-transparent border-b-2 border-gray-400 focus:border-red-400 focus:outline-none py-3 text-white placeholder:text-gray-400 uppercase tracking-wider transition-colors"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="MOBILE"
                  required
                  className="w-full bg-transparent border-b-2 border-gray-400 focus:border-red-400 focus:outline-none py-3 text-white placeholder:text-gray-400 uppercase tracking-wider transition-colors"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="E-MAIL"
                  required
                  className="w-full bg-transparent border-b-2 border-gray-400 focus:border-red-400 focus:outline-none py-3 text-white placeholder:text-gray-400 uppercase tracking-wider transition-colors"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-400 focus:border-red-400 focus:outline-none py-3 text-white placeholder:text-gray-400 uppercase tracking-wider resize-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold tracking-[0.2em] px-8 py-4 w-full rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                CONTACT
              </button>
            </form>
          </div>

          {/* Gallery Section - Mobile */}
          <div className="w-full">
            <h3 className="text-2xl font-bold text-gray-50 mb-6 text-center">Al Zahya, Ajman</h3>
            <Masonry items={items} />
          </div>
        </div>

        {/* Desktop Layout: Side by side */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 items-start">
          {/* Form Side - Desktop */}
          <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
            <h2 className="text-5xl font-bold text-gray-50 mb-8 drop-shadow-md">
              Request Visit
            </h2>
            <form 
              className="space-y-8"
              action="https://formspree.io/f/mqabylaw"
              method="POST"
            >
              <div className="relative">
                <input
                  type="text"
                  name="fullName"
                  placeholder="FULL NAME"
                  required
                  className="w-full bg-transparent border-b-2 border-gray-400 focus:border-red-400 focus:outline-none py-4 text-white placeholder:text-gray-400 uppercase tracking-wider text-lg transition-colors"
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  name="mobile"
                  placeholder="MOBILE"
                  required
                  className="w-full bg-transparent border-b-2 border-gray-400 focus:border-red-400 focus:outline-none py-4 text-white placeholder:text-gray-400 uppercase tracking-wider text-lg transition-colors"
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="E-MAIL"
                  required
                  className="w-full bg-transparent border-b-2 border-gray-400 focus:border-red-400 focus:outline-none py-4 text-white placeholder:text-gray-400 uppercase tracking-wider text-lg transition-colors"
                />
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-400 focus:border-red-400 focus:outline-none py-4 text-white placeholder:text-gray-400 uppercase tracking-wider text-lg resize-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold tracking-[0.2em] px-12 py-5 w-full rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg"
              >
                CONTACT
              </button>
            </form>
          </div>

          {/* Gallery Side - Desktop */}
          <div className="w-full">
            <div className="bg-black/10 backdrop-blur-sm rounded-3xl p-6 border border-white/5">
              <Masonry items={items} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestVisit;