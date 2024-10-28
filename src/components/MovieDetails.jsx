import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie, removeMovie } from "../store/actions/movieAction";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  console.log(info);
  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, []);

  return info && info.detail ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="text-white w-screen h-screen"
    ></div>
  ) : (
    <h1>Loading...</h1>
  );
};

export default MovieDetails;
