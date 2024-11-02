import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import { asyncLoadTv } from '../store/actions/tvAction';
import { removeTv } from '../store/reducers/TvSlice';
import MovieLoader from '../utils/MovieLoader';
import Horizontalcards from '../partials/Horizontalcards';
import P_DeatilsLoader from '../utils/P_DeatilsLoader';

const TvDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { info } = useSelector((state) => state.tv);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncLoadTv(id));
    return () => {
      dispatch(removeTv());
    };
  }, [id, dispatch]);

  return info && info.detail ? (
    <div
      className="relative w-full min-h-[340vh] md:min-h-[190vh] text-white flex flex-col items-center bg-black "
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
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
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 w-full max-w-5xl px-5 md:px-10 py-5 bg-black bg-opacity-70 rounded-lg shadow-lg mt-10">
        <img
          src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`}
          alt={info.detail.name}
          className="h-72 w-48 object-cover shadow-md rounded-md"
        />

        <div className="flex flex-col gap-3 w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl font-bold">
            {info.detail.name || info.detail.original_title}
            <span className="text-xl font-light text-gray-300 ml-2">
              ({new Date(info.detail.first_air_date).getFullYear()} - {info.detail.status === 'Ended' ? new Date(info.detail.last_air_date).getFullYear() : 'Present'})
            </span>
          </h1>
          <p className="italic text-gray-400">{info.detail.tagline}</p>
          <p className="text-md text-gray-300">
            Created by: {info.detail.created_by.map((creator) => creator.name).join(', ')}
          </p>
          <div className="flex items-center gap-4 mt-3">
            <span className="text-md bg-yellow-600 px-3 py-1 rounded-full">
              {(info.detail.vote_average * 10).toFixed()}%
            </span>
            <p>User Score</p>
            <p className="text-sm text-gray-300">
              {info.detail.genres.map((g) => g.name).join(", ")} • {info.detail.episode_run_time[0]} min/episode
            </p>
          </div>

          <h2 className="text-lg font-semibold mt-4">Overview</h2>
          <p className="text-sm text-gray-300">{info.detail.overview}</p>

          <Link
            to={`${pathname}/trailer`}
            className="inline-flex items-center justify-center mt-5 px-4 py-2 bg-purple-600 text-white rounded-lg text-md font-medium hover:bg-purple-500 transition-colors"
          >
            <i className="ri-play-fill mr-2"></i> Play Trailer
          </Link>
        </div>
      </div>

      {/* Additional Details */}
      <div className="w-full max-w-5xl px-5 md:px-10 mt-8">
        <h2 className="text-xl font-bold mb-4">Additional Details</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-black bg-opacity-50 p-5 rounded-md shadow-md">
          <p><strong>Network:</strong> {info.detail.networks.map((network) => network.name).join(', ')}</p>
          <p><strong>Languages:</strong> {info.detail.languages.join(', ')}</p>
          <p><strong>Episodes:</strong> {info.detail.number_of_episodes}</p>
          <p><strong>Seasons:</strong> {info.detail.number_of_seasons}</p>
          <p><strong>Production Companies:</strong> {info.detail.production_companies.map((company) => company.name).join(', ')}</p>
          <p><strong>Production Countries:</strong> {info.detail.production_countries.map((country) => country.name).join(', ')}</p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="w-full max-w-5xl px-5 md:px-10 mt-8">
        <h2 className="text-2xl font-bold">Seasons and Serise</h2>
        <Horizontalcards dropDown2="hidden" h1Header="hidden" data={info.detail.seasons.length ? info.detail.seasons : <><h1>NO SEASONS ARE THERE</h1></>} cardClass="backdrop-blur-md" />
      </div>

      <div className="w-full max-w-5xl px-5 md:px-10 mt-8">
        <h2 className="text-2xl font-bold">Recommendations & Similar Movies</h2>
        <Horizontalcards  h1Header="hidden" data={info.recommendations.length ? info.recommendations : info.similar} cardClass="backdrop-blur-md" />
      </div>

      <Outlet />
    </div>
  ) : <P_DeatilsLoade r />;
};

export default TvDetails;
