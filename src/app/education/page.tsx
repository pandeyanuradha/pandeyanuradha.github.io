"use client";

import HeaderNav from "@/components/header-nav";
import { useState } from "react";

export default function EducationPage() {
  // Slideshow state and data
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const photos = [
    {
      src: "/images/graduation-ceremony.jpg",
      alt: "Graduation Ceremony",
      caption: "Graduation day at BITS Pilani - a milestone moment"
    },
    {
      src: "/images/campus-life.jpg", 
      alt: "Campus Life",
      caption: "Campus life and study sessions with friends"
    },
    {
      src: "/images/project-presentation.jpg",
      alt: "Project Presentation", 
      caption: "Presenting my final year project"
    },
    {
      src: "/images/achievements.jpg",
      alt: "Achievements",
      caption: "Receiving awards and recognition"
    },
    {
      src: "/images/research-work.jpg",
      alt: "Research Work",
      caption: "Working on research projects in the lab"
    },
    {
      src: "/images/extracurricular.jpg",
      alt: "Extracurricular Activities",
      caption: "Sports and extracurricular activities"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };
  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <HeaderNav />
      <div className="max-w-screen-lg mx-auto px-8 py-24">
        <div className="space-y-16">
          <h1 className="font-serif text-xl tracking-wide uppercase text-gray-700 mb-12">
            Education
          </h1>
          
          {/* Education Entry 1 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <p className="text-gray-500 text-sm">2019—2023</p>
            </div>
            <div className="col-span-12 md:col-span-9 space-y-4">
              <div className="flex items-center gap-4">
                <img 
                  src="/images/bits-pilani-logo.png" 
                  alt="BITS Pilani Logo" 
                  className="w-12 h-12 object-contain rounded-full bg-white shadow-sm"
                />
                <h2 className="text-2xl font-normal text-gray-900">BITS Pilani</h2>
              </div>
              <p className="text-lg text-gray-700">B.E. in Computer Science with a Minor in Data Science</p>
              <p className="text-gray-600 italic">Advisor: Prof. Aruna Malapati, Prof. Manik Gupta</p>
            </div>
          </div>

          {/* Education Entry 2 */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-3">
              <p className="text-gray-500 text-sm">2007—2019</p>
            </div>
            <div className="col-span-12 md:col-span-9 space-y-4">
              <div className="flex items-center gap-4">
                <img 
                  src="/images/aecs-logo.png" 
                  alt="AECS Logo" 
                  className="w-12 h-12 object-contain rounded-full bg-white shadow-sm"
                />
                <h2 className="text-2xl font-normal text-gray-900">Atomic Energy Central School</h2>
              </div>
              <p className="text-lg text-gray-700">Primary and High School</p>
              <p className="text-gray-600 italic">Achievements - National Science Olympiad State Topper, Times of India student of the year, School captain, Badminton District Player. Level 5/8 (Madhyama Purna)</p>
            </div>
          </div>

          {/* Photo Slideshow Section */}
          <div className="mt-24 space-y-8">
            <h2 className="font-serif text-lg tracking-wide uppercase text-gray-700 text-center">
              Education Journey
            </h2>
            
            {/* Slideshow Container */}
            <div className="relative max-w-2xl mx-auto">
              {/* Main Photo */}
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={photos[currentSlide].src}
                  alt={photos[currentSlide].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                {/* Navigation Arrows */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                {/* Slide Counter */}
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentSlide + 1} / {photos.length}
                </div>
              </div>
              
              {/* Caption */}
              <div className="text-center mt-4">
                <p className="text-gray-700 font-medium">{photos[currentSlide].caption}</p>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="flex justify-center gap-2 mt-6">
                {photos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide 
                        ? 'bg-gray-700 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <p className="text-center text-gray-500 text-sm italic mt-6">
              Memories from my educational journey - click the arrows or dots to navigate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}