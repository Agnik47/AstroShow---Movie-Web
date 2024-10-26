import React, { useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
    
  const [rating, setRating] = useState(true);

  return (
    <div className="grid mt-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-[#1F1E24] px-[2vw]">
      {data.map((card, index) => {
        // Determine the image path from the available options
        {
          // console.log(card);
        }
        const imageUrl =
          card.backdrop_path || card.poster_path || card.profile_path;

        return (
          <Link
            to={`/${title === "Movies" ? "movies" : title === "TV Shows" ? "tv-shows" : title === "People" ? "people" : "mylist"}/details/${card.id}`}
            key={index}
            className="group relative rounded-lg overflow-hidden  shadow-lg transform transition-all duration-300 hover:scale-105"
          >
            <img
              loading="lazy"
              src={`https://image.tmdb.org/t/p/w500/${imageUrl}`} // Dynamically selecting the image
              alt={
                card.title ||
                card.name ||
                card.original_title ||
                card.original_name
              }
              className="w-full h-[400px] object-cover"
            />
            
            {/* Raiting Div */}
            {rating === true ? <div className="Rating absolute w-[3.5vw] h-[3.5vw] rounded-full flex justify-center items-center right-3 top-3 bg-gradient-to-r from-[#6556CD] to-pink-500 text-white shadow-lg text-sm font-semibold transform -translate-y-1/2 translate-x-1/2">
              {(card.vote_average * 10).toFixed()} 
              <span className="text-xs">%</span>
            </div> :<></>}  

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-white text-lg font-bold">
                {card.title ||
                  card.name ||
                  card.original_title ||
                  card.original_name}
              </h3>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Cards;
