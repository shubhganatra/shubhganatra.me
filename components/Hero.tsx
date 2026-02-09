'use client';

import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full animate-fade-in-up">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold mb-4 text-black dark:text-white leading-tight">
              Hi, I'm Shubh! <span className="inline-block" style={{ transform: 'scaleX(-1)' }}>👋🏻</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-base sm:text-xl lg:text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
              <span className="whitespace-nowrap">Software Engineer | Product Manager</span><br />
              Backend Expertise with a Product Focus!
            </h2>

            {/* Main Subtitle */}
            <p className="text-lg sm:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Product-Minded Software Engineer leveraging 2+ years of enterprise backend experience to build 0-to-1 AI solutions. <br /> I combine large-scale Enterprise Systems rigor with Product Strategy to ship tools that solve real user problems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#projects"
                className="w-full sm:w-40 px-6 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center leading-tight"
              >
                View Projects
              </a>
              <a
                href="/Shubh Ganatra SDE II.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-48 px-6 py-4 border-2 border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors duration-300 leading-tight line-clamp-2"
              >
                Hiring for SWE? Look Here!
              </a>
              <a
                href="/Shubh Ganatra CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-48 px-6 py-4 border-2 border-indigo-500 text-indigo-600 dark:text-indigo-400 rounded-lg font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/10 transition-colors duration-300 leading-tight line-clamp-2"
              >
                Hiring for PM? This is for you!
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="/Subject.png"
              alt="Shubh Ganatra"
              className="w-64 sm:w-80 lg:w-full max-w-md h-auto drop-shadow-lg"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <svg
            className="w-6 h-6 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
