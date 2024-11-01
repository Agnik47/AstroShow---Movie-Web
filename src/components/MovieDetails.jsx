import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncLoadMovie, removeMovie } from "../store/actions/movieAction";
import { Link, Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import Horizontalcards from "../partials/Horizontalcards";
import MovieLoader from "../utils/MovieLoader";

const MovieDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(asyncLoadMovie(id));
    return () => {
      dispatch(removeMovie());
    };
  }, [id, dispatch]);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  return info && info.detail ? (
    <div
      className=" relative w-full min-h-[230vh] md:min-h-[140vh] text-white flex flex-col items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: "cover", 
        backgroundPosition: "center",     
        backgroundRepeat: "no-repeat", 

      }}
    >
      {/* Navigation */}
      <nav className="w-full flex items-center gap-5 p-5 md:p-10 text-xl">
        <button onClick={() => navigate(-1)} className="hover:text-purple-500 transition-colors duration-300">
          <i className="ri-arrow-left-line"></i>
        </button>
        <a href={info.detail.homepage} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors duration-300">
          <i className="ri-external-link-fill"></i>
        </a>
        <a href={`https://www.imdb.com/title/${info.detail.imdb_id}/`} target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors duration-300">
          IMDb
        </a>
      </nav>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 w-full max-w-6xl px-5 md:px-10 py-5">
        <img
          src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}
          alt={info.detail.title}
          className="h-80 w-60 object-cover shadow-lg rounded-lg"
        />

        <div className="flex flex-col gap-4 text-center md:text-left w-full md:w-2/3">
          <h1 className="text-4xl md:text-5xl font-bold">
            {info.detail.title || info.detail.original_title}
            <span className="text-2xl font-light text-gray-300 ml-2">
              ({new Date(info.detail.release_date).getFullYear()})
            </span>
          </h1>

          <div className="flex justify-center md:justify-start items-center gap-4 mt-3">
            <span className="text-lg md:text-xl bg-yellow-600 px-3 py-1 rounded-full">
              {(info.detail.vote_average * 10).toFixed()}%
            </span>
            <p className="text-lg md:text-xl">User Score</p>
            <p className="text-md md:text-lg text-gray-300">
              {info.detail.release_date} • {info.detail.genres.map((g) => g.name).join(", ")} • {info.detail.runtime} min
            </p>
          </div>

          <p className="italic text-gray-400 text-lg">{info.detail.tagline}</p>
          <h2 className="text-2xl font-semibold mt-5">Overview</h2>
          <p className="text-md md:text-lg text-gray-300">{info.detail.overview}</p>

          <Link
            to={`${pathname}/trailer`}
            className="inline-flex items-center justify-center mt-5 px-5 py-2 bg-purple-600 text-white rounded-md text-lg font-medium hover:bg-purple-500 transition-colors"
          >
            <i className="ri-play-fill mr-2 text-2xl"></i> Play Trailer
          </Link>
        </div>
      </div>

      {/* Platforms */}
      {/* <div className="w-full max-w-6xl px-5 md:px-10 my-10">
        <h2 className="text-2xl font-bold mb-5">Available On Platforms</h2>
        <div className="flex gap-5">
          {info.watchproviders && info.watchproviders.flatrate && (
            <div className="flex gap-3 items-center">
              <h3 className="text-lg">Stream:</h3>
              {info.watchproviders.flatrate.map((provider, index) => (
                <img
                  key={index}
                  src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                  alt={provider.provider_name}
                  title={provider.provider_name}
                  className="w-10 h-10 rounded-lg"
                />
              ))}
            </div>  
          )}
          {info.watchproviders && info.watchproviders.rent && (
            <div className="flex gap-3 items-center">
              <h3 className="text-lg">Rent:</h3>
              {info.watchproviders.rent.map((provider, index) => (
                <img
                  key={index}
                  src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                  alt={provider.provider_name}
                  title={provider.provider_name}
                  className="w-10 h-10 rounded-lg"
                />
              ))}
            </div>
          )}
          {info.watchproviders && info.watchproviders.buy && (
            <div className="flex gap-3 items-center">
              <h3 className="text-lg">Buy:</h3>
              {info.watchproviders.buy.map((provider, index) => (
                <img
                  key={index}
                  src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
                  alt={provider.provider_name}
                  title={provider.provider_name}
                  className="w-10 h-10 rounded-lg"
                />
              ))}
            </div>
          )}
        </div>
      </div> */}

      {/* Recommendations */}
      <div className="w-full max-w-6xl px-5 md:px-10 mt-10">
        <h2 className="text-3xl font-bold text-white">Recommendations & Similar Movies</h2>
        <Horizontalcards h1Header="hidden" data={info.recommendations.length ? info.recommendations : info.similar} cardClass="backdrop-blur-xl" />
      </div>
      
      <Outlet />
    </div>
  ) : <MovieLoader />;
};

export default MovieDetails;
