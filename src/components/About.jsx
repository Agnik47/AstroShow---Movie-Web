import React from 'react';
import { useNavigate } from 'react-router-dom';
import BackVideo from "../accets/BackVideo.mp4";
import ProfilePic from "../accets/ProfilePic.png";

const About = () => {
  document.title = "AstroShow - About";
  const navigate = useNavigate();

  return (
    <div className="about-container relative flex flex-col md:flex-row items-center justify-center min-h-[130vh] lg:min-h-screen md:min-h[280vh] w-full text-white">
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
        <source src={BackVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>

      {/* Left Column - Profile and About Me */}
      <div className="relative z-20 flex flex-col items-center md:items-start p-6 md:w-1/3 h-full justify-center text-center md:text-left space-y-6 max-w-sm">
        <img src={ProfilePic} alt="Profile" className="w-24 h-24 md:ml-20  sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 border-[#6556CD] shadow-xl transform transition duration-500 hover:scale-110" />
        <h1 className="mt-4 text-2xl md:ml-16 sm:text-3xl md:text-4xl font-bold text-white transition duration-500 hover:text-[#6556CD]">
          Agnik Paul
        </h1>
        <p className="text-sm md:ml-8 sm:text-md text-gray-300 mt-2 animate-fade-in">
          Full Stack Developer | AI/ML | Creator 🌌
        </p>
        <div className="bg-white bg-opacity-5 rounded-lg p-4 sm:p-6 shadow-lg">
          <h2 className="text-yellow-400 text-xl sm:text-2xl font-semibold mb-2">👨‍💻 About Me</h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            I’m Agnik Paul, a passionate frontend developer who loves blending design and technology. This project reflects my love for movies and my skills in creating engaging digital experiences.
          </p>
        </div>
          <p onClick={()=>navigate("/contact")} className='cursor-pointer text-sm hover:underline lg:ml-[6vw] hover:text-yellow-300 transition duration-300'> Contact Me :)</p>
      </div>

      {/* Right Column - About Website, Technologies Used, and Tech Stack Table */}
      <div className="relative z-20 flex flex-col space-y-4 p-4 sm:p-6 md:w-2/3 h-full ">
        {/* About the Website */}
        <div className="bg-white bg-opacity-5 rounded-lg p-4 sm:p-6 shadow-lg transform transition duration-500 hover:scale-105">
          <h2 className="text-yellow-400 text-xl sm:text-2xl font-semibold mb-2">🎬 About the Website</h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            AstroShow is a movie information platform built with React and Redux, allowing users to explore trending movies, shows, and recommendations effortlessly.
          </p>
        </div>

        {/* Technologies Used */}
        <div className="bg-white bg-opacity-5 rounded-lg p-4 sm:p-6 shadow-lg transform transition duration-500 hover:scale-105">
          <h2 className="text-yellow-400 text-xl sm:text-2xl font-semibold mb-2">💻 Technologies Used</h2>
          <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
            Built with a modern tech stack: React for UI, Redux for state management, Tailwind CSS for styling, and React Player for trailers, creating an immersive movie experience.
          </p>
        </div>

        {/* Tech Stack Table */}
        <div className="overflow-x-auto">
          <h2 className="text-yellow-400 text-xl sm:text-2xl font-semibold mb-4 text-center">🛠️ Tech Stack</h2>
          <table className="min-w-full bg-white bg-opacity-5 text-gray-300 rounded-lg shadow-lg text-xs sm:text-sm sm:mb-10">
            <thead>
              <tr className="bg-[#6556CD] text-white text-left">
                <th className="px-2 sm:px-4 py-3 font-semibold">🔧 Technology</th>
                <th className="px-2 sm:px-4 py-3 font-semibold">💡 Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-white hover:bg-opacity-10 transition-colors">
                <td className="px-2 sm:px-4 py-3">⚛️ React</td>
                <td className="px-2 sm:px-4 py-3">Frontend library for building UI</td>
              </tr>
              <tr className="hover:bg-white hover:bg-opacity-10 transition-colors">
                <td className="px-2 sm:px-4 py-3">🗄️ Redux</td>
                <td className="px-2 sm:px-4 py-3">State management for React</td>
              </tr>
              <tr className="hover:bg-white hover:bg-opacity-10 transition-colors">
                <td className="px-2 sm:px-4 py-3">🚏 React Router</td>
                <td className="px-2 sm:px-4 py-3">Handles routing between pages</td>
              </tr>
              <tr className="hover:bg-white hover:bg-opacity-10 transition-colors">
                <td className="px-2 sm:px-4 py-3">🌐 Axios</td>
                <td className="px-2 sm:px-4 py-3">API requests to fetch movie data</td>
              </tr>
              <tr className="hover:bg-white hover:bg-opacity-10 transition-colors">
                <td className="px-2 sm:px-4 py-3">🧰 @reduxjs/toolkit</td>
                <td className="px-2 sm:px-4 py-3">Simplifies Redux configuration</td>
              </tr>
              <tr className="hover:bg-white hover:bg-opacity-10 transition-colors">
                <td className="px-2 sm:px-4 py-3">🎨 CSS Modules</td>
                <td className="px-2 sm:px-4 py-3">Modular styling</td>
              </tr>
              <tr className="hover:bg-white hover:bg-opacity-10 transition-colors">
                <td className="px-2 sm:px-4 py-3">🏗️ HTML5/CSS3</td>
                <td className="px-2 sm:px-4 py-3">Structuring and styling</td>
              </tr>
              <tr className="hover:bg-white hover:bg-opacity-10 transition-colors">
                <td className="px-2 sm:px-4 py-3">✨ JavaScript (ES6+)</td>
                <td className="px-2 sm:px-4 py-3">Core programming language</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute bottom-4  sm:bottom-6 px-6 py-2 sm:px-8 sm:py-3 bg-[#6556CD] text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 hover:bg-[#5144b3] focus:outline-none z-20"
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default About;
