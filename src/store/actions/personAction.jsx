export { removePerson } from "../reducers/PersonSlice";
import axios from "../../utils/axios";
import { loadPerson } from "../reducers/PersonSlice";

export const asyncloadperson = (id) => async (dispatch) => {
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const combinedCredits = await axios.get(
            `/person/${id}/combined_credits`
        );
        const tvCredits = await axios.get(`/person/${id}/tv_credits`);
        const movieCredits = await axios.get(`/person/${id}/movie_credits`);

        let TheUltimateDetails = {
            detail: detail.data,
            externalid: externalid.data,
            combinedCredits: combinedCredits.data,
            movieCredits: movieCredits.data,
            tvCredits: tvCredits.data,
        };

        dispatch(loadPerson(TheUltimateDetails));
        console.log(TheUltimateDetails);
        
    } catch (error) {
        console.log("Error: ", error);
    }
};