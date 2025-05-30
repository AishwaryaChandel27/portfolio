"use client";

import { ArrowDownTrayIcon, EnvelopeIcon } from "@heroicons/react/24/solid";


const Hero = () => {
  return (
    <section
  className="
    w-full 
    h-screen 
    bg-white dark:bg-gray-900 
    px-3 sm:px-12 md:px-24 lg:px-32 
    transition-colors duration-300 
    flex items-center justify-center
  "
>
  <div className="text-center flex flex-col items-center justify-center gap-6 max-w-3xl w-full">
    {/* Profile Image */}
    <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden shadow-lg">
      <img
        src="/download.jpeg"
        alt="Aishwarya Chandel"
        className="object-cover rounded-full w-full h-full"
      />
    </div>

    {/* Name */}
    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-inter text-gray-900 dark:text-white flex items-center gap-2">
      Hi <span className="animate-wave text-4xl">👋</span>, I'm Aishwarya Chandel
    </h3>

    {/* Title */}
    <h2 className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-bold font-inter">
      Full Stack and AI Developer
    </h2>

    {/* Bio */}
    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl font-inter leading-relaxed">
      I build intelligent, scalable web apps that blend the power of full-stack technologies with modern AI.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-6 mt-6 w-full max-w-xs sm:max-w-md justify-center">
      <a
        href="https://drive.google.com/file/d/1X33Py0gFzlNqyKDdoSOOVw6PQ4sLVYGQ/view?usp=drive_link"
        download
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-600 dark:bg-green-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow w-full sm:w-auto"
      >
        <ArrowDownTrayIcon className="w-5 h-5" />
        Download CV
      </a>

      <a
        href="#contact"
        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200 shadow w-full sm:w-auto"
      >
        <EnvelopeIcon className="w-5 h-5" />
        Contact Me
      </a>
    </div>
  </div>
</section>

  );
};

export default Hero;
