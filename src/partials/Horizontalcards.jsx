import React, { useState } from "react";
import noimage from "../accets/no-image.jpg";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

// Custom Dropdown Component

const Horizontalcards = ({ data, categories, setCategories, cardClass }) => {
  // Dropdown options for filtering
  const filterOptions = ["All", "TV Shows", "Movies"];

  // Function to convert category to API-friendly value
  const convertToApiCategory = (selectedFilter) => {
    switch (selectedFilter) {
      case "TV Shows":
        return "tv";
      case "Movies":
        return "movie";
      default:
        return "all";
    }
  };

  return (
    <div className="p-5 w-full bg-transparent rounded-lg shadow-lg">
      <div className="mb-7 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">
          Trending{" "}
          {categories === "tv"
            ? "TV Shows"
            : categories === "movie"
            ? "Movies"
            : "Items"}
        </h1>

        {/* Custom Dropdown Filter */}
        <Dropdown
          options={filterOptions}
          selectedOption={
            categories === "tv"
              ? "TV Shows"
              : categories === "movie"
              ? "Movies"
              : "All"
          }
          onOptionChange={(option) =>
            setCategories(convertToApiCategory(option))
          }
        />
      </div>

      <div className="Cards w-full flex overflow-x-auto overflow-y-hidden space-x-6">
        {data.map((item, index) => (
          <Link
            to={`/${item.media_type}/details/${item.id}`}
            key={index}
            className={`Card relative hover:scale-105 transition-transform duration-300 p-3 rounded-lg shadow-lg min-w-[250px] flex flex-col justify-between ${cardClass}`}
          >
            {/* Movie Poster */}
            {item.poster_path || item.backdrop_path || item.profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w500/${
                  item.poster_path || item.backdrop_path || item.profile_path
                }`}
                alt={item.name || item.title}
                className="w-full h-72 object-cover rounded-lg"
              />
            ) : (
              <img
                src={noimage}
                alt="No Image"
                className="w-full h-72 object-cover rounded-lg"
              />
            )}

            {/* Information Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg p-4">
              <h2 className="text-lg font-semibold text-white">
                {item.name ||
                  item.title ||
                  item.original_name ||
                  item.original_title}
              </h2>
              <p className="text-sm text-gray-300 mt-1">
                {item.release_date
                  ? new Date(item.release_date).getFullYear()
                  : "N/A"}
              </p>

              <p className="text-sm text-gray-300 mt-1 line-clamp-3">
                {item.overview
                  ? item.overview.slice(0, 100) + "..."
                  : "No description available."}
              </p>
            </div>

            {/* Rating Badge */}
            {item.vote_average ? (
              <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md">
                {item.vote_average.toFixed(1)} ⭐
              </span>
            ) : (
              <span className="absolute top-3 right-3 bg-gray-600 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md">
                N/A ⭐
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Horizontalcards;
