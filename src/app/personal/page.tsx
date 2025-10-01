"use client";

import HeaderNav from "@/components/header-nav";
import { useState } from "react";

export default function PersonalPage() {
  {/* Slideshow state for Mumbai & School Years
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const photos1 = [
    {
      src: "/images/mumbai-childhood.jpg",
      alt: "Mumbai Childhood",
      caption: "Growing up in Mumbai - early years"
    },
    {
      src: "/images/badminton-tournament.jpg", 
      alt: "Badminton Tournament",
      caption: "Playing badminton at district level competitions"
    },
    {
      src: "/images/nso-achievement.jpg",
      alt: "NSO Achievement", 
      caption: "Celebrating NSO state topper achievement"
    },
    {
      src: "/images/school-captain.jpg",
      alt: "School Captain",
      caption: "Leading as school captain"
    },
    {
      src: "/images/music-performance.jpg",
      alt: "Music Performance",
      caption: "Hindustani classical singing performances"
    },
    {
      src: "/images/youtube-recording.jpg",
      alt: "YouTube Recording",
      caption: "Recording pop song covers for YouTube channel"
    }
  ];

  // Slideshow state for Fitness Journey
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const photos2 = [
    {
      src: "/images/first-gym-day.jpg",
      alt: "First Gym Day",
      caption: "First day at the gym - the beginning of my fitness journey"
    },
    {
      src: "/images/strength-training.jpg",
      alt: "Strength Training",
      caption: "Weight lifting sessions over the years"
    },
    {
      src: "/images/running-sessions.jpg", 
      alt: "Running Sessions",
      caption: "Long distance running and training"
    },
    {
      src: "/images/yoga-practice.jpg",
      alt: "Yoga Practice", 
      caption: "Practicing yoga for balance and flexibility"
    },
    {
      src: "/images/half-marathon.jpg",
      alt: "Half Marathon",
      caption: "Completing my first half-marathon"
    }
  ];

  // Slideshow state for College Adventures
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const photos3 = [
    {
      src: "/images/hyderabad-arrival.jpg",
      alt: "Hyderabad Arrival",
      caption: "First day in Hyderabad - new city, new adventures"
    },
    {
      src: "/images/cooking-experiments.jpg",
      alt: "Cooking Experiments",
      caption: "Late-night cooking and recipe experiments"
    },
    {
      src: "/images/college-friends.jpg", 
      alt: "College Friends",
      caption: "Making memories with college friends"
    },
    {
      src: "/images/solo-trip.jpg",
      alt: "Solo Trip", 
      caption: "My first solo trip - independence and self-discovery"
    },
    {
      src: "/images/travel-adventures.jpg",
      alt: "Travel Adventures",
      caption: "Various travel experiences during college"
    }
  ]; */}

  {/* const nextSlide = (slideNumber: number) => {
    if (slideNumber === 1) {
      setCurrentSlide1((prev) => (prev + 1) % photos1.length);
    } else if (slideNumber === 2) {
      setCurrentSlide2((prev) => (prev + 1) % photos2.length);
    } else if (slideNumber === 3) {
      setCurrentSlide3((prev) => (prev + 1) % photos3.length);
    }
  };

  const prevSlide = (slideNumber: number) => {
    if (slideNumber === 1) {
      setCurrentSlide1((prev) => (prev - 1 + photos1.length) % photos1.length);
    } else if (slideNumber === 2) {
      setCurrentSlide2((prev) => (prev - 1 + photos2.length) % photos2.length);
    } else if (slideNumber === 3) {
      setCurrentSlide3((prev) => (prev - 1 + photos3.length) % photos3.length);
    }
  };

  const setSlide = (slideNumber: number, index: number) => {
    if (slideNumber === 1) {
      setCurrentSlide1(index);
    } else if (slideNumber === 2) {
      setCurrentSlide2(index);
    } else if (slideNumber === 3) {
      setCurrentSlide3(index);
    }
  }; */}

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <HeaderNav />
      <div className="max-w-screen-lg mx-auto px-8 py-12">
        <div className="space-y-8">
          
          {/* Opening Section */}
          <div className="max-w-4xl mx-auto">
            <p className="font-serif text-base text-zinc-700 leading-relaxed">
              If you've made it to this page, thank you for wanting to know a little more about me! :)
            </p>
          </div>

          {/* Mumbai & School Years */}
          <div className="max-w-4xl mx-auto">
            <p className="font-serif text-base leading-relaxed text-zinc-700 mb-8 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600">
              My childhood was spent in Mumbai, India. In school, I loved trying different things — playing badminton at the district level, falling in love with science and topping my state in the National Science Olympiad (<a href="https://sofworld.org/nso" target="_blank" rel="noopener noreferrer">NSO</a>), and even captaining my school. Alongside this, music has always been special to me — I trained in Hindustani classical singing (cleared 5 out of 7 levels) and, for fun, started a <a href="https://www.youtube.com/@anuradhapandey882" target="_blank" rel="noopener noreferrer">YouTube channel</a> where I uploaded pop song covers!
            </p>
            
            {/* Photo Slideshow 1 
            <div className="relative max-w-lg mx-auto mb-12">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={photos1[currentSlide1].src}
                  alt={photos1[currentSlide1].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                <button 
                  onClick={() => prevSlide(1)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={() => nextSlide(1)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentSlide1 + 1} / {photos1.length}
                </div>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-gray-700 font-medium">{photos1[currentSlide1].caption}</p>
              </div>
              
              <div className="flex justify-center gap-2 mt-6">
                {photos1.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSlide(1, index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide1 
                        ? 'bg-gray-700 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div> */}
          </div>

          {/* Fitness Journey */}
          <div className="max-w-4xl mx-auto">
            <p className="font-serif text-base leading-relaxed text-zinc-700 mb-8">
              After high school, I walked into a gym for the first time – and I fell in love with strength training. Six years later, fitness has become a huge part of who I am. Whether it's lifting weights, running long distances, or practicing yoga, I love the energy it gives me. I even ran my first half-marathon recently and hope to do many more.
            </p>
            
            {/* Photo Slideshow 2 
            <div className="relative max-w-lg mx-auto mb-12">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={photos2[currentSlide2].src}
                  alt={photos2[currentSlide2].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                <button 
                  onClick={() => prevSlide(2)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={() => nextSlide(2)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentSlide2 + 1} / {photos2.length}
                </div>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-gray-700 font-medium">{photos2[currentSlide2].caption}</p>
              </div>
              
              <div className="flex justify-center gap-2 mt-6">
                {photos2.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSlide(2, index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide2 
                        ? 'bg-gray-700 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div> */}
          </div>

          {/* College & Independence */}
          <div className="max-w-4xl mx-auto">
            <p className="font-serif text-base leading-relaxed text-zinc-700 mb-8">
              College brought its own set of memories and adventures. I moved away from home for the first time, to Hyderabad, and it taught me a lot. Cooking – something I'd always enjoyed as a kid, became a bigger part of my life, from late-night quick fixes to experimenting with recipes. I also traveled more, and one of the highlights was my first solo trip.
            </p>
            
            {/* Photo Slideshow 3 
            <div className="relative max-w-lg mx-auto mb-12">
              <div className="relative aspect-[3/2] overflow-hidden rounded-xl shadow-lg">
                <img 
                  src={photos3[currentSlide3].src}
                  alt={photos3[currentSlide3].alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                
                <button 
                  onClick={() => prevSlide(3)}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={() => nextSlide(3)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 rounded-full p-3 shadow-md transition-all duration-200 hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                  {currentSlide3 + 1} / {photos3.length}
                </div>
              </div>
              
              <div className="text-center mt-4">
                <p className="text-gray-700 font-medium">{photos3[currentSlide3].caption}</p>
              </div>
              
              <div className="flex justify-center gap-2 mt-6">
                {photos3.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setSlide(3, index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide3 
                        ? 'bg-gray-700 scale-125' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div> */}
          </div>

          {/* Writing & Medium */}
          <div className="max-w-4xl mx-auto">
            <p className="font-serif text-base leading-relaxed text-zinc-700 mb-6 [&_a]:underline [&_a]:text-zinc-900 [&_a:hover]:text-zinc-600">
              Outside of all this, I enjoy writing and occasionally share my thoughts on <a href="https://medium.com/@anuradha.pandey" target="_blank" rel="noopener noreferrer">Medium</a> – feel free to check them out if you're curious.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}