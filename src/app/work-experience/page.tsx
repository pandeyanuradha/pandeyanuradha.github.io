"use client";

import HeaderNav from "@/components/header-nav";
import { useState } from "react";

export default function WorkExperiencePage() {
  const [hoveredExperience, setHoveredExperience] = useState<number | null>(null);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);

  const experiences = [
    {
      id: 0,
      company: "Microsoft Research",
      location: "Bengaluru",
      duration: "Aug '24 - Present",
      role: "Pre-Doctoral Research Fellow",
      // project: "Beyond Transformers",
      // description: "Building efficient architecture for large language models, with special focus on modularity and thinking.",
      description: "Part of the Systems Group, where I work on efficient LLM inference. My projects include exploring new architectures for LLMs and developing self-speculative decoding techniques to improve inference speed and compute efficiency.",
      year: "2024",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
    },
    {
      id: 1,
      company: "Salesforce",
      location: "Hyderabad",
      duration: "July '23 - July '24",
      role: "Software Engineer",
      project: "Slack Chatbot for support cases",
      description: "Contributed to the launch of Salesforce Data Cloud, a unified customer data platform. Built data pipelines and analytics tools to help enterprises manage customer data at scale.",
      year: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg"
    },
    {
      id: 2,
      company: "Apple R&D",
      location: "Hyderabad",
      duration: "Jan '23 - June '23",
      role: "Research Intern (Machine Learning)",
      project: "iOS Integrations",
      description: "Developed and deployed ML models to classify and filter spam across Apple's messaging platforms, including iMessage and Mail. These features are integrated into current products, being used by millions of users worldwide.",
      // description: "Worked on building ML models to classify and filter spam across Apple’s messaging platforms, such as emails and iMessages, improving user safety and communication reliability.",
      year: "2023",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
    },
    {
      id: 3,
      company: "Google Summer of Code",
      location: "Remote",
      duration: "May '21 - Aug '21",
      role: "Open Source Contributor (Student Developer)",
      project: "Rule-based machine translation for a language pair",
      description: "Worked with the open-source Apertium project to build machine translation models for Indian languages.",
      year: "2021",
      logo: "/images/logos/gsoc-logo.png"
    },
    {
      id: 4,
      company: "Institute of Genomics and Integrative Biology (CSIR)",
      location: "Delhi",
      duration: "May '21 - Dec '21",
      role: "Research Intern (Machine Learning)",
      project: "COVID-19 Mortality prediction",
      description: "Conducted analysis on COVID-19 risk stratification and mortality prediction in Indian hospital patients by modeling demographic, clinical, and comorbidity factors.",
      year: "2021",
      logo: "/images/logos/igib-logo.png"
    },
    {
      id: 5,
      company: "Indian School of Business",
      location: "Hyderabad",
      duration: "Dec '20 - March '21",
      role: "Research Intern (Machine Learning)",
      project: "NPA (Non-performing asset) Prediction",
      description: "Developed models to predict Non-Performing Assets (NPA) using prior years’ asset data with Linear Regression and feature selection.",
      // description: "Worked on predicting NPA using previous year's assets data using Linear Regression and feature selection.",
      year: "2020",
      logo: "/images/logos/isb-logo.png"
    },
    {
      id: 6,
      company: "BITS Pilani",
      location: "Pilani, Rajasthan",
      duration: "Aug '19 - May '23",
      role: "B.E. in Computer Science Engineering",
      project: "Major: Computer Science, Minor: Data Science",
      description: "Bachelor’s degree in Computer Science Engineering with a Minor in Data Science.",
      year: "2019",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <HeaderNav />
      <div className="max-w-7xl mx-auto px-8 py-16">
        
        {/* Page Title */}
        {/* <div className="text-center mb-16">
          <p className="font-serif text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            A timeline of past work experiences and education
          </p>
        </div> */}

        {/* Timeline Container */}
        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-zinc-300"></div>
          
          {/* Timeline Items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                }`}
                onMouseEnter={() => setHoveredExperience(index)}
                onMouseLeave={() => setHoveredExperience(null)}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className={`w-4 h-4 rounded-full border-4 border-[#FFFCF8] shadow-lg transition-all duration-300 ${
                    hoveredExperience === index || expandedExperience === index ? 'bg-zinc-700 scale-125' : 'bg-zinc-400'
                  }`}></div>
                  
                  {/* Year Label */}
                  <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-md text-sm font-medium font-serif transition-all duration-300 ${
                    hoveredExperience === index || expandedExperience === index
                      ? 'bg-zinc-700 text-white scale-110' 
                      : 'bg-zinc-200 text-zinc-600'
                  }`}>
                    {exp.year}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div 
                    className={`relative p-6 rounded-2xl shadow-lg border transition-all duration-500 cursor-pointer ${
                      hoveredExperience === index || expandedExperience === index
                        ? 'bg-zinc-50 border-zinc-300 border-2 transform scale-105 shadow-xl' 
                        : 'bg-white border-zinc-200 hover:shadow-md'
                    }`}
                    onClick={() => setExpandedExperience(expandedExperience === index ? null : index)}
                  >
                    
                    {/* Arrow pointing to timeline */}
                    <div className={`absolute top-8 w-0 h-0 transition-all duration-300 ${
                      index % 2 === 0 
                        ? 'right-0 translate-x-full border-l-8 border-r-0 border-t-8 border-b-8 border-l-zinc-200 border-t-transparent border-b-transparent' 
                        : 'left-0 -translate-x-full border-r-8 border-l-0 border-t-8 border-b-8 border-r-zinc-200 border-t-transparent border-b-transparent'
                    } ${
                      hoveredExperience === index || expandedExperience === index ? 'opacity-100' : 'opacity-50'
                    }`}></div>

                    {/* Company & Role - Always Visible */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-8 h-8 flex-shrink-0">
                        <img 
                          src={exp.logo} 
                          alt={`${exp.company} logo`}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h3 className={`font-serif text-xl font-light tracking-wide mb-1 transition-colors duration-300 ${
                          hoveredExperience === index || expandedExperience === index ? 'text-zinc-800' : 'text-zinc-700'
                        }`}>
                          {exp.company}
                        </h3>
                        <p className="font-serif text-sm text-zinc-600">{exp.role}</p>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    <div className={`transition-all duration-500 overflow-hidden ${
                      expandedExperience === index 
                        ? 'max-h-96 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}>
                      {/* Duration Badge */}
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium font-serif mb-4 transition-colors duration-300 ${
                        expandedExperience === index 
                          ? 'bg-zinc-700 text-white' 
                          : 'bg-zinc-100 text-zinc-600'
                      }`}>
                        {exp.duration}
                      </div>

                      <p className="font-serif text-zinc-600 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>
                    </div>

                    {/* Click Indicator */}
                    <div className={`flex items-center justify-between text-xs font-serif transition-all duration-300 ${
                      expandedExperience === index ? 'text-zinc-700' : 'text-zinc-400'
                    }`}>
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
                        <span>
                          {expandedExperience === index ? 'Click to collapse' : 'Click to expand'}
                        </span>
                      </div>
                      <svg 
                        className={`w-4 h-4 transition-transform duration-300 ${
                          expandedExperience === index ? 'rotate-180' : ''
                        }`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>

          {/* Journey Start/End Labels */}
          <div className="absolute left-1/2 transform -translate-x-1/2 -top-8">
            <div className="flex items-center space-x-2 text-zinc-500 text-sm">
              <div className="w-2 h-2 rounded-full bg-zinc-400"></div>
              <span className="font-serif">Present Day</span>
            </div>
          </div>
          
          <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8">
            <div className="flex items-center space-x-2 text-zinc-500 text-sm">
              <div className="w-2 h-2 rounded-full bg-zinc-400"></div>
              <span className="font-serif">Journey Start</span>
            </div>
          </div>
        </div>    
      </div>
    </div>
  );
}