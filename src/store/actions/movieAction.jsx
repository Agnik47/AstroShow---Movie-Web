import axios from "../../utils/axios";
import { loadMovie } from "../reducers/MovieSlice";
export { removeMovie } from "../reducers/MovieSlice";

export const asyncLoadMovie = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalId = await axios.get(`/movie/${id}/external_ids`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`);
    let TheUltimateMovieDetails = {
      detail: detail.data,
      externalId: externalId.data,      
      videos: videos.data.results.find((vdo) => vdo.type === "Trailer"),
      similar: similar.data,
      recommendations: recommendations.data.results,
      watchProviders: watchProviders.data.results.IN,
    };
    dispatch(loadMovie(TheUltimateMovieDetails));
    // console.log(TheUltimateMovieDetails);
  } catch (error) {
    console.log(error);
  }
};
