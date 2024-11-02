import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import BackVideo from "../../accets/BackVideo.mp4";
import ProfilePic from "../../accets/ProfilePic.png";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container relative flex flex-col items-center justify-center min-h-screen w-full  text-white">
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover z-0" autoPlay loop muted>
        <source src={BackVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-1"></div>

     

      {/* Profile Section */}
      <div className="relative z-20 text-center">
        <img src={ProfilePic} alt="Profile" className="w-32 ml-14 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#6556CD] shadow-lg animate__animated animate__fadeInDown" />
        <h1 className="mt-4 text-4xl font-semibold text-white animate__animated animate__fadeIn animate__delay-1s">
          Agnik Paul
        </h1>
        <p className="text-md text-gray-300 animate__animated animate__fadeIn animate__delay-2s">
          Full Stack Developer | AI/ML | Creator
        </p>
      </div>

      {/* Content Section */}
      <div className="content-section relative z-20 flex flex-col md:flex-row gap-8 mt-10 text-center md:text-left max-w-5xl px-6">
        <div className="card about-card animate__animated animate__fadeInUp">
          <h2 className="card-title text-yellow-600"  >About the Website</h2>
          <p className="card-text">
            This website is a movie information platform, built using React and Redux to help users explore and discover trending movies, shows, and personalized recommendations.
          </p>
        </div>
        <div className="card tech-card animate__animated animate__fadeInUp animate__delay-1s">
          <h2 className="card-title text-yellow-600">Technologies Used</h2>
          <p className="card-text"> 
            Built with a modern tech stack: React for UI, Redux for state management,Used Infinite Scroll  and React Player for Playing the trailers and used Tailwind to create an immersive movie-themed experience.
          </p>
        </div>
        <div className="card developer-card animate__animated animate__fadeInUp animate__delay-2s">
          <h2 className="card-title text-yellow-600">About Me</h2>
          <p className="card-text">
            I’m Agnik Paul, a passionate frontend developer who loves blending design and technology. This project reflects my love for movies and my skills in creating engaging digital experiences.
          </p>
        </div>
      </div>

      {/* Cinematic Button */}
      <button
        onClick={() => navigate('/')}
        className="mt-12 px-8 py-3 bg-[#6556CD] text-white font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 animate__animated animate__pulse animate__infinite"
      >
        Back to Homepage
      </button>
    </div>
  );
};

export default About;
