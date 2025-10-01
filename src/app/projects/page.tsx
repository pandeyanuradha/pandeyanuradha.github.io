"use client";

import HeaderNav from "@/components/header-nav";
import { useState } from "react";

export default function ProjectsPage() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [expandedPublication, setExpandedPublication] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#FFFCF8]">
      <HeaderNav />
      <div className="max-w-screen-lg mx-auto px-8 py-12">
        <div className="space-y-6">

          {/* Publications Section */}
          <div className="mb-12">
            <div className="text-center mb-6">
              <h2 className="font-serif text-3xl font-light text-zinc-900 mb-4">Publications</h2>
            </div>
            
            <div 
              className="bg-white border border-zinc-200 rounded-2xl p-8 pb-4 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedPublication(!expandedPublication)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-sm text-zinc-500 tracking-wide">Frontiers in Cellular and Infection Microbiology</span>
                <div className="text-sm font-serif text-zinc-400">2021</div>
              </div>
              
              <h3 className="font-serif text-xl font-light text-zinc-900 mb-4 group-hover:text-zinc-700 transition-colors duration-300">
                Learning from biological and computational machines: importance of SARS-CoV-2 genomic surveillance, mutations and risk stratification
              </h3>
              
              <p className="font-serif text-sm text-zinc-600 mb-4 leading-relaxed">
                <span className="text-zinc-800 font-bold">Anuradha Pandey</span>, Shikha Bhat, Akshay Kanakan, Ranjeet Maurya, Janani Srinivasa Vasudevan, Priti Devi, Partha Chattopadhyay, Shimpa Sharma, Rajesh J Khyalappa, Meghnad G Joshi, Rajesh Pandey
              </p>
              
              {/* Expandable Content */}
              <div className={`transition-all duration-500 overflow-hidden ${
                expandedPublication 
                  ? 'max-h-96 opacity-100 mb-6' 
                  : 'max-h-0 opacity-0'
              }`}>
                <p className="font-serif text-zinc-600 leading-relaxed">
                  Published in collaboration with the Institute of Genomics and Integrative Biology, this work analyzes COVID-19 patient data with statistical, machine learning, and genomic approaches to support risk stratification and genomic surveillance.
                  {/* This paper analyses COVID-19 patient data using statistical correlation, machine learning, and genomic sequencing to enable risk stratification and genomic surveillance during the pandemic. */}
                  {/* Published in collaboration with the Institute of Genomics and Integrative Biology, this work combined statistical correlation, machine learning, and genomic sequencing to analyze COVID-19 patient data, enabling risk stratification and genomic surveillance during the pandemic. */}
                </p>
              </div>
              
              {/* Read Paper Link - shown when expanded */}
              {expandedPublication && (
                <div className="mb-4 text-center">
                  <a 
                    href="https://www.frontiersin.org/articles/10.3389/fcimb.2021.783961/full" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="font-serif text-zinc-700 hover:text-zinc-900 transition-colors duration-300 flex items-center gap-2 justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Read Paper
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              )}
              
              <div className="flex items-center justify-center">
                {/* Click Indicator */}
                <div className={`flex items-center text-xs font-serif transition-all duration-300 ${
                  expandedPublication ? 'text-zinc-700' : 'text-zinc-400'
                }`}>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
                    <span>
                      {expandedPublication ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                  <svg 
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                      expandedPublication ? 'rotate-180' : ''
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other Projects Section */}
          <div>
            <div className="text-center mb-6">
              <h2 className="font-serif text-3xl font-light text-zinc-900 mb-4">Projects</h2>
            </div>
            
            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-6">
            
            {/* Chatbot for Mental Health */}
            <div 
              className="group bg-white border border-zinc-200 rounded-2xl p-8 pb-4 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedProject(expandedProject === 0 ? null : 0)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-sm text-zinc-500 tracking-wide">Machine Learning</span>
                <div className="text-sm font-serif text-zinc-400">2023</div>
              </div>
              
              <h3 className="font-serif text-xl font-light text-zinc-900 mb-4 group-hover:text-zinc-700 transition-colors duration-300">
                Mental Health Chatbot for Students
              </h3>
              
              {/* Expandable Content */}
              <div className={`transition-all duration-500 overflow-hidden ${
                expandedProject === 0 
                  ? 'max-h-96 opacity-100 mb-6' 
                  : 'max-h-0 opacity-0'
              }`}>
                <p className="font-serif text-zinc-600 leading-relaxed">
                  Worked with <a 
                    href="https://www.bits-pilani.ac.in/pilani/manik-gupta/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-zinc-800 hover:text-zinc-900 underline transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Dr. Manik Gupta
                  </a> to build a conversational agent addressing student mental health via text, fine-tuning BERT-based models on open-source datasets for focused responses.
                </p>
              </div>
              
              {/* View Project Link - shown when expanded */}
              {expandedProject === 0 && (
                <div className="mb-4 text-center">
                  <a 
                    href="https://github.com/pandeyanuradha/Chatbot-for-mental-health" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-zinc-700 hover:text-zinc-900 transition-colors duration-300 flex items-center gap-2 justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project on GitHub
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              )}
              
              <div className="flex items-center justify-center">
                {/* Click Indicator */}
                <div className={`flex items-center text-xs font-serif transition-all duration-300 ${
                  expandedProject === 0 ? 'text-zinc-700' : 'text-zinc-400'
                }`}>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
                    <span>
                      {expandedProject === 0 ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                  <svg 
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                      expandedProject === 0 ? 'rotate-180' : ''
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Multi-Task Learning for Code-Switched Language */}
            <div 
              className="group bg-white border border-zinc-200 rounded-2xl p-8 pb-4 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedProject(expandedProject === 1 ? null : 1)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-sm text-zinc-500 tracking-wide">Machine Learning</span>
                <div className="text-sm font-serif text-zinc-400">2022</div>
              </div>
              
              <h3 className="font-serif text-xl font-light text-zinc-900 mb-4 group-hover:text-zinc-700 transition-colors duration-300">
                Multi-Task Learning for Code-Switched Language
              </h3>
              
              {/* Expandable Content */}
              <div className={`transition-all duration-500 overflow-hidden ${
                expandedProject === 1 
                  ? 'max-h-96 opacity-100 mb-6' 
                  : 'max-h-0 opacity-0'
              }`}>
                <p className="font-serif text-zinc-600 leading-relaxed">
                  Collaborated with <a 
                    href="https://www.bits-pilani.ac.in/hyderabad/aruna-malapati/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-zinc-800 hover:text-zinc-900 underline transition-colors duration-300"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Dr. Aruna Malapati
                  </a> on multi-task learning approaches to address code-switched language, a challenging area in NLP due to scarce resources and limited transcriptions. Demonstrated that related tasks can improve model generalization and performance.
                  {/* Explored multi-task learning approaches for handling code-switched language, a major challenge in NLP due to limited resources and lack of transcriptions. Demonstrated that leveraging related tasks improves model generalizability and performance on code-switched data. */}
                </p>
              </div>
              
              {/* View Project Link - shown when expanded */}
              {expandedProject === 1 && (
                <div className="mb-4 text-center">
                  <a 
                    href="https://github.com/pandeyanuradha/Leveraging-Multi-Task-Learning-in-Code-Switched-setting" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-zinc-700 hover:text-zinc-900 transition-colors duration-300 flex items-center gap-2 justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project on GitHub
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              )}
              
              <div className="flex items-center justify-center">
                {/* Click Indicator */}
                <div className={`flex items-center text-xs font-serif transition-all duration-300 ${
                  expandedProject === 1 ? 'text-zinc-700' : 'text-zinc-400'
                }`}>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
                    <span>
                      {expandedProject === 1 ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                  <svg 
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                      expandedProject === 1 ? 'rotate-180' : ''
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Structured Sentiment Analysis */}
            <div 
              className="group bg-white border border-zinc-200 rounded-2xl p-8 pb-4 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedProject(expandedProject === 2 ? null : 2)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-sm text-zinc-500 tracking-wide">Machine Learning</span>
                <div className="text-sm font-serif text-zinc-400">2022</div>
              </div>
              
              <h3 className="font-serif text-xl font-light text-zinc-900 mb-4 group-hover:text-zinc-700 transition-colors duration-300">
                Structured Sentiment Analysis using Dependency Graphs
              </h3>
              
              {/* Expandable Content */}
              <div className={`transition-all duration-500 overflow-hidden ${
                expandedProject === 2 
                  ? 'max-h-96 opacity-100 mb-6' 
                  : 'max-h-0 opacity-0'
              }`}>
                <p className="font-serif text-zinc-600 leading-relaxed">
                  Worked on extracting opinions from text and linking them through sentiment graphs. Used dependency parsing and graph theory to study how opinions are structured.
                  {/* Worked on extracting opinion tuples and mapping relationships through sentiment graphs. Designed algorithms using dependency parsing and graph theory to understand the structure of opinions in text. */}
                </p>
              </div>
              
              {/* View Project Link - shown when expanded */}
              {expandedProject === 2 && (
                <div className="mb-4 text-center">
                  <a 
                    href="https://github.com/pandeyanuradha/Structured-sentiment-analysis-using-Dependency-Graphs" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-zinc-700 hover:text-zinc-900 transition-colors duration-300 flex items-center gap-2 justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project on GitHub
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              )}
              
              <div className="flex items-center justify-center">
                {/* Click Indicator */}
                <div className={`flex items-center text-xs font-serif transition-all duration-300 ${
                  expandedProject === 1 ? 'text-zinc-700' : 'text-zinc-400'
                }`}>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
                    <span>
                      {expandedProject === 1 ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                  <svg 
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                      expandedProject === 1 ? 'rotate-180' : ''
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Prompt Me Android App */}
            <div 
              className="group bg-white border border-zinc-200 rounded-2xl p-8 pb-4 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedProject(expandedProject === 3 ? null : 3)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-sm text-zinc-500 tracking-wide">Android Development</span>
                <div className="text-sm font-serif text-zinc-400">2021</div>
              </div>
              
              <h3 className="font-serif text-xl font-light text-zinc-900 mb-4 group-hover:text-zinc-700 transition-colors duration-300">
                Prompt Me — A dashboard for daily activities
              </h3>
              
              {/* Expandable Content */}
              <div className={`transition-all duration-500 overflow-hidden ${
                expandedProject === 3 
                  ? 'max-h-96 opacity-100 mb-6' 
                  : 'max-h-0 opacity-0'
              }`}>
                <p className="font-serif text-zinc-600 leading-relaxed">
                  Android application with multiple functionalities to track important activities and manage home inventory, including task scheduling, inventory management, and reminders.
                  {/* Android application with multiple functionalities to keep track of important activities and manage home inventory. Features include task scheduling, inventory management, and reminder systems. */}
                </p>
              </div>
              
              {/* View Project Link - shown when expanded */}
              {expandedProject === 3 && (
                <div className="mb-4 text-center">
                  <a 
                    href="https://github.com/pandeyanuradha/Prompt-Me" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-zinc-700 hover:text-zinc-900 transition-colors duration-300 flex items-center gap-2 justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project on GitHub
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              )}
              
              <div className="flex items-center justify-center">
                {/* Click Indicator */}
                <div className={`flex items-center text-xs font-serif transition-all duration-300 ${
                  expandedProject === 3 ? 'text-zinc-700' : 'text-zinc-400'
                }`}>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
                    <span>
                      {expandedProject === 3 ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                  <svg 
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                      expandedProject === 3 ? 'rotate-180' : ''
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Jeevan Daan Website */}
            <div 
              className="group bg-white border border-zinc-200 rounded-2xl p-8 pb-4 hover:border-zinc-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              onClick={() => setExpandedProject(expandedProject === 4 ? null : 4)}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-serif text-sm text-zinc-500 tracking-wide">Web Development</span>
                <div className="text-sm font-serif text-zinc-400">2021</div>
              </div>
              
              <h3 className="font-serif text-xl font-light text-zinc-900 mb-4 group-hover:text-zinc-700 transition-colors duration-300">
                Jeevan Daan — A Secure Platform for Organ Donation Management
              </h3>
              
              {/* Expandable Content */}
              <div className={`transition-all duration-500 overflow-hidden ${
                expandedProject === 4 
                  ? 'max-h-96 opacity-100 mb-6' 
                  : 'max-h-0 opacity-0'
              }`}>
                <p className="font-serif text-zinc-600 leading-relaxed">
                  A secure website for managing candidate waitlists, organ donation, matching, and transplantation, designed to protect sensitive medical information.
                  {/* Secure website that contains all data on the candidate waiting list, organ donation, matching, and transplantation. Built with focus on data security and user privacy for sensitive medical information. */}
                </p>
              </div>
              
              {/* View Project Link - shown when expanded */}
              {expandedProject === 4 && (
                <div className="mb-4 text-center">
                  <a 
                    href="https://github.com/pandeyanuradha/Jeevan-Daan" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif text-zinc-700 hover:text-zinc-900 transition-colors duration-300 flex items-center gap-2 justify-center"
                    onClick={(e) => e.stopPropagation()}
                  >
                    View Project on GitHub
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              )}
              
              <div className="flex items-center justify-center">
                {/* Click Indicator */}
                <div className={`flex items-center text-xs font-serif transition-all duration-300 ${
                  expandedProject === 4 ? 'text-zinc-700' : 'text-zinc-400'
                }`}>
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-current mr-2"></div>
                    <span>
                      {expandedProject === 4 ? 'Click to collapse' : 'Click to expand'}
                    </span>
                  </div>
                  <svg 
                    className={`w-4 h-4 ml-2 transition-transform duration-300 ${
                      expandedProject === 4 ? 'rotate-180' : ''
                    }`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}