import axios from "../../utils/axios";
import {loadTv} from "../reducers/TvSlice";
import {removeTv} from "../reducers/TvSlice";

export const asyncLoadTv = (id) => async (dispatch) => {
    try{
        const detail = await axios.get(`/tv/${id}`);
        const externalId = await axios.get(`/tv/${id}/external_ids`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const recommendations = await axios.get(`/tv/${id}/recommendations`);
        const watchProviders = await axios.get(`/tv/${id}/watch/providers`);
        let TheUltimateTvDetails = {
            detail: detail.data,
            externalId: externalId.data,
            videos: videos.data.results.find(vdo => vdo.type === "Trailer"),
            similar: similar.data,
            recommendations: recommendations.data.results,
            watchProviders: watchProviders.data.results.IN,
        }
        dispatch(loadTv(TheUltimateTvDetails));
        // console.log(TheUltimateTvDetails);
    }
    catch(error){
        console.log(error);
    }
}