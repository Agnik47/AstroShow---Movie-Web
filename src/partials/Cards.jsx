import React from 'react';
import { Link } from 'react-router-dom';

const Cards = ({ data, title }) => {
    console.log("Title in cards",title);
  return (
    <div className="grid mt-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {data.map((card, index) => {
        // Determine the image path from the available options
        const imageUrl = card.backdrop_path || card.poster_path || card.profile_path; 
        
        return (
          <Link
            key={index}
            className="group relative rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${imageUrl}`} // Dynamically selecting the image
              alt={card.title || card.name || card.original_title || card.original_name}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-white text-lg font-bold">
                {card.title || card.name || card.original_title || card.original_name}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
